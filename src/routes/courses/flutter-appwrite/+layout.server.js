import { redirect } from '@sveltejs/kit';
import { FLUTTER_APPWRITE_LESSONS_PUBLISHED } from '$env/static/private';

export const prerender = false;

export const load = async ({ url, fetch }) => {
    return {
        title: 'Complete Flutter and Appwrite course',
        subtitle: 'An exciting course to learn allabout building beautiful and functional cross-platform applications with Flutter using the backend power of Appwrite',
        metaKeywords: 'flutter, appwrite, course, tutorial, learn, mobile, web, development, backend, api, database, storage, auth, authentication, security, cloud, open source',
        metaDescription: 'An exciting course to learn allabout building beautiful and functional cross-platform applications with Flutter using the backend power of Appwrite',
        videoId: 'cmboLwHvsFU',
        categories: [
            'Setup',
            'Authentication',
            'Database - projects'
        ],
        curriculum: [
            {
                number: '01',
                category: 'Setup',
                id: 'getting-started-with-appwrite',
                title: 'Getting started with Appwrite',
                description: 'Sign up to Appwrite cloud and create a Appwrite project that will host data for your application.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 1,
            },
            {
                number: '02',
                category: 'Setup',
                id: 'getting-started-with-flutter',
                title: 'Getting started with Flutter',
                description: 'Create new Flutter project and push to GitHub. Setup basic GitHub action to help maintain code quality.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 2,
            },
            {
                number: '03',
                category: 'Setup',
                id: 'flutter-and-appwrite-integration',
                title: 'Flutter and Appwrite integration',
                description: 'Integrate Flutter and Appwrite projects so that they can communicate with each other.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 3,
            },
            {
                number: '04',
                category: 'Setup',
                id: 'dependency-injection',
                title: 'Dependency injection',
                description: 'Set up dependency injection in Flutter using <a target="_blank" href="https://pub.dev/packages/get_it">get it</a>.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 4,

            },
            {
                number: '05',
                category: 'Setup',
                id: 'state-management',
                title: 'State management',
                description: 'Set up state management in Flutter using <a target="_blank" href="https://pub.dev/packages/flutter_riverpod">riverpod</a>.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 5,
            },
            {
                number: '06',
                category: 'Setup',
                id: 'routing',
                title: 'Routing',
                description: 'Set up routing in Flutter application using <a target="_blank" href="https://pub.dev/packages/go_router">Go router</a> package.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 6,
            },
            {
                number: '07',
                category: 'Authentication',
                id: 'creating-account-for-your-user',
                title: 'Creating account for your user',
                description: 'We will create a form that will allow users to create an account in our application. Appwrite will handle the user management for us.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 7,
            },
            {
                number: '08',
                category: 'Authentication',
                id: 'authenticate-user',
                title: 'Authenticate user - login',
                description: 'Allow user to login using their email and password.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 8,
            },
            {
                number: '09',
                category: 'Authentication',
                id: 'auth-state',
                title: 'Authentication state manager',
                description: 'Setup authentication state manager using riverpod.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 9,
            },
            {
                number: '10',
                category: 'Authentication',
                id: 'authenticated-routes',
                title: 'Authenticated routes',
                description: 'Update routing logic to check user authentication status before allowing access to certain routes.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 10,
            },
            {
                number: '11',
                category: 'Database - projects',
                id: 'setup-database',
                title: 'Setup database',
                description: 'Setup database and collection required to save user\'s projects with proper premissions.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 11,
            },
            {
                number: '12',
                category: 'Database - projects',
                id: 'projects-state-manager',
                title: 'Projects state manager',
                description: 'Setup state management for managing projects data using riverpod.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 12,
            },
            {
                number: '13',
                category: 'Database - projects',
                id: 'create-project',
                title: 'Create project',
                description: 'Learn how to add data to Appwrite database with proper permissions.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 13,
            },
            {
                number: '14',
                category: 'Database - projects',
                id: 'list-projects',
                title: 'List projects',
                description: 'Understand how to write simple queries to get data from Appwrite database and display.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 14,
            },
            {
                number: '15',
                category: 'Database - projects',
                id: 'update-project',
                title: 'Update project',
                description: 'Learn how to let user update the data already saved in Appwrite database.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 15,
            },
            {
                number: '16',
                category: 'Database - projects',
                id: 'delete-project',
                title: 'Delete project',
                description: 'Learn to build a safe delete operation with confirmation dialog to delete data in Appwrite database.',
                published: FLUTTER_APPWRITE_LESSONS_PUBLISHED >= 16,
            },
        ]
    }
};
