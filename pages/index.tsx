import { TGetServerSideProps } from '../types';
import { IHomeProps } from '../interfaces';
import HomePage from '../src/components/Home';

const getServerSideProps: () => Promise<TGetServerSideProps> = async () => {
	const data = await import('../data/data.json');
	const { events_categories } = data;
	return {
		props: {
			categories: events_categories,
		},
	};
};

const Home = ({ categories }: IHomeProps): JSX.Element => {
	return <HomePage categories={categories} />;
};

export default Home;
export { getServerSideProps };
