import ProjectCard from '../components/ProjectCard';

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-bold mb-4">Software Development Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard 
            username="DanisAlfonso" 
            repository="gym_tracker" 
            description="A comprehensive gym tracking app to monitor workouts, progress, and more." 
          />
          <ProjectCard 
            username="DanisAlfonso" 
            repository="NeoNotes" 
            description="A modern flashcard and note-taking application with rich text editing and organization features." 
          />
        </div>
      </section>
    </div>
  );
}

