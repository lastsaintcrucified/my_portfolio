import { Card, CardContent } from "@/components/ui/card";
import {
	Database,
	Layout,
	Terminal,
	GitBranch,
	Globe,
	Smartphone,
	Server,
} from "lucide-react";

const About = () => {
	const skills = [
		{
			name: "Frontend Development",
			icon: Layout,
			description:
				" Next.js, React, React Native, Angular, Ionic,Tailwind CSS, ShadCN ",
		},
		{
			name: "Backend Development",
			icon: Server,
			description:
				"Node.js, Prisma, Postgresql, NestJs, Express.js, Django REST, Firebase, MongoDB ",
		},
		{
			name: "Mobile Development",
			icon: Smartphone,
			description:
				"Building cross-platform mobile applications with React native, Expo",
		},
		{
			name: "Database Design",
			icon: Database,
			description: "Designing efficient data structures and relationships",
		},
		{
			name: "Version Control",
			icon: GitBranch,
			description: "Managing code with Git and collaborative workflows",
		},
		{
			name: "Web Performance",
			icon: Globe,
			description: "Optimizing sites for speed and efficiency",
		},
		{
			name: "Command Line",
			icon: Terminal,
			description: "Proficient with terminal and Ai integration tools",
		},
	];

	return (
		<section
			id='about'
			className='section-container'
		>
			<h2 className='section-heading'>About Me</h2>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-12'>
				<div>
					<h3 className='text-2xl font-bold mb-4'>Who I Am</h3>
					<p className='text-muted-foreground mb-4'>
						I am a results-driven Full-Stack Developer with 5+ years of
						experience building scalable web and mobile applications.
						Specialized in Next.js, React Native, and Firebase, with a strong
						focus on performance optimization, modular architecture, and
						real-time systems. Proven track record of delivering
						production-ready solutions for startups and enterprises.
					</p>
					<p className='text-muted-foreground'>
						When I'm not coding, you can find me exploring new technologies, or
						sharing knowledge with the developer community through articles and
						tutorials.
					</p>
				</div>

				<div>
					<h3 className='text-2xl font-bold mb-4'>Technical Skills</h3>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
						{skills.map((skill, index) => (
							<Card
								key={index}
								className='border border-border hover:border-primary hover:shadow-md transition-all'
							>
								<CardContent className='p-4 flex gap-3 items-start'>
									<skill.icon className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
									<div>
										<h4 className='font-medium'>{skill.name}</h4>
										<p className='text-sm text-muted-foreground'>
											{skill.description}
										</p>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
