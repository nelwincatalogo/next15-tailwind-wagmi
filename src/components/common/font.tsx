'use client';

import { Geist, Geist_Mono, Inter, Poppins } from 'next/font/google';

export const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

export const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const poppins = Poppins({
	variable: '--font-poppins',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

export const inter = Inter({
	variable: '--font-inter',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});
