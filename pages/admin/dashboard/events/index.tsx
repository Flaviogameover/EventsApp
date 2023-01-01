import { ReactElement } from "react";
import DashboardLayout from "@Layout/dashboard-layout";
import { NextPageWithLayout } from "@pages/_app";

const Events:NextPageWithLayout = () => {
	return (
		<div>
			<h1>Events</h1>
		</div>
	);
};

export default Events;

Events.getLayout = (page: ReactElement) => <DashboardLayout>{page}</DashboardLayout>;