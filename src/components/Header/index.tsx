import Link from 'next/link';
import { SiEventbrite } from 'react-icons/si';
import { useCookies } from 'react-cookie';

const Header: () => JSX.Element = () => (
	<header>
		<div className="header-container">
			<SiEventbrite />
			<nav>
				<ul>
					<li>
						<Link href="/" passHref>
							Home
						</Link>
					</li>
					<li>
						<Link href="/events" passHref>
							Events
						</Link>
					</li>
					<li>
						<Link href="/about-us" passHref>
							About Us
						</Link>
					</li>
				</ul>
			</nav>
		</div>
		<h1>Nulla nunc mauris</h1>
	</header>
);

const PanelHeader: () => JSX.Element = () => {
	const [cookies, setCookie, removeCookie] = useCookies(['user-event']);

	const handleLogout = () => {
		removeCookie('user-event');
	};

	return (
		<header>
			<Link href="/admin/dashboard" passHref>
				<SiEventbrite />
			</Link>
			<button onClick={handleLogout} type="button">
				Logout
			</button>
		</header>
	);
};

export { Header, PanelHeader };
