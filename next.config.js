/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		NEXT_MONGODB_URI: process.env.NEXT_MONGODB_URI,
		NEXT_API_URL: process.env.NEXT_API_URL,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'wembleypark.com',
			},
			{
				protocol: 'https',
				hostname: 'via.placeholder.com',
			},
			{
				protocol: 'https',
				hostname: 'picsum.photos',
			},
		],
	},
};

module.exports = nextConfig;
