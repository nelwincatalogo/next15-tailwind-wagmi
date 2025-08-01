/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { QueryClient } from '@tanstack/react-query';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';
import { useEffect, useState } from 'react';
import { Config, createConfig, http, WagmiProvider } from 'wagmi';
import { ronin, saigon } from 'wagmi/chains';

import { env } from '@/core/config/env';
import { StateProvider } from '@/providers/app/state';

import ReactQueryProvider from '../lib/react-query';

declare global {
	interface Window {
		grecaptcha: any;
		dataLayer: any;
	}
}

const chainId = Number(env.NEXT_PUBLIC_CHAINID);

export const config: Config = createConfig(
	getDefaultConfig({
		// Your dApps chains
		chains: [chainId === 2020 ? ronin : saigon],
		transports: {
			[ronin.id]: http(),
			[saigon.id]: http(),
		},

		// Required API Keys
		walletConnectProjectId: env.NEXT_PUBLIC_REOWN_PROJECT_ID as string,

		// Required App Info
		appName: 'Next15-Wagmi',
		enableFamily: false,

		// Optional App Info
		// appDescription: 'Your App Description',
		// appUrl: 'https://family.co', // your app's url
		// appIcon: 'https://family.co/logo.png', // your app's icon, no bigger than 1024x1024px (max. 1MB)
	})
);

export const queryClient = new QueryClient();

interface IWeb3ProviderProps {
	children: React.ReactNode;
}

export default function Web3Provider({ children }: IWeb3ProviderProps) {
	const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

	useEffect(() => {
		if (recaptchaLoaded) return;

		const handleLoaded = () => {
			window.grecaptcha.ready();
		};

		const script = document.createElement('script');
		script.src = `https://www.google.com/recaptcha/api.js?render=${env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
		document.body.appendChild(script);
		script.addEventListener('load', handleLoaded);

		setRecaptchaLoaded(true);
	}, [recaptchaLoaded]);

	return (
		<WagmiProvider config={config}>
			<ReactQueryProvider>
				<StateProvider>
					<ConnectKitProvider>{children}</ConnectKitProvider>
				</StateProvider>
			</ReactQueryProvider>
		</WagmiProvider>
	);
}
