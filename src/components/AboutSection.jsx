import { Brain, BarChart, MessageSquare } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-24 relative">
            {" "}
            <div className="container mx-auto max-w5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Aspiring Data Scientist & Problem Solver
                        </h3>

                        <p className="text-muted-foreground">
                            I'm deeply passionate about turning raw data into meaningful insights and intelligent 
                            solutions. With a solid background in mathematics and applied computing.
                        </p>

                        <p className="text-muted-foreground">
                            I work primarily with Python and tools like pandas, scikit-learn, and matplotlib to 
                            explore, model, and visualize data. Constantly learning and experimenting, I'm building 
                            a portfolio that reflects both analytical rigor and practical problem-solving.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>
                            
                            <a href="/cv.pdf" 
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Brain className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Machine Learning</h4>
                                    <p className="text-muted-foreground">
                                        Building predictive models and learning from data 
                                        using supervised and unsupervised algorithms.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <BarChart className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Exploratory Data Analysis</h4>
                                    <p className="text-muted-foreground">
                                        Exploring datasets through visualization and statistics to uncover 
                                        trends, patterns, and anomalies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MessageSquare className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Natural Language Processing</h4>
                                    <p className="text-muted-foreground">
                                        Teaching machines to understand human language through text analysis, 
                                        tokenization, and embeddings.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};