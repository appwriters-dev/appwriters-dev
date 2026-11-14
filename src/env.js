import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	FLUTTER_APPWRITE_LESSONS_PUBLISHED: { static: true },
	PUBLIC_MF_30_PUBLISHED_DATE: { public: true, static: true },
	PUBLIC_ANALYTICS_ID: { public: true, static: true }
});
