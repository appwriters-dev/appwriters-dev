
/**
 * 
 * @param {string} courseId 
 * @param {string} lessonId 
 * @returns 
 */
const fetchLessonById = async (courseId, lessonId) => {
    const posts = await Promise.all(
        Object.entries(import.meta.glob('/src/routes/courses/*/lessons/*.md')).map(async ([path, resolver]) => {
            if (!path.includes(courseId)) return {};
            /**
             * @type {any}
             */
            const post = await resolver();
            return {
                title: post.metadata.title,
                id: post.metadata.id,
                subtitle: post.metadata.subtitle,
                path: path,
                content: post.metadata.id == lessonId ? post.default.render().html : ''
            }
        })
    );
    const post = posts.find((post) => post.id == lessonId)
    if (!post) {
        throw { message: 'Not Found' };
    }
    return {
        lesson: post
    };
};

export default fetchLessonById;
