import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

const Layout: ({ children }: { children: JSX.Element }) => JSX.Element = ({
	children,
}) => (
	<>
		<Head>
			<title>Events App</title>
			<meta name="description" content="A Next.js app for events" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<div className="main-container">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	</>
);
export default Layout;
