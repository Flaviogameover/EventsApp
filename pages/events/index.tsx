import Link from 'next/link';
import Image from 'next/image';
import { IHomeProps, TGetServerSideProps } from '@interfaces/index';
import Layout from '@Layout/homepage-layout';
import { NextPageWithLayout } from '@pages/_app';
import { api } from '@services/api';

const getStaticProps: () => Promise<TGetServerSideProps> = async () => {
	const { data } = await api.get('/posts/cities');
	return {
		props: {
			categories: data,
		},
	};
};

const Events: NextPageWithLayout<IHomeProps> = ({ categories }) => (
	<div className="events">
		<h1>Events</h1>
		<div className="event-container">
			{categories.map((category) => (
				<Link
					className="event"
					key={category.id}
					href={`/events/${category.id}`}
					passHref
				>
					<Image
						src={category.image}
						alt={category.title}
						width={300}
						height={250}
					/>
					<h2>{category.title}</h2>
				</Link>
			))}
		</div>
	</div>
);

export default Events;
export { getStaticProps };

Events.getLayout = (page) => <Layout>{page}</Layout>;
