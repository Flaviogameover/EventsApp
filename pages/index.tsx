import { IHomeProps, TGetServerSideProps } from '@interfaces/index';
import HomePage from '@components/Home';
import Layout from '@Layout/homepage-layout';
import { NextPageWithLayout } from '@pages/_app';
import { api } from '@services/api';

const getServerSideProps: () => Promise<TGetServerSideProps> = async () => {
	const { data } = await api.get('/posts/cities');
	return {
		props: {
			categories: data,
		},
	};
};

const Home: NextPageWithLayout<IHomeProps> = ({ categories }) => {
	return <HomePage categories={categories} />;
};

export default Home;
export { getServerSideProps };

Home.getLayout = (page) => <Layout>{page}</Layout>;
