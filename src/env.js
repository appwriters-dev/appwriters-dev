import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	NOTION_DATABASE_ID: { static: true },
	NOTION_API_SECRET: { static: true },
	FLUTTER_APPWRITE_LESSONS_PUBLISHED: { static: true },
	PUBLIC_MF_30_PUBLISHED_DATE: { public: true, static: true },
	PUBLIC_ANALYTICS_ID: { public: true, static: true }
});
