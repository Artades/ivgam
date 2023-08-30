"use client"
import React, { FC } from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { LinkItemProps } from '@/interfaces/link.interface';
import imageLoader from '@/imageLoader';
import Link from 'next/link';


const LinkItem:FC<LinkItemProps> = ({title, path, imageUrl,  recent }) => {
    return (
			<Link href={path}>
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
		);
};

export default LinkItem;