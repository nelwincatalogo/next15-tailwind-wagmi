import { PHASE_PRODUCTION_BUILD } from 'next/constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
module.exports = async (phase: string, { defaultConfig }: any) => {
	/**
	 * @type {import('next').NextConfig}
	 */
	const nextConfig = {
		...defaultConfig,
		output: 'export', // To enable a static export
		trailingSlash: true, // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
		reactStrictMode: true, // prevent double rerendering
	};

	// Apply production-only configurations here
	if (phase === PHASE_PRODUCTION_BUILD) {
		return {
			...nextConfig,
			compiler: {
				removeConsole: {
					exclude: ['error', 'warn'], // remove logs except error and warn
				},
			},
		};
	}

	return nextConfig;
};
