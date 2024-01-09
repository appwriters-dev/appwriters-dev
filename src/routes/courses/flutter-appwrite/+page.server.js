import { redirect } from '@sveltejs/kit';

export const load = async ({ url, fetch }) => {
	return {
        title: 'Complete Flutter and Appwrite course',
        subtitle: 'An exciting course to learn allabout building beautiful and functional cross-platform applications with Flutter using the backend power of Appwrite',
        introVideo: 'IeZXtOH60kU',
        curriculum: [
            {
                number: '01',
                id: 'getting-started-with-appwrite',
                title: 'Getting started with Appwrite',
                description: 'Sign up to Appwrite cloud and create a Appwrite project that will host data for your application.',
            },
            {
                number: '02',
                id: 'getting-started-with-flutter',
                title: 'Getting started with Flutter',
                description: 'Create new Flutter project and push to GitHub. Setup basic GitHub action to help maintain code quality.'
            },
            {
                number: '03',
                id: 'flutter-and-appwrite-integration',
                title: 'Flutter and Appwrite integration',
                description: 'Integrate Flutter and Appwrite projects so that they can communicate with each other.',
            },
            {
                number: '04',
                id: 'dependency-injection',
                title: 'Dependency injection',
                description: 'Set up dependency injection in Flutter using get_it',

            },
            {
                number: '05',
                id: 'state-management',
                title: 'State management',
                description: 'Set up state management in Flutter using riverpod',
            },
            {
                number: '06',
                id: 'routing',
                title: 'Routing',
                description: 'Set up routing in Flutter application using Go router package.',
            }
        ]
    }
};
