export interface Project {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  icon: string
  gradient: string
  highlight?: string
  /** Neutrale Kennzeichnung, z.B. 'Teamprojekt (Schule)' - ohne die Hervorhebung von highlight */
  label?: string
  /** Hinweis unter dem Live-Demo-Link, z.B. bei Gratis-Hosting mit Kaltstart-Verzoegerung */
  hostingNote?: string
  /** Dateiname des Vorschaubilds in public/projekte (ohne Pfad), z.B. 'bookbuddy.webp' */
  image?: string
  /** Alternativtext des Vorschaubilds fuer Screenreader */
  imageAlt?: string
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'devops' | 'tools'
}

export interface TimelineEntry {
  date: string
  title: string
  organization: string
  location: string
  description: string[]
  type: 'work' | 'education' | 'certification'
}

export interface ContactFormData {
  from_name: string
  from_email: string
  subject: string
  message: string
}
