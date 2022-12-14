import Link from 'next/link';

const EventCity: () => JSX.Element = () => {
	return (
		<div>
			<h1>Events in London</h1>

			<Link href="/events/event1">Event 1</Link>
			<Link href="/events/event2">Event 2</Link>
			<Link href="/events/event3">Event 3</Link>
		</div>
	);
};

export default EventCity;
