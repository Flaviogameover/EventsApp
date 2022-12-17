import Link from 'next/link';
import {SiEventbrite} from 'react-icons/si';

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

export default Header;
