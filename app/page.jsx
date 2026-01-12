import { Mail, Github, Linkedin, Code, ArrowRight } from 'lucide-react';
import { user, projects } from '@/lib/data';
import Link from 'next/link';
import dbConnect from '@/lib/db';
import Post from '@/models/Post';

export const revalidate = 60; // Revalidate ISR every 60 seconds

async function getLatestPosts() {
  try {
    await dbConnect();
    const posts = await Post.find({}).sort({ date: -1 }).limit(4).lean();
    return posts.map(post => ({
      ...post,
      _id: post._id.toString(),
      date: post.date ? post.date.toISOString() : null,
      createdAt: post.createdAt ? post.createdAt.toISOString() : null,
      updatedAt: post.updatedAt ? post.updatedAt.toISOString() : null,
    }));
  } catch (e) {
    console.error("Failed to fetch posts for home:", e);
    return [];
  }
}

export default async function Home() {
  const latestPosts = await getLatestPosts();
  const recentProjects = projects.slice(0, 3);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-12 pt-10">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div>
            <h2 className="text-xl text-teal-600 dark:text-teal-400 font-medium mb-2">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
              {user.name}
            </h1>
            <p className="text-2xl md:text-3xl text-zinc-600 dark:text-zinc-300 font-light">
              {user.title}
            </p>
          </div>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
            {user.summary}
          </p>

          <div className="flex justify-center md:justify-start space-x-6 pt-4">
            <SocialLink href={user.social.github} icon={<Github size={24} />} label="GitHub" />
            <SocialLink href={user.social.linkedin} icon={<Linkedin size={24} />} label="LinkedIn" />
            <SocialLink href={`mailto:${user.email}`} icon={<Mail size={24} />} label="Email" />
            <SocialLink href={user.social.leetcode} icon={<Code size={24} />} label="LeetCode" />
          </div>

          <div className="pt-8">
            <a href="/Ayush_Srivastava_Resume.pdf" download className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-full transition-all hover:shadow-lg inline-block">
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-teal-200 dark:bg-teal-900 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img
              src={user.profilePicture}
              alt={user.name}
              className="rounded-2xl shadow-2xl w-full h-full object-cover relative z-10 border-2 border-white dark:border-zinc-800 rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Recent Projects</h2>
          <Link href="/projects" className="text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1">
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {recentProjects.map((project, index) => (
            <div key={index} className="group bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts */}
      {latestPosts.length > 0 && (
        <section>
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Latest from Blog</h2>
            <Link href="/blog" className="text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1">
              Read more <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {latestPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post._id} className="block group">
                <article className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {post.title}
                  </h3>
                  <time className="text-sm text-zinc-500 dark:text-zinc-400 mb-3 block">
                    {new Date(post.date).toLocaleDateString()}
                  </time>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm line-clamp-2">
                    {post.excerpt || post.content.substring(0, 100)}...
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300 hover:bg-teal-100 dark:hover:bg-teal-900 hover:text-teal-600 dark:hover:text-teal-400 transition-all hover:-translate-y-1"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
