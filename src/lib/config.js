/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 * 
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/ 

export const siteTitle = 'Appwriters'
export const siteDescription = 'Appwriters, your guide to modern application development.'
export const siteURL = 'appwriters.dev'
export const siteLink = 'https://github.com/appwriters-dev/appwriters-dev'
export const siteAuthor = 'Damodar Lohani'
export const siteAuthorURL = 'https://dlohani.com.np'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Blog',
		route: '/blog'
	}, {
		title: 'About',
		route: '/about'
	}, {
		title: 'Contact',
		route: '/contact' 
	},
]