import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

type ProjectType = {
	id: number;
	title: string;
	description: string;
	image: string;
	tags: string[];
	demoUrl?: string;
	githubUrl?: string;
	featured: boolean;
};

const Projects = () => {
	const [filter, setFilter] = useState<string | null>(null);

	const projects: ProjectType[] = [
		{
			id: 1,
			title: "Fix-It | Full-Stack Service Marketplace",
			description:
				"A full-stack service providing platform connct service provoder and clients.",
			image: "/my_portfolio/fix.PNG",
			tags: [
				"NextJs",
				"Typescript",
				"TailwindCss",
				"Firebase/Firestore",
				"Shadcn",
			],
			demoUrl: "https://fix-it-three.vercel.app/",
			githubUrl: "https://github.com/lastsaintcrucified/Fix_it",
			featured: true,
		},
		{
			id: 2,
			title: "Learnhub | E-learning platform",
			description:
				"A responsive learning platform where instructors can upload lessons and students can enroll in various courses. Role based route protection is enabled from backend.",
			image: "/my_portfolio/learn.PNG",
			tags: [
				"NextJs",
				"TypeScript",
				"Tailwind",
				"NestJs",
				"Supabase",
				"Render",
				"Vercel",
			],
			demoUrl: "https://e-learning-front-end-taupe.vercel.app/",
			githubUrl: "https://github.com/lastsaintcrucified/eLearningNestJs",
			featured: true,
		},
		{
			id: 3,
			title: "Windows 10 | Windows 10 clone",
			description:
				"A simple clone of windows 10 UI. Calculator, text editor etc are integrated.",
			image: "/my_portfolio/window.PNG",
			tags: ["NextJs", "TypeScript", "Tailwind", "Shadcn"],
			demoUrl: "https://windows10-beta.vercel.app/",
			githubUrl: "https://github.com/lastsaintcrucified/windows10",
			featured: false,
		},
		{
			id: 4,
			title:
				"Project management (Manaage projects) | Manage and assign projects",
			description:
				"A simple project management dashboard, admin can assign devs to new projects",
			image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
			tags: ["NextJs", "TypeScript", "Tailwind", "Shadcn", "Firebase"],
			demoUrl: "https://project-dashboard-django.vercel.app",
			githubUrl:
				"https://github.com/lastsaintcrucified/project_dashboard-django-",
			featured: true,
		},
		{
			id: 5,
			title: "E-commerce | React native",
			description: "E-cpmmerce app built on React native",
			image:
				"https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			tags: ["React Native", "Redux", "Expo", "MongoDb", "Express"],
			demoUrl: "https://github.com/lastsaintcrucified/native-shop-frontend",
			githubUrl: "https://github.com/lastsaintcrucified/native-shop-frontend",
			featured: true,
		},
		{
			id: 6,
			title: "Bro Chat  (Messaging App) ",
			description: "A messaging app between users of its own",
			image: "/my_portfolio/chat.PNG",
			tags: ["ReactJs", "Firebase"],
			demoUrl: "https://react-fb-chat.firebaseapp.com/",
			githubUrl: "https://github.com/lastsaintcrucified/react-fb-chat",
			featured: true,
		},
		{
			id: 7,
			title: "Uber Clone | React native",
			description: "Clone of Uber app",
			image:
				"https://images.unsplash.com/photo-1554672408-730436b60dde?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			tags: ["React Native", "Redux", "Expo"],
			demoUrl: "https://github.com/lastsaintcrucified/native-shop-frontend",
			githubUrl: "https://github.com/lastsaintcrucified/native-shop-frontend",
			featured: true,
		},
		{
			id: 8,
			title: "Repeat (Find favourite restaurant) | React native",
			description: "Finding restaurants nearby",
			image:
				"https://images.unsplash.com/photo-1601972602288-3be527b4f18a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			tags: ["React Native", "Redux", "Expo"],
			demoUrl: "https://github.com/lastsaintcrucified/repeat",
			githubUrl: "https://github.com/lastsaintcrucified/repeat",
			featured: true,
		},
	];

	const allTags = Array.from(
		new Set(projects.flatMap((project) => project.tags))
	);

	const filteredProjects = filter
		? projects.filter((project) => project.tags.includes(filter))
		: projects;

	return (
		<section
			id='projects'
			className='section-container bg-secondary/30'
		>
			<h2 className='section-heading'>My Projects</h2>

			<div className='mb-8 flex flex-wrap gap-2'>
				<Button
					variant={filter === null ? "default" : "outline"}
					onClick={() => setFilter(null)}
					size='sm'
				>
					All
				</Button>
				{allTags.map((tag) => (
					<Button
						key={tag}
						variant={filter === tag ? "default" : "outline"}
						onClick={() => setFilter(tag)}
						size='sm'
					>
						{tag}
					</Button>
				))}
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{filteredProjects.map((project) => (
					<Card
						key={project.id}
						className='overflow-hidden group hover:shadow-lg transition-shadow'
					>
						<div className='relative h-48 overflow-hidden'>
							<img
								src={project.image}
								alt={project.title}
								className='w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105'
							/>
							{project.featured && (
								<Badge className='absolute top-2 right-2'>Featured</Badge>
							)}
						</div>

						<CardHeader>
							<CardTitle>{project.title}</CardTitle>
							<div className='flex flex-wrap gap-1 mt-2'>
								{project.tags.map((tag) => (
									<Badge
										key={tag}
										variant='secondary'
									>
										{tag}
									</Badge>
								))}
							</div>
						</CardHeader>

						<CardContent>
							<CardDescription>{project.description}</CardDescription>
						</CardContent>

						<CardFooter className='flex gap-2'>
							{project.demoUrl && (
								<Button
									variant='outline'
									size='sm'
									asChild
								>
									<a
										href={project.demoUrl}
										target='_blank'
										rel='noopener noreferrer'
									>
										<ExternalLink className='h-4 w-4 mr-1' /> Demo
									</a>
								</Button>
							)}

							{project.githubUrl && (
								<Button
									variant='outline'
									size='sm'
									asChild
								>
									<a
										href={project.githubUrl}
										target='_blank'
										rel='noopener noreferrer'
									>
										<Github className='h-4 w-4 mr-1' /> Code
									</a>
								</Button>
							)}
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};

export default Projects;
