"use client"
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Button } from './ui/button';
import AboutModal from './about-modal';
import imageLoader from '@/imageLoader';


const AboutSection = () => {
    return (
			<div className="relative  w-full rounded-xl bg-zinc-800/30 backdrop-blur-md px-5 py-8 ">
				<div className="w-full flex flex-col items-center justify-between">
					<Image
						src={"/me.jpg"}
						alt="Artyom"
						className="w-[150px] h-[150px] rounded-full p-1 border-4 border-dotted border-indigo-500"
						width={200}
						height={200}
						loader={imageLoader}
						quality={100}
					/>

					<div className="flex items-center flex-col gap-3 mt-5">
						<h1 className="text-3xl text-white font-semibold">Artyom Galay</h1>
						<p className="text-muted-foreground text-md">Developer</p>
						<div className="flex gap-3 flex-row items-center">
							<Link href="mailto:artemijgalaj@gmail.com" target="_blank">
								<Button variant={"default"} className="bg-indigo-600 ">
									E-Mail
								</Button>
							</Link>
							<Link href="https://ko-fi.com/ivgam">
								<Button variant={"default"} className="bg-rose-600">
									Donate
								</Button>
							</Link>
						</div>
					</div>
				</div>
				<div className="absolute top-4 right-4">
					<AboutModal />
				</div>
			</div>
		);
};

export default AboutSection;