import Head from 'next/head';
import { Header, PanelHeader } from '../components/Header';
import Footer from '../components/Footer';
import styles from '../../styles/admin.module.scss';
import { AiFillTags, AiOutlineHome } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { FiUsers } from 'react-icons/fi';
import { GoRss } from 'react-icons/go';
import Link from 'next/link';
import SideBar from '../components/Sidebar';

const DashboardLayout: ({
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

						<SideBar />
						<div className="panel-right">{children}</div>
					</div>
				</main>
			</div>

			<Footer />
		</>
	);
};

export default DashboardLayout;
