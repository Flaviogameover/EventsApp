import { IEvent } from "../interfaces";

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

export type TGetStaticPaths = {
	paths: { params: { category: string } }[];
	fallback: boolean;
};

export type TGetStaticProps = Promise<{
	props: {
		events: IEvent[];
	};
}>;