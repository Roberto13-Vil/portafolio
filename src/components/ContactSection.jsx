import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = () => {
        setTimeout(() => {
            toast({
                title:"Message sent!",
                description: "Thank you for your message. I´ll get back to you soon...",
            });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Looking to hire a motivated data scientist? I’m actively seeking opportunities 
                where I can contribute, learn, and grow professionally. Feel free to reach out 
                if you're looking for someone who’s passionate about data and ready to take on 
                real-world challenges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                    {" "}
                    Contact Information
                    </h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/> {" "}
                            </div>

                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:robertvilchis787@gmail.com" 
                                className="text-muted-foreground hover:text-primary transition-colors">
                                    robertvilchis787@gmail.com
                                </a>
                            </div>

                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/> {" "}
                            </div>

                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+525581697312" 
                                className="text-muted-foreground hover:text-primary transition-colors">
                                    +52 (55) 8169 7312
                                </a>
                            </div>

                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/> {" "}
                            </div>

                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Mexico City (CDMX), Mexico
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4"> Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/roberto-atonatiuh-solis-vilchis" target="_blank">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://t.me/data_robert" target="_blank">
                                <FaTelegram size={24} />
                            </a>
                            <a href="https://github.com/Roberto13-Vil" target="_blank">
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>
                    <form target="_blank" onSubmit={handleSubmit} action="https://formsubmit.co/robertvilchis787@gmail.com" method="POST" className="space-y-6 ">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2"> {" "} Your Name </label>
                            <input type="text" id="name" name="name" required 
                            className="w-full px-4 py-3 rounded-md border dorder-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Example: Roberto Vilchis..."/>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2"> {" "} Your Email </label>
                            <input type="email" id="email" name="email" required 
                            className="w-full px-4 py-3 rounded-md border dorder-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Example: robertvilchis787@gmail.com..."/>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2"> {" "} Your Message </label>
                            <textarea id="message" name="message" required 
                            className="w-full px-4 py-3 rounded-md border dorder-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary resize-none"
                            placeholder="Example: Hello, I´d like to talk about..."/>
                        </div>

                        <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2",)} >
                            {isSubmitting ? "Sending...":"Send Menssage"} <Send size={16}/>
                        </button>

                    </form>
                </div>


            </div>

        </div>
    </section>
    );
};