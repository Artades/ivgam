export interface LinkItemProps {
	id?: number;
	title: string;
	path: string;
	imageUrl: string;

	recent: Recent;
}



type Recent = {
	status: boolean;
	color: string;
};
