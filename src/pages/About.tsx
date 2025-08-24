import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            About Me
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-primary">My Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a student at IIT Kanpur, working on my Master's Thesis in Mechanical Engineering with Prof. Siddhartha 
              Mukherjee. I'm a creative professional, with a love for creating meaningful experiences for my life 
              (and hopefully for others too). My journey began from a curiosity for all things mechanical and now 
              has blossomed into a crave for solutions and creativeness.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not working, you can find me playing Valorant, completing the New York Times puzzles, 
              listening to some excellent music, or working on personal projects that challenge me.
            </p>
          </Card>

          <Card className="p-8 bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Skills & Expertise</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Languages</h3>
                <p className="text-sm text-muted-foreground">Programming - C, C++, LATEX, R, Python, SQL</p>
                <p className="text-sm text-muted-foreground">IRL - Hindi, English, Gujarati</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Cloud Development</h3>
                <p className="text-sm text-muted-foreground">Azure Components - VMs, VNet, Storages</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Machine and Deep Learning</h3>
                <p className="text-sm text-muted-foreground">NumPy, Pandas, Matplotlib, Sci-Kit Learn, Tensorflow, PyTorch, 
                NLTK</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Other Libraries and Softwares</h3>
                <p className="text-sm text-muted-foreground">Asana, Canva, AutoCAD, Fusion360, Inventor, 
                Selenium, Hashlib, Beautiful Soup</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Soft Skills</h3>
                <p className="text-sm text-muted-foreground">Problem Solving, Team Collaboration, Project Management</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mt-8 p-8 bg-card-gradient shadow-soft">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Interests and Hobbies</h2>
          <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            I'm a consistent Competitive E-sports player, and owe a large part of my
            patience, persistence and critical thinking skills to it.
          </p>
          <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            I also like to watch Anime and read Mangas, and they have opened up a very new world of fiction, storytelling
            and art to me, things that I already enjoyed beforehand. My favorite characters are Ichigo (from Bleach)
            and Gintoki (from Gintama), characters that have taught me a lot about responsibility and friendships.
          </p>
          <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            Further, I like listening to music, with Arctic Monkeys and Le Sserafim being my top bands and
            Ado and Adele being my top singers currently.
            I also draw, a big part of why I joined Prof. Mukherjee in his research.
          </p>
        </Card>
      </div>
    </Layout>
  );
};

export default About;