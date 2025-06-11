import { Mail, Phone, Linkedin, Home } from 'lucide-react';
import { AwsBadge } from './AwsBadge';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="w-full max-w-5xl">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-extrabold">Jérôme LAVAL</h1>
          <h2 className="text-2xl font-semibold text-primary mt-2">
            AWS Certified Data Scientist and Machine Learning Engineer
          </h2>
          <AwsBadge />
        </div>
        <div className="mt-6 md:mt-0 flex flex-col items-center md:items-end space-y-2 text-sm">
          <ThemeToggle />
          <a href="https://www.linkedin.com/in/jerome-a82853162/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors pt-4">
            <Linkedin size={16} />
            <span>in/jerome-a82853162</span>
          </a>
          <a href="mailto:jerome@surpriz.io" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={16} />
            <span>jerome@surpriz.io</span>
          </a>
          <a href="tel:+33777957723" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={16} />
            <span>+33 (0)7 77 95 77 23</span>
          </a>
           <div className="flex items-center gap-2">
            <Home size={16} />
            <span>Lyon – Grenoble – Marseille (France)</span>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center md:text-left max-w-3xl">
        <p className="text-muted-foreground">
          Spécialisé en MLOps avec une expertise approfondie en Data Engineering. Maîtrise complète de la chaîne de valeur data, du développement à l'industrialisation de solutions d'intelligence artificielle à grande échelle. Expert en technologies cloud (AWS, GCP, Azure), frameworks ML/DL (TensorFlow, PyTorch) et pratiques MLOps modernes.
        </p>
      </div>
    </header>
  );
} 