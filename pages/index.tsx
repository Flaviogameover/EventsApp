import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { TGetServerSideProps } from '../types';
import { IHomeProps } from '../interfaces';

const getServerSideProps: () => Promise<TGetServerSideProps> = async () => {
	const data = await import('../data/data.json');
	const { events_categories } = data;
	console.log(events_categories);
	return {
		props: {
			categories: events_categories,
		},
	};
};

const Home = ({ categories }: IHomeProps): JSX.Element => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Events App</title>
				<meta name="description" content="A Next.js app for events" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<nav>
					<img />
					<Link href="/" passHref>Home</Link>
					<Link href="/events" passHref>Events</Link>
					<Link href="/about-us" passHref>About Us</Link>
				</nav>
			</header>

			<main className={styles.main}>
				{categories.map((category) => (
					<Link key={category.id} href={`/events/${category.id}`} passHref>
						<Image
							src={category.image}
							alt={category.title}
							width={300}
							height={300}
						/>
						<h2>{category.title}</h2>
						<p>{category.description}</p>
					</Link>
				))}
			</main>

			<footer className={styles.footer}>
				<p>© 2022 Flávio Lima. </p>
				<p>All rights reserved.</p>
			</footer>
		</div>
	);
};

export default Home;
export { getServerSideProps };
