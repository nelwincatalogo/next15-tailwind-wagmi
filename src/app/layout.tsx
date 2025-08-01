import '@/styles/globals.css';

import type { Metadata } from 'next';

import { geistMono, geistSans, inter, poppins } from '@/components/common/font';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { isDevMode } from '@/core/constants';
import ReactQueryProvider from '@/providers/lib/react-query';

export const metadata: Metadata = {
	metadataBase: new URL('https://vercel.com'),
	title: 'Next-Tailwind Starter Template',
	description: 'Starter Template',
	keywords: ['nextjs', 'tailwindcss', 'template', 'starter', 'kit'],
	openGraph: {
		siteName: 'Next-Tailwind Starter Template',
		title: 'Next-Tailwind Starter Template',
		description: 'Starter Template',
		images: '/banner.png',
		type: 'website',
	},
	twitter: {
		title: 'Next-Tailwind Starter Template',
		description: 'Starter Template',
		images: '/banner.png',
		card: 'summary_large_image',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				{isDevMode && (
					<script
						src="https://unpkg.com/react-scan/dist/auto.global.js"
						async
					/>
				)}
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.variable} font-sans antialiased`}
			>
				<ReactQueryProvider>
					<TooltipProvider>{children}</TooltipProvider>
				</ReactQueryProvider>
				<Toaster />
			</body>
		</html>
	);
}
