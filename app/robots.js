export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/admin/', // Hide admin routes from crawlers
        },
        sitemap: 'https://ayushsrivastava.dev/sitemap.xml',
    }
}
