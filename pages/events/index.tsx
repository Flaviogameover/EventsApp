import Link from 'next/link';
import Image from 'next/image';
import { IHomeProps } from '../../interfaces';
import { TGetServerSideProps } from '../../types';

const getStaticProps: () => Promise<TGetServerSideProps> = async () => {
	const { events_categories } = await import('../../data/data.json');
	return {
		props: {
			categories: events_categories,
		},
	};
};
const Events = ({ categories }: IHomeProps): JSX.Element => (
	<div>
		<h1>Events</h1>
		{categories.map((category) => (
			<Link key={category.id} href={`/events/${category.id}`} passHref>
				<Image
					src={category.image}
					alt={category.title}
					width={300}
					height={300}
				/>
				<h2>{category.title}</h2>
			</Link>
		))}
	</div>
);

export default Events;
export { getStaticProps };
