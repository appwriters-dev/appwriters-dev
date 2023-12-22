import { config } from '../config';
import { resources } from './resources';

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load() {
    return {
        resources: resources,
        title: "#30DaysMasterFlutter | Appwriters",
        metaDescription: "Join our 30-day Flutter learning challenge and master Dart and Flutter in just one month! Each day, you'll receive a new project based educational resources to help you learn the basics of Dart and Flutter.",
        metaKeywords: "Flutter, Dart, 30-day challenge, project-based learning, app development, learn to code, mobile development",
        metaAuthor: "Damodar Lohani",

    }
}