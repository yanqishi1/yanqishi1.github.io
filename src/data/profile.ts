export interface SocialLink {
	name: string;
	href: string;
}

export const PROFILE = {
	name: 'Zhonghan Qin',
	tagline: 'Researcher · Creator · Open-source enthusiast',
	bio: [
		'I explore human-AI collaboration and applied intelligence, tracking emerging papers and tools.',
		'I document cities and nature with photography, then turn those snapshots into stories and posts.',
		'This site is my digital garden—feel free to wander around and revisit anytime.',
	],
	location: 'Wuhan, China',
	email: 'zhonghanqin666@gmail.com',
	socials: [
		{ name: 'GitHub', href: 'https://github.com/yanqishi1' },
		// { name: 'LinkedIn', href: 'https://www.linkedin.com' },
		// { name: 'Twitter', href: 'https://x.com' },
	] satisfies SocialLink[],
};

