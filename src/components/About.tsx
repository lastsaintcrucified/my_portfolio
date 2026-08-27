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
						I’m a Software QA / Automation Engineer with a software development background and hands-on experience in manual testing, API testing, and test automation.
My current focus is building my career in Software Quality Assurance, particularly QA Automation and SQA roles where I can combine testing fundamentals with my programming and development experience.
I have hands-on experience with Manual Testing, Functional Testing, Regression Testing, Smoke Testing, Sanity Testing, API Testing, Test Case Design, Bug Reporting, Defect Tracking, SDLC, STLC, Agile, Postman, Jira, Git, Playwright, and Selenium.
For test automation, I have built practical automation projects using Playwright and Selenium, including Todo application automation with Playwright and Demo Web Shop automation with Selenium. These projects have helped me develop practical experience with automated test execution, locators, assertions, test organization, and browser-based testing.
My software development background is another strength I bring to QA. 
					</p>
					<p className='text-muted-foreground'>
						I have worked with React, Next.js, Angular, Node.js, Express.js, NextJS, TypeScript, and other modern development technologies. At Panacea PIT, I worked with Angular and RxJS, developed reusable component libraries, built real-time dashboards, and worked within an Agile development environment using Git and Jira.
I enjoy finding defects, understanding why they happen, creating reliable test scenarios, and improving product quality through systematic testing and automation.
I’m currently looking for Junior SQA Engineer, QA Engineer, QA Automation Engineer, Software Test Engineer, or Junior SDET opportunities where I can contribute, learn from experienced QA professionals, and grow into a strong automation-focused testing professional.
Open to opportunities, collaborations, and conversations with QA/SQA professionals and hiring teams.
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
