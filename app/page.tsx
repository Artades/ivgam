"use client";
import AboutSection from "@/components/about-section";
import LinkSection from "@/components/link-section";
import { LinkItemProps } from "@/interfaces/link.interface";
import axios from "@/core/axios";

import { useEffect, useState } from "react";

export default function Home() {
	const [links, setLinks] = useState<LinkItemProps[] | null>();

	useEffect(() => {
		const getLinks = async () => {
			try {
				const response = (await axios.get("/links")).data;
				const data = response.data;
				console.log(data);
				setLinks(data);
			} catch (error) {
				console.log(error);
			}
		};

		getLinks();
	}, []);

	return (
		<div className="bg-zinc-900 w-full min-h-screen relative isolate overflow-hidden ">
			<div
				className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
				aria-hidden="true"
			>
				<div
					className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-rose-500 to-indigo-500 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
				/>
			</div>
			<div className="container">
				<div className="w-full flex flex-col">
					<AboutSection />

					<LinkSection links={links} />
				</div>
			</div>
			
		</div>
	);
}
