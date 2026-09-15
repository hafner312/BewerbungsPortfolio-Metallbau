import type { Skill } from '../types'

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'Angular', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },

  // Backend
  { name: 'C#', category: 'backend' },
  { name: '.NET / ASP.NET', category: 'backend' },
  { name: 'Blazor', category: 'backend' },
  { name: 'Java', category: 'backend' },
  { name: 'Android (Java)', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'SQL', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },

  // DevOps
  { name: 'Docker', category: 'devops' },
  { name: 'Kubernetes', category: 'devops' },
  { name: 'GitHub Actions', category: 'devops' },
  { name: 'CI/CD', category: 'devops' },
  { name: 'Microsoft Entra ID', category: 'devops' },
  { name: 'Azure', category: 'devops' },
  { name: 'Netzwerkgrundlagen', category: 'devops' },

  // Werkzeuge
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'GitLab', category: 'tools' },
  { name: 'Visual Studio', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Eclipse', category: 'tools' },
  { name: 'IntelliJ IDEA', category: 'tools' },
  { name: 'SSMS', category: 'tools' },
  { name: 'Insomnia', category: 'tools' },
  { name: 'Swagger', category: 'tools' },
]

export const categoryLabels: Record<Skill['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  devops: 'DevOps & Cloud',
  tools: 'Werkzeuge',
}
