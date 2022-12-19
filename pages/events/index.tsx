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
