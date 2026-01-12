import dbConnect from '@/lib/db';
import Post from '@/models/Post';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    await dbConnect();
    const post = await Post.findOne({ slug }).lean();

    if (!post) {
        return { title: 'Post Not Found' };
    }

    return {
        title: `${post.title} | Ayush Srivastava`,
        description: post.excerpt || post.content.substring(0, 150),
    };
}

async function getPost(slug) {
    await dbConnect();
    const post = await Post.findOne({ slug }).lean();
    if (!post) return null;

    return {
        ...post,
        _id: post._id.toString(),
        date: post.date ? post.date.toISOString() : null,
        createdAt: post.createdAt ? post.createdAt.toISOString() : null,
        updatedAt: post.updatedAt ? post.updatedAt.toISOString() : null,
    };
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:underline mb-8">
                <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Link>

            <header className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">{post.title}</h1>
                <time className="text-gray-500 dark:text-gray-400">{new Date(post.date || post.createdAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}</time>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
                {/* Simple rendering for now, could use a markdown parser later if needed */}
                {post.content.split('\n').map((paragraph, index) => (
                    paragraph ? <p key={index}>{paragraph}</p> : <br key={index} />
                ))}
            </div>
        </article>
    );
}
