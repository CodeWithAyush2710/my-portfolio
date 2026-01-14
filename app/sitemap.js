import dbConnect from '@/lib/db';
import Post from '@/models/Post';

export default async function sitemap() {
    const baseUrl = 'https://ayushsrivastava.dev';

    // Static routes
    const routes = [
        '',
        '/works',
        '/projects',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Blog Posts
    let blogRoutes = [];
    try {
        await dbConnect();
        const posts = await Post.find({}).select('slug updatedAt').lean();
        blogRoutes = posts.map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: post.updatedAt || new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        }));
    } catch (error) {
        console.error("Sitemap: Failed to fetch posts", error);
    }

    return [...routes, ...blogRoutes];
}
