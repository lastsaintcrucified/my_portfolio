import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
	return (
		<section
			id='home'
			className='min-h-screen flex items-center relative pt-16'
		>
			<div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent -z-10'></div>
			<div className='container mx-auto px-4'>
				<div className='max-w-3xl'>
					<h1 className='text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 animate-fade-in'>
						<span className='block'>Hi, I'm</span>
						<span className='block text-primary'>Towhidul Islam</span>
					</h1>
					<h2
						className='text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-muted-foreground animate-fade-in'
						style={{ animationDelay: "0.2s" }}
					>
						Full Stack Developer
					</h2>
					<p
						className='text-lg mb-8 max-w-2xl text-muted-foreground animate-fade-in'
						style={{ animationDelay: "0.3s" }}
					>
						I build exceptional digital experiences that make an impact. Focused
						on creating elegant, functional solutions to complex problems.
					</p>
					<div
						className='flex flex-wrap gap-4 animate-fade-in'
						style={{ animationDelay: "0.4s" }}
					>
						<Button
							size='lg'
							asChild
						>
							<a href='#projects'>View My Work</a>
						</Button>
						<Button
							size='lg'
							variant='outline'
							asChild
						>
							<a href='#contact'>Contact Me</a>
						</Button>
					</div>
				</div>
			</div>

			<a
				href='#about'
				className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'
				aria-label='Scroll to About section'
			>
				<ChevronDown className='h-8 w-8 text-primary' />
			</a>
		</section>
	);
};

export default Hero;
