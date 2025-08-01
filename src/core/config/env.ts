import { z } from 'zod';

const envSchema = z.object({
	NEXT_PUBLIC_API_URL: z.string().url({
		message: 'NEXT_PUBLIC_API_URL must be a valid URL',
	}),
	NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string({
		message: 'NEXT_PUBLIC_RECAPTCHA_SITE_KEY must be a string',
	}),
	NEXT_PUBLIC_REOWN_PROJECT_ID: z.string({
		message: 'NEXT_PUBLIC_REOWN_PROJECT_ID must be a string',
	}),
	NEXT_PUBLIC_CHAINID: z.string({
		message: 'NEXT_PUBLIC_CHAINID must be a string',
	}),
});

// This will throw an error if validation fails
const validateEnv = () => {
	const parsed = envSchema.safeParse({
		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
		NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
		NEXT_PUBLIC_REOWN_PROJECT_ID: process.env.NEXT_PUBLIC_REOWN_PROJECT_ID,
		NEXT_PUBLIC_CHAINID: process.env.NEXT_PUBLIC_CHAINID,
	});

	if (!parsed.success) {
		console.error(
			'❌ Invalid environment variables:',
			JSON.stringify(parsed.error.format(), null, 2)
		);
		throw new Error('Invalid environment variables');
	}

	return parsed.data;
};

export const env = validateEnv();
