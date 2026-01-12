import dbConnect from '@/lib/db';
import Post from '@/models/Post';
import Link from 'next/link';

export const revalidate = 60; // Revalidate every 60 seconds

async function getPosts() {
    await dbConnect();
    // Lean queries are faster and return POJOs, but Mongoose documents are fine too if serializable
    // Mongoose documents need to be JSON serializable for Client Components if passed down, 
    // but here we render on server.
    const posts = await Post.find({}).sort({ date: -1 }).lean();
    // Convert _id and date to string to avoid serialization warnings if passed to client components (not strictly needed if processed here)
    return posts.map(post => ({
        ...post,
        _id: post._id.toString(),
        date: post.date ? post.date.toISOString() : null,
        createdAt: post.createdAt ? post.createdAt.toISOString() : null,
        updatedAt: post.updatedAt ? post.updatedAt.toISOString() : null,
    }));
}

export default async function Blog() {
    let posts = [];
    try {
        posts = await getPosts();
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        // Fallback for when DB is not connected locally
    }

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Blog</h1>

            {posts.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                    <h3 className="text-xl font-medium text-gray-600 dark:text-gray-300">No posts yet</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">Check back soon for updates!</p>
                </div>
            ) : (
                <div className="grid gap-8">
                    {posts.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post._id} className="block group">
                            <article className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                    {post.title}
                                </h2>
                                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    <span>{new Date(post.date || post.createdAt).toLocaleDateString()}</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    {post.excerpt || post.content.substring(0, 150) + "..."}
                                </p>
                                <span className="text-teal-600 dark:text-teal-400 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Read article &rarr;
                                </span>
                            </article>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
