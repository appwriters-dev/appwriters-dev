import { redirect } from '@sveltejs/kit';
import fetchLessonById from '../../assets/js/fetchLessonById.js';

export const load = async ({ url, fetch, params, parent }) => {
    var data = null;
    try {

        data = await fetchLessonById('flutter-appwrite', params.lessonId);
    } catch (error) {

    }

    let { title, curriculum } = await parent();

    let current = curriculum.findIndex((lesson) => lesson.id === params.lessonId);
    if (current === -1) return redirect(302, '/courses/flutter-appwrite');

    var next = null;
    var previous = null;
    if (current < curriculum.length - 1)
        next = curriculum[current + 1];

    if (current > 0)
        previous = curriculum[current - 1];
    if (!data) {
        let currentLesson = curriculum[current];
        data = {
            lesson: {
                title: currentLesson.title,
                subtitle: currentLesson.description,
                content: 'Coming soon...'
            }
        };
    }

    return {
        lessonId: params.lessonId,
        title: data.lesson.title,
        subtitle: data.lesson.subtitle,
        content: data.lesson.content,
        videoId: data.lesson.videoId,
        courseTitle: title,
        next,
        previous,
    }
}