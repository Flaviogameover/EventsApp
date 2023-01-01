import Link from "next/link";
import { AiFillTags, AiOutlineHome } from "react-icons/ai";
import { CgNotes } from 'react-icons/cg';
import { FiUsers } from "react-icons/fi";
import { GoRss } from "react-icons/go";

const SideBar: React.FC = () => {
	return (
		<div className="panel-left">
			<div className="panel-user">
				<div className="panel-user-image" />
				<h1>Flávio Lima</h1>
			</div>
			<div className="panel-option">
				<div className="panel-option-item">
					<Link passHref href="/admin/dashboard">
						<AiOutlineHome /> Dashboard
					</Link>
				</div>
				<div className="panel-option-item">
					<Link passHref href="/admin/dashboard/events"> // folder structure -> admin/dashboard/events/index.tsx
						<CgNotes /> Events Manager
					</Link>
					<div className="panel-option-item-list">
						<Link passHref href="/admin/dashboard/events/list-city"> // folder structure -> admin/dashboard/events/list-city/index.tsx
							List Cities
						</Link>
						<Link passHref href="/admin/dashboard/events/list-events"> // folder structure -> admin/dashboard/events/list-events/index.tsx
							List Events
						</Link>
					</div>
				</div>
				<div className="panel-option-item">
					<Link passHref href="/dashboard/users">
						<FiUsers /> Users
					</Link>
				</div>
				<div className="panel-option-item">
					<Link passHref href="/dashboard/tags">
						<AiFillTags /> Categories
					</Link>
				</div>
				<div className="panel-option-item">
					<Link passHref href="/dashboard/subs">
						<GoRss /> Subscriptions
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
