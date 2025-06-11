"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { projects } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Header } from '@/components/Header';
import { ProjectDetailModal } from "@/components/ProjectDetailModal"; 
import { ArrowRight } from "lucide-react";

// Define the Project type, mirroring the one in ProjectDetailModal
// In a real app, this would be in a shared types file
interface ProjectStage {
  stage: string;
  details: string[];
}
interface Project {
  title: string;
  objective: string;
  domain: string;
  client: string;
  startDate: string;
  endDate: string;
  history: ProjectStage[];
}

export default function Home() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-16">
      <Header />

      <ProjectDetailModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-16 w-full max-w-5xl"
      >
        <h2 className="text-3xl font-bold mb-8">Projets Réalisés</h2>
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-lg cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setSelectedProject(project)}
              layoutId={`card-container-${project.title}`}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.client} - {project.domain}</CardDescription>
                  <p className="text-sm text-muted-foreground pt-2 font-medium">{project.startDate} – {project.endDate}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{project.objective}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center text-primary font-semibold">
                    Voir les détails
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
