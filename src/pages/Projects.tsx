import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Learning From Errors | Brain and Cognitive Society IITK",
      description: "A Reinforcement Learning based agent that learns to play basic Atari Console games - Frozen Lake and Lunar Lander.",
      tags: ["Reinforcement Learning", "Python"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Recommendation Systems",
      description: "Implemented Recommendation system models using various techniques like Content-based Recommendation, Knowledge-based Recommendation, and Item-based Collaborative Filtering.",
      tags: ["Numpy", "Pandas", "Matplotlib", "KNN", "Regression Models"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Topic Modelling",
      description: "Visualized search frequencies of the browser history of the user.",
      tags: ["Seaborn", "Beautiful Soup", "NLTK"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Vicsek Model of Flocking",
      description: "Simulation of Flocking Behaviour in biological systems.",
      tags: ["SciPy", "Simulations"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that I have worked on during my journey at IIT Kanpur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-300 group">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary group-hover:text-primary-glow transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <Button variant="outline" className="gap-2">
            <Github className="w-4 h-4" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;