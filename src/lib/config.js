/**
 * All of these values are used throughout the site – for example,
 * in the <meta> tags, in the footer, and in the RSS feed.
 *
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/

export const siteTitle = 'Appwriters';
export const siteDescription = 'Your go-to destination for learning modern application development for Mobile, Web and desktops using technologies such as Flutter, Dart, Appwrite, Javascript, and more!';
export const siteURL = 'appwriters.dev';
export const siteLink = 'https://appwriters.dev';
export const siteAuthor = 'Damodar Lohani';
export const siteAuthorURL = 'https://dlohani.com.np';
export const defaultCoverImage = 'images/default_cover.svg';

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10;

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Home',
		route: '/',
	},
	{
		title: 'Courses',
		route: '/courses',
	},
	{
		title: 'Blog',
		route: '/blog'
	},
	{
		title: 'Contact',
		route: '/contact'
	},
	{
		title: 'Youtube',
		route: 'https://youtube.com/@appwriters',
		icon: 'youtube'
	}
];
