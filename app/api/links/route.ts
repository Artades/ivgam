import { LinkItemProps } from "@/interfaces/link.interface";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";


const links = [
	{
		id: 1,
		title: "Flux",
		path: "https://fluux.vercel.app",
		imageUrl: "/images/flux.png",
		
		recent: {
			status: true,
			color: "bg-indigo-500",
		},
	},
	{
		id: 2,
		title: "Telegram",
		path: "https://t.me/ive_got_a_migraine",
		imageUrl: "/images/telegram.png",
		
		recent: {
			status: false,
		},
	},
	{
		id: 3,
		title: "Github",
		path: "https://github.com/artades",
		imageUrl: "/images/github.png",
		recent: {
			status: false,
		},
	},
	{
		id: 4,
		title: "Instagram",
		path: "https://instagram.com/_ive_got_a_migraine",
		imageUrl: "/images/instagram.png",
		
		recent: {
			status: false,
		},
	},
	{
		id: 5,
		title: "Vitae (beta)",
		path: "https://vitae-beta.vercel.app",
		imageUrl: "/images/vitae-beta.png",
		
		recent: {
			status: true,
			color: "bg-sky-500",
		},
	},
	{
		id: 6,
		title: "Twitter",
		path: "https://twitter.com/ivgam_",
		imageUrl: "/images/twitter.svg",
		
		recent: {
			status: false,
		},
	},
	{
		id: 7,
		title: "Discord: #3639",
		path: "https://discord.com",
		imageUrl: "/images/discord.png",
		
		recent: {
			status: false,
		},
	},
	{
		id: 8,
		title: "Vkontakte",
		path: "https://vk.com/ivgam",
		imageUrl: "/images/vk.svg",
		
		recent: {
			status: false,
		},
	},
	{
		id: 9,
		title: "Rick & Morty",
		path: "https://rm-ivgam.vercel.app",
		imageUrl: "/images/rm-ivgam.png",
		
		recent: {
			status: true,
			color: "bg-green-500",
		},
	},
	{
		id: 10,
		title: "Green Yera",
		path: "https://green-yera.vercel.app",
		imageUrl: "/images/greenyera.png",
		
		recent: {
			status: true,
			color: "bg-slate-600",
		},
	},

	{
		id: 11,
		title: "Softlix",
		path: "https://softlix-gules.vercel.app",
		imageUrl: "/images/icons8-popcorn-96 (1).png",
		
		recent: {
			status: true,
			color: "bg-red-500",
		},
	},
];

export async function GET() {
	 return NextResponse.json({ data: links });
}
