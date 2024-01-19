import { redirect } from '@sveltejs/kit';
import { FLUTTER_APPWRITE_LESSONS_PUBLISHED } from '$env/static/private';

export const prerender = false;

export const load = async ({ url, fetch }) => {
	return {
        title: 'Complete Flutter and Appwrite course',
        subtitle: 'An exciting course to learn allabout building beautiful and functional cross-platform applications with Flutter using the backend power of Appwrite',
        videoId: 'cmboLwHvsFU',
        curriculum: [
            {
                number: '01',
                id: 'getting-started-with-appwrite',
                title: 'Getting started with Appwrite',
                description: 'Sign up to Appwrite cloud and create a Appwrite project that will host data for your application.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 1,
            },
            {
                number: '02',
                id: 'getting-started-with-flutter',
                title: 'Getting started with Flutter',
                description: 'Create new Flutter project and push to GitHub. Setup basic GitHub action to help maintain code quality.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 2,
            },
            {
                number: '03',
                id: 'flutter-and-appwrite-integration',
                title: 'Flutter and Appwrite integration',
                description: 'Integrate Flutter and Appwrite projects so that they can communicate with each other.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 3,
            },
            {
                number: '04',
                id: 'dependency-injection',
                title: 'Dependency injection',
                description: 'Set up dependency injection in Flutter using <a target="_blank" href="https://pub.dev/packages/get_it">get it</a>.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 4,

            },
            {
                number: '05',
                id: 'state-management',
                title: 'State management',
                description: 'Set up state management in Flutter using <a target="_blank" href="https://pub.dev/packages/flutter_riverpod">riverpod</a>.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 5,
            },
            {
                number: '06',
                id: 'routing',
                title: 'Routing',
                description: 'Set up routing in Flutter application using <a target="_blank" href="https://pub.dev/packages/go_router">Go router</a> package.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 6,
            },
            {
                number: '07',
                id: 'creating-account-for-your-user',
                title: 'Creating account for your user',
                description: 'We will create a form that will allow users to create an account in our application. Appwrite will handle the user management for us.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 7,
            },
            {
                number: '08',
                id: 'authenticate-user',
                title: 'Authenticate user - login',
                description: 'Allow user to login using their email and password.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 8,
            },
            {
                number: '09',
                id: 'auth-state',
                title: 'Authentication state manager',
                description: 'Setup authentication state manager using riverpod.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 9,
            },
            {
                number: '10',
                id: 'authenticated-routes',
                title: 'Authenticated routes',
                description: 'Update routing logic to check user authentication status before allowing access to certain routes.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 10,
            },
        ]
    }
};
