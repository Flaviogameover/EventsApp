import Link from 'next/link';
import Image from 'next/image';
import {
	IPath,
	IEvent,
	IEventCityProps,
} from '../../../interfaces';
import { TGetStaticPaths, TGetStaticProps } from '../../../types';

const getStaticPaths: () => Promise<TGetStaticPaths> = async () => {
	const { events_categories } = await import('../../../data/data.json');
	const paths = events_categories.map((cat) => ({
		params: {
			category: cat.id,
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

const getStaticProps: (context: IPath) => TGetStaticProps = async (context) => {
	const { events_categories, allEvents } = await import(
		'../../../data/data.json'
	);
	console.log(context);
	const {
		params: { category },
	} = context;
	const events: IEvent[] = allEvents.filter(
		(event) => event.city === category
	);

	return {
		props: {
			events,
			pageTitle: events_categories.find((cat) => cat.id === category)
				?.title,
		},
	};
};

const EventCity: ({ events, pageTitle }: IEventCityProps) => JSX.Element = ({
	events,
	pageTitle,
}) => {
	return (
		<div className="events-city">
			<h1>{pageTitle}</h1>
			<div className="event-container">
				{events.map((event) => (
					<Link
						className="event"
						key={event.id}
						href={`/events/${event.city}/${event.id}`}
						passHref
					>
						<Image
							alt={event.id}
							width={300}
							height={250}
							src={event.image}
						/>
						<h2>{event.title}</h2>
					</Link>
				))}
			</div>
		</div>
	);
};

export default EventCity;
export { getStaticPaths, getStaticProps };
