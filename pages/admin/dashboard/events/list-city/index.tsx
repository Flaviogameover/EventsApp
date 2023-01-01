import { ReactElement } from "react";
import DashboardLayout from "@Layout/dashboard-layout";
import { NextPageWithLayout } from "@pages/_app";

const ListCity:NextPageWithLayout = () => {
	return (
		<div>
			<h1>ListCity</h1>
		</div>
	);
};

export default ListCity;

ListCity.getLayout = (page: ReactElement) => <DashboardLayout>{page}</DashboardLayout>;