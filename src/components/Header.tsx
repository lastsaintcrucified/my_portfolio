import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ name: "Home", href: "#home" },
		{ name: "About", href: "#about" },
		{ name: "Projects", href: "#projects" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-background/80 backdrop-blur-md shadow-md py-3" : "py-5"
			}`}
		>
			<div className='container mx-auto px-4 flex justify-between items-center'>
				<a
					href='#'
					className='text-2xl font-bold font-heading'
				>
					Portfolio
				</a>

				{/* Mobile menu button */}
				<button
					className='block md:hidden'
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				>
					{isMenuOpen ? (
						<X className='h-6 w-6' />
					) : (
						<Menu className='h-6 w-6' />
					)}
				</button>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex space-x-10'>
					{navItems.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className='nav-link font-medium'
						>
							{item.name}
						</a>
					))}
				</nav>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className='md:hidden fixed inset-0 bg-background pt-24 px-4 flex flex-col items-center animate-fade-in'>
						<nav className='flex flex-col space-y-8 text-center w-full'>
							{navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className='text-xl font-medium py-2'
									onClick={() => setIsMenuOpen(false)}
								>
									{item.name}
								</a>
							))}
						</nav>
					</div>
				)}

				<Button
					asChild
					className='hidden md:inline-flex'
				>
					<a
						href='/resume.pdf'
						target='_blank'
						rel='noopener noreferrer'
					>
						Resume
					</a>
				</Button>
			</div>
		</header>
	);
};

export default Header;
