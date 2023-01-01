import Image from 'next/image';
import React from 'react';
import { IPath, IEvent, ICtx, TGetStaticPaths as TGSP } from '@interfaces/index';
import Layout from '@Layout/homepage-layout';
import { NextPageWithLayout } from '@pages/_app';
import { api } from '@services/api';

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

const Event: NextPageWithLayout<{ event: IEvent }> = ({ event }) => {
	const inputEmail = React.useRef<HTMLInputElement>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const email = inputEmail.current?.value;
		const event_id = event.id;

		try {
			const request = await api.post('/email-register', {
				email,
				event_id,
			});
			alert(request.data.message);
			e.currentTarget.reset();
		} catch (error:any) {
			alert(error.response.data.message);
		}
	};

	return (
		<div className="event-show">
			<Image
				src={event.image}
				alt={event.title}
				height={600}
				width={1000}
			/>
			<h1>{event.title}</h1>
			<p>{event.description}</p>
			<form className="form-email" onSubmit={handleSubmit}>
				<label htmlFor="email">
					Get notified about this event
					<input
						ref={inputEmail}
						type="email"
						placeholder="Your email"
						required
					/>
				</label>
				<button type="submit">Sign up</button>
			</form>
		</div>
	);
};

export default Event;

export { getStaticPaths, getStaticProps };

Event.getLayout = (page) => <Layout>{page}</Layout>;
