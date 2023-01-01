import { AiTwotoneMail } from 'react-icons/ai';
import DashboardLayout from '@Layout/dashboard-layout';
import type { ReactElement } from 'react';

const Dashboard = () => {
	return (
		<>
			<div className="panel-boxes">
				<div className="panel-box">
					<div className="panel-box-header">
						<span>Events</span>
					</div>
					<div className="panel-box-body">
						<span>0</span>
					</div>
				</div>
				<div className="panel-box">
					<div className="panel-box-header">
						<span>Users</span>
					</div>
					<div className="panel-box-body">
						<span>0</span>
					</div>
				</div>
				<div className="panel-box">
					<div className="panel-box-header">
						<span>Subscriptions</span>
					</div>
					<div className="panel-box-body">
						<span>0</span>
					</div>
				</div>
			</div>
			<div className="panel-dashboard-users">
				<div className="panel-dashboard-users-header">
					<h2>Users</h2>
				</div>
				<div className="panel-dashboard-users-body">
					<table>
						<thead>
							<tr>
								<th>Id</th>
								<th>Name</th>
								<th>Email</th>
								<th>Role</th>
								<th>Posts</th>
							</tr>
						</thead>
						<tbody>
							{Array(10)
								.fill(0)
								.map((_, index) => (
									<tr key={index}>
										<td>{index}</td>
										<td>Flávio Lima</td>
										<td>
											<a href="mailto:flaviogameover@gmail.com">
												<AiTwotoneMail />
											</a>
										</td>
										<td>Admin</td>
										<td>0</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Dashboard;

Dashboard.getLayout = (page: ReactElement) => (
	<DashboardLayout>{page}</DashboardLayout>
);
