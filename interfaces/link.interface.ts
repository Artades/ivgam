export interface LinkItemProps {
	id?: number;
	title: string;
	path: string;
	imageUrl: string;
	delay: number;
	distance: number;
	recent: Recent;
}

type Recent = {
	status: boolean;
	color: string;
};
