
import { NextResponse } from "next/server";


const links = [
	{
		id: 1,
		title: "Flux",
		path: "https://fluux.vercel.app",
		imageUrl: "/images/flux.png",
		delay: 0,
		distance: 150,
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
		delay: 200,
		distance: 200,
		recent: {
			status: false,
		},
	},
	{
		id: 3,
		title: "Github",
		path: "https://github.com/artades",
		imageUrl: "/images/github.png",
		delay: 400,
		distance: 250,
		recent: {
			status: false,
		},
	},
	{
		id: 4,
		title: "Instagram",
		path: "https://instagram.com/_ive_got_a_migraine",
		imageUrl: "/images/instagram.png",
		delay: 500,
		distance: 350,
		recent: {
			status: false,
		},
	},
	{
		id: 5,
		title: "Vitae (beta)",
		path: "https://vitae-beta.vercel.app",
		imageUrl: "/images/vitae-beta.png",
		delay: 300,
		distance: 250,
		recent: {
			status: true,
			color: "bg-sky-500",
		},
	},
	{
		delay: 500,
		distance: 450,
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
		delay: 600,
		distance: 250,
		recent: {
			status: false,
		},
	},
	{
		id: 8,
		title: "Vkontakte",
		path: "https://vk.com/ivgam",
		imageUrl: "/images/vk.svg",
		delay: 700,
		distance: 800,
		recent: {
			status: false,
		},
	},
	{
		id: 9,
		title: "Rick & Morty",
		path: "https://rm-ivgam.vercel.app",
		imageUrl: "/images/rm-ivgam.png",
		delay: 400,
		distance: 250,
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
		delay: 100,
		distance: 900,
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
		delay: 400,
		distance: 250,
		recent: {
			status: true,
			color: "bg-red-500",
		},
	},
];

export async function GET() {
	 return NextResponse.json({ data: links });
}
