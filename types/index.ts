export type TGetServerSideProps = {
	props: {
		categories: {
			id: string;
			title: string;
			description: string;
			image: string;
		}[];
	};
};