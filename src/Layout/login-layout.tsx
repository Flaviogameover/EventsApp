import Head from 'next/head';
import Footer from '../components/Footer';
import { PanelHeader } from '../components/Header';


const LoginLayout: ({
	children,
}: {
	children: JSX.Element;
}) => JSX.Element = ({ children }) => {
	return (
		<>
			<Head>
				<title>Events App</title>
				<meta name="description" content="A Next.js app for events" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="panel-container">
				<PanelHeader />
				<main>
					<div className="dashboard">
						{children}
					</div>
				</main>
			</div>

			<Footer />
		</>
	);
};

export default LoginLayout;
