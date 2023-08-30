import React, { FC, useEffect, useState } from "react";
import { motion, stagger } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { LinkItemProps } from "@/interfaces/link.interface";
import imageLoader from "@/imageLoader";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LinkItem: FC<LinkItemProps> = ({
	title,
	path,
	imageUrl,
	recent,
	delay,
	distance,
}) => {
	const [active, setActive] = useState<boolean>(false);
	const staggerItems = stagger(0.1, { startDelay: 0.15 });

	useEffect(() => {
		setTimeout(() => {
			setActive(true);
		}, 400);
	}, []);

	return (
		<Link href={path} className="link">
			<motion.a
				style={{
					translate: active ? 0 : distance,
					opacity: active ? 1 : 0,
				}}
				initial={{ opacity: 0, scale: 0.3, filter: "blur(20px)" }}
				animate={{
					opacity: active ? 1 : 0,
					scale: active ? 1 : 0.3,
					filter: active ? "blur(0px)" : "blur(20px)",
				}}
				transition={{
					duration: 0.2,
					delay: 0.4,
				}}
			>
				<Card className="hover:bg-zinc-800/50 px-3 py-5 bg-zinc-800 border-none rounded-xl flex flex-col items-center gap-5">
					<div className="w-full h-full flex flex-col items-center justify-between gap-5">
						<Image
							src={imageUrl}
							alt="Social Media"
							width={50}
							height={50}
							className="w-[50px] h-[50px]"
							loader={imageLoader}
						/>

						<p className="text-white">{title}</p>
					</div>
				</Card>
			</motion.a>
		</Link>
	);
};

export default LinkItem;
