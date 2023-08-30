"use client";
import React, { FC, useEffect, useState } from "react";
import { animate, motion, stagger } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { LinkItemProps } from "@/interfaces/link.interface";
import imageLoader from "@/imageLoader";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LinkItem: FC<LinkItemProps> = ({ title, path, imageUrl, recent }) => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 400); 
  }, []);

  return (
		<motion.div
			initial={{ opacity: 0, y: 150 }} // Начальные стили до анимации
			animate={{ opacity: 1, y: 0 }} // Анимационные стили после активации
			transition={{ duration: 0.5, ease: "easeOut" }} // Параметры анимации
			className={cn(
				"transition duration-500 bg-zinc-800 border-none rounded-xl flex flex-col items-center gap-5",
				{
					"hover:bg-zinc-800/50 px-3 py-5": active,
				}
			)}
		>
			<Link
				href={path}
				className="link"
			
			>
				<Card className="hover:bg-zinc-800/50 px-3 py-5 bg-zinc-800 border-none  rounded-xl flex flex-col items-center gap-5">
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
			</Link>
		</motion.div>
	);
};

export default LinkItem;
