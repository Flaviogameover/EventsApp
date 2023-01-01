import { ReactElement } from "react";
import DashboardLayout from "@Layout/dashboard-layout";
import { NextPageWithLayout } from "@pages/_app";

const ListEvents:NextPageWithLayout = () => {
	return (
		<div>
			<h1>ListEvents</h1>
		</div>
	);
};

export default ListEvents;

ListEvents.getLayout = (page: ReactElement) => <DashboardLayout>{page}</DashboardLayout>;