interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent'
}

// Neutraler Teal-Ton für Technologien ohne feste Markenfarbe
const neutral = { bg: '#d5efeb', text: '#0f766e' }

// Gleiche Technologie → immer gleiche (offizielle) Markenfarbe
const techColors: Record<string, { bg: string; text: string }> = {
  // Frontend
  JavaScript: { bg: '#fdf6d8', text: '#8a7400' },
  TypeScript: { bg: '#e1edf9', text: '#3178c6' },
  React: { bg: '#e0f7fd', text: '#0a7ea4' },
  HTML5: { bg: '#fce5dd', text: '#e34f26' },
  HTML: { bg: '#fce5dd', text: '#e34f26' },
  CSS3: { bg: '#e0eef8', text: '#1572b6' },
  CSS: { bg: '#e0eef8', text: '#1572b6' },
  'Vue.js': { bg: '#e2f5ec', text: '#2e8b63' },
  Angular: { bg: '#fbdfe4', text: '#dd0031' },
  'Tailwind CSS': { bg: '#def7fb', text: '#0891b2' },
  Bootstrap: { bg: '#ebe4f5', text: '#7952b3' },
  // Backend
  'C#': { bg: '#efe2f5', text: '#68217a' },
  '.NET': { bg: '#e7e1fb', text: '#512bd4' },
  '.NET / ASP.NET': { bg: '#e7e1fb', text: '#512bd4' },
  Blazor: { bg: '#e7e1fb', text: '#512bd4' },
  Java: { bg: '#dceef3', text: '#007396' },
  'Spring Boot': { bg: '#e9f5dd', text: '#4f8a25' },
  Python: { bg: '#e1ebf4', text: '#3776ab' },
  SQL: { bg: '#f8dedd', text: '#cc2927' },
  MongoDB: { bg: '#e2f3e3', text: '#3d8b40' },
  'REST API': neutral,
  'REST APIs': neutral,
  // DevOps & Cloud
  Docker: { bg: '#def0fc', text: '#1d7fd4' },
  Kubernetes: { bg: '#e0e9fb', text: '#326ce5' },
  'GitHub Actions': { bg: '#def0fc', text: '#1f6feb' },
  'CI/CD': neutral,
  'Microsoft Entra ID': { bg: '#def0fc', text: '#0078d4' },
  Azure: { bg: '#def0fc', text: '#0078d4' },
  Vite: { bg: '#e8e8ff', text: '#574fd6' },
  // Tools
  Git: { bg: '#fde3da', text: '#d9442a' },
  GitHub: { bg: '#eaecef', text: '#24292f' },
  GitLab: { bg: '#ffe7d7', text: '#e2562a' },
  'Visual Studio': { bg: '#ebe2f5', text: '#5c2d91' },
  'VS Code': { bg: '#def0fc', text: '#007acc' },
  Eclipse: { bg: '#e5e1ef', text: '#2c2255' },
  'IntelliJ IDEA': { bg: '#e1ebff', text: '#0d63d6' },
  SSMS: { bg: '#f8dedd', text: '#cc2927' },
  Insomnia: { bg: '#e7e1fb', text: '#4000bf' },
  Swagger: { bg: '#effad9', text: '#5a9e00' },
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const base =
    'inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-colors'

  if (variant === 'default' && typeof children === 'string' && techColors[children]) {
    const c = techColors[children]
    return (
      <span className={base} style={{ background: c.bg, color: 'var(--color-text-primary)' }}>
        {children}
      </span>
    )
  }

  const variants = {
    default:
      'text-[var(--color-text-secondary)] bg-[var(--color-bg-elevated)] hover:text-[var(--color-text-primary)]',
    accent: 'text-white bg-[var(--color-accent)]',
  }
  return <span className={`${base} ${variants[variant]}`}>{children}</span>
}
