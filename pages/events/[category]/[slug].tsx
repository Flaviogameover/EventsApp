import Image from 'next/image';
import { TGetStaticPaths as TGSP, IPath, IEvent, ICtx} from '../../../interfaces';

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
		<div>
			<Image
				src={event.image}
				alt={event.title}
				width={1000}
				height={600}
			/>
			<h1>{event.title}</h1>
			<h2>{event.city}</h2>
			<p>{event.description}</p>
		</div>
	);
};

export default Event;

export { getStaticPaths, getStaticProps };
