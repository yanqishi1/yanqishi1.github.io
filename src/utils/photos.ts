import { readdirSync } from 'node:fs';
import { extname, join } from 'node:path';

export interface PhotoItem {
	src: string;
	filename: string;
}

export interface PhotoCollection {
	tag: string;
	items: PhotoItem[];
}

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);

function isImageFile(name: string) {
	return IMAGE_EXTENSIONS.has(extname(name).toLowerCase());
}

export function getPhotoCollections(): PhotoCollection[] {
	const baseDir = join(process.cwd(), 'public', 'photography');

	let tagDirs: ReturnType<typeof readdirSync> = [];
	try {
		tagDirs = readdirSync(baseDir, { withFileTypes: true });
	} catch (error) {
		return [];
	}

	return tagDirs
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => {
			const tag = dirent.name;
			const dirPath = join(baseDir, tag);
			const files = readdirSync(dirPath, { withFileTypes: true })
				.filter((file) => file.isFile() && isImageFile(file.name))
				.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

			const items: PhotoItem[] = files.map((file) => ({
				src: `/photography/${tag}/${file.name}`,
				filename: file.name,
			}));

			return {
				tag,
				items,
			};
		})
		.filter((collection) => collection.items.length > 0)
		.sort((a, b) => a.tag.localeCompare(b.tag, 'zh-CN'));
}

