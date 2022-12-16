export interface IHomeProps {
	categories: {
		id: string;
		title: string;
		description: string;
		image: string;
	}[];
};

export interface IEvent {
	id: string;
	title: string;
	city: string;
	description: string;
	image: string;
	emails_registered: string[];
};

export interface IPath {
	params: {
		category: string;
		slug?: string;
	};
};

export interface IEventCityProps {
	events: IEvent[];
	pageTitle?: string;
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

export interface ICtx {
	params: {
		slug: string;
	};
};
