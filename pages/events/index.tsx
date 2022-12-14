import Link from 'next/link';

const Events = (): JSX.Element => (
	<div>
		<h1>Events</h1>
		<Link href="/london">
			<img />
			<h2>Events in London</h2>
		</Link>
		<Link href="/">
			<img />
			<h2>Events in San Francisco</h2>
		</Link>
		<Link href="/">
			<img />
			<h2>Events in Barcelona</h2>
		</Link>
	</div>
);

export default Events;
