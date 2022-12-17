import Image from 'next/image';
import { IPath, IEvent, ICtx} from '../../../interfaces';
import {TGetStaticPaths as TGSP} from '../../../types';

type TGetStaticPaths = TGSP & {
	paths: IPath[];
};

type TGetStaticProps = Promise<{
	props: {
		event: IEvent;
	};
}>;

const getStaticPaths: () => Promise<TGetStaticPaths> = async () => {
	const { allEvents } = await import('../../../data/data.json');
	const paths: IPath[] = allEvents.map((event) => ({
		params: {
			category: event.city,
			slug: event.id,
		},
	}));

	console.log(paths);

	return {
		paths,
		fallback: false,
	};
};

const getStaticProps: (context: ICtx) => TGetStaticProps = async (context) => {
	const { allEvents } = await import('../../../data/data.json');
	const {
		params: { slug },
	} = context;
	const event = allEvents.find((event) => event.id === slug) as IEvent;


	return {
		props: {
			event,
		},
	};
};

const Event: ({ event }: { event: IEvent }) => JSX.Element = ({ event }) => {
	return (
		<div className="event-show">
			<Image
				src={event.image}
				alt={event.title}
				width={1000}
				height={600}
			/>
			<h1>{event.title}</h1>
			<p>{event.description}</p>
		</div>
	);
};

export default Event;

export { getStaticPaths, getStaticProps };
