import '../styles/globals.sass';
import type { AppProps } from 'next/app';
import Layout from './../src/components/Layout/intex';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};
export default App;
