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
	animationDistance: number;
	status: boolean;
	color: string;
};
