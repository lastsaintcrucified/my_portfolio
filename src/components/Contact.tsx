import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef<HTMLFormElement>(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (form.current) {
			emailjs
				.sendForm("service_49g6uei", "template_l65mouc", form.current, {
					publicKey: "HhvjyeV9qMW5SHeDc",
				})
				.then(
					() => {
						console.log("SUCCESS!");
						setIsSubmitting(false);
						toast.success("Message sent successfully!");
						setFormData({ name: "", email: "", message: "" });
					},
					(error) => {
						console.log("FAILED...", error.text);
					}
				);
		}
	};

	const contactInfo = [
		{ icon: Mail, label: "Email", value: "itowhidul876@gmail.com" },
		{ icon: Phone, label: "Phone", value: "+880 01311802479" },
		{
			icon: MapPin,
			label: "Location",
			value: "Halishahar, Chittagong, Bangladesh",
		},
	];

	const socialLinks = [
		{
			icon: Github,
			label: "GitHub",
			href: "https://github.com/lastsaintcrucified",
		},
		{
			icon: Linkedin,
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/md-towhidul-islam-bhuyan-a6a814158/",
		},
		{
			icon: Mail,
			label: "Stackoverflow",
			href: "https://stackoverflow.com/users/10709285/last-saint",
		},
	];

	return (
		<section
			id='contact'
			className='section-container'
		>
			<h2 className='section-heading'>Get In Touch</h2>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-12'>
				<div>
					<h3 className='text-2xl font-bold mb-6'>Contact Information</h3>

					<div className='space-y-6'>
						{contactInfo.map((item, index) => (
							<div
								key={index}
								className='flex items-start gap-3'
							>
								<div className='bg-muted p-3 rounded-full'>
									<item.icon className='h-5 w-5 text-primary' />
								</div>
								<div>
									<p className='font-medium'>{item.label}</p>
									<p className='text-muted-foreground'>{item.value}</p>
								</div>
							</div>
						))}
					</div>

					<div className='mt-8'>
						<h4 className='text-lg font-semibold mb-4'>Connect With Me</h4>
						<div className='flex gap-4'>
							{socialLinks.map((link, index) => (
								<a
									key={index}
									href={link.href}
									target='_blank'
									rel='noopener noreferrer'
									className='bg-muted hover:bg-muted/80 transition-colors p-3 rounded-full'
									aria-label={link.label}
								>
									<link.icon className='h-5 w-5' />
								</a>
							))}
						</div>
					</div>
				</div>

				<div>
					<h3 className='text-2xl font-bold mb-6'>Send Me a Message</h3>

					<form
						ref={form}
						onSubmit={handleSubmit}
						className='space-y-4'
					>
						<div>
							<label
								htmlFor='name'
								className='block text-sm font-medium mb-1'
							>
								Name
							</label>
							<Input
								id='name'
								name='name'
								value={formData.name}
								onChange={handleChange}
								placeholder='Your name'
								required
							/>
						</div>

						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium mb-1'
							>
								Email
							</label>
							<Input
								id='email'
								name='email'
								type='email'
								value={formData.email}
								onChange={handleChange}
								placeholder='your.email@example.com'
								required
							/>
						</div>

						<div>
							<label
								htmlFor='message'
								className='block text-sm font-medium mb-1'
							>
								Message
							</label>
							<Textarea
								id='message'
								name='message'
								value={formData.message}
								onChange={handleChange}
								placeholder='How can I help you?'
								rows={5}
								required
							/>
						</div>

						<Button
							type='submit'
							className='w-full'
							disabled={isSubmitting}
						>
							{isSubmitting ? "Sending..." : "Send Message"}
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
