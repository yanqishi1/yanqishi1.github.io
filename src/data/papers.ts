export interface Paper {
	title: string;
	venue: string;
	venueType?: 'conference' | 'journal';
	year: string;
	summary: string;
	links?: {
		label: string;
		href: string;
	}[];
}

export const PAPERS: Paper[] = [
	{
		title: 'Semi-supervised latent diffusion model for Biliary Atresia class-imbalanced image recognition',
		venue: 'Biomedical Signal Processing and Control',
		venueType: 'journal',
		year: '2024',
		summary:'A latent-diffusion–based semi-supervised method improves early biliary atresia detection by enhancing imbalanced data utilization',
		links: [
			{ label: 'Paper', href: 'https://doi.org/10.1016/j.bspc.2024.106363' }
		],
	},
];

