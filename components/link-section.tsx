import { LinkItemProps } from "@/interfaces/link.interface";
import React, { FC, useEffect, useState } from "react";
import LinkItem from "./link-item";
import { cn } from "@/lib/utils";

interface LinkSectionProps {
	links: LinkItemProps[] | null | undefined;
}
const LinkSection: FC<LinkSectionProps> = ({ links }) => {

	return (
		<div className={cn("w-full grid lg:grid-cols-3  grid-cols-2 my-10 gap-4 ")}>
			{links?.map((link) => (
				<LinkItem
					key={link.id}
					title={link.title}
					path={link.path}
					imageUrl={link.imageUrl}
					delay={link.delay}
					distance={link.distance}
					recent={link.recent}
				/>
			))}
		</div>
	);
};

export default LinkSection;
