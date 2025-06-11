"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Define types for our project data structure
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

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null

  return (
    <Dialog open={!!project} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription>
            {project.client} - {project.domain}
          </DialogDescription>
          <p className="text-sm text-muted-foreground pt-1 font-medium">{project.startDate} – {project.endDate}</p>
        </DialogHeader>
        <div className="py-4">
          <p className="mb-6">{project.objective}</p>
          <h4 className="font-semibold mb-4 text-lg">Phases du projet :</h4>
          <Accordion type="single" collapsible className="w-full">
            {project.history.map((stage: ProjectStage, index: number) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{stage.stage}</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {stage.details.map((detail: string, i: number) => (
                      <li key={i} className="text-muted-foreground">{detail}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </DialogContent>
    </Dialog>
  )
} 