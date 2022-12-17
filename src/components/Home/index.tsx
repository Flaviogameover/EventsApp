import Link from 'next/link';
import Image from 'next/image';
import { IHomeProps } from '../../../interfaces/index';

const HomePage: ({ categories }: IHomeProps) => JSX.Element = ({
	categories,
}) => (
	<div className="home">
		{categories.map((category) => (
			<Link key={category.id} href={`/events/${category.id}`} passHref>
				<div className="home-image">
					<Image
						src={category.image}
						alt={category.title}
						width={450}
						height={300}
					/>
				</div>
				<div className="home-content">
					<h2>{category.title}</h2>
					<p>{category.description}</p>
				</div>
			</Link>
		))}
	</div>
);

export default HomePage;
