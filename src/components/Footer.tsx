import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer className='bg-muted py-8'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col md:flex-row justify-between items-center'>
					<div className='mb-4 md:mb-0'>
						<p className='text-sm text-muted-foreground'>
							© {currentYear} Md. Towhidul Islam Bhy. All rights reserved.
						</p>
					</div>

					<nav className='flex gap-6 mb-4 md:mb-0'>
						<a
							href='#home'
							className='text-sm hover:text-primary transition-colors'
						>
							Home
						</a>
						<a
							href='#about'
							className='text-sm hover:text-primary transition-colors'
						>
							About
						</a>
						<a
							href='#projects'
							className='text-sm hover:text-primary transition-colors'
						>
							Projects
						</a>
						<a
							href='#contact'
							className='text-sm hover:text-primary transition-colors'
						>
							Contact
						</a>
					</nav>

					<Button
						variant='outline'
						size='icon'
						onClick={scrollToTop}
						aria-label='Scroll to top'
					>
						<ChevronUp className='h-5 w-5' />
					</Button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
