import '@styles/globals.scss';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
	const getLayout = Component.getLayout || ((page) => page);
	return getLayout(<Component {...pageProps} />);
};
export default App;

// if (router.pathname.includes('admin')) {
// 	console.log(Component, pageProps);
// 	return (
// 		<PanelLayout>
// 			<Component {...pageProps} />
// 		</PanelLayout>
// 	);
// }

// return (
// 	<Layout>
// 		<Component {...pageProps} />
// 	</Layout>
// );
