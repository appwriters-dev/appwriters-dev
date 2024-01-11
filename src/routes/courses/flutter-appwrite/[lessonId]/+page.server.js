import { redirect } from '@sveltejs/kit';
import fetchLessonById from '../../assets/js/fetchLessonById.js';

export const load = async ({ url, fetch, params }) => {
    let data = await fetchLessonById('flutter-appwrite', params.lessonId);

	return {
        lessonId: params.lessonId,
        title: data.lesson.title,
        subtitle: data.lesson.subtitle,
        content: data.lesson.content,
        videoId: data.lesson.videoId,
    }
}