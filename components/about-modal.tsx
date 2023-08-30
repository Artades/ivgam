import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

const AboutModal = () => {
    return (
			<Dialog>
				<DialogTrigger className="text-muted-foreground text-[13px] p-2 border border-muted-foreground rounded-xl">About Me</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>About me</DialogTitle>
						<DialogDescription>
							Hi there!👋 My name&apos;s Artyom, i&apos;m a web developer who thrives on
							raising the bar for what&apos;s possible with cutting-edge
							technologies. I&apos;ve been on this journey since the age of 16, and
							I&apos;ve spent countless hours honing my skills in HTML, CSS, and JS.
							Along the way, I&apos;ve also immersed myself in Node.js, database
							design, and other exciting tools and technologies. Today, I have
							great expirience in JavaScript, TypeScript, React, and React
							Native, and I&apos;m always looking for ways to deliver engaging,
							innovative web experiences. Take a look at my apps to see some of
							my most impressive projects, as possible you can support me by
							links below and let&apos;s raise the bar together, my freind!😇 🚀
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		);
};

export default AboutModal;