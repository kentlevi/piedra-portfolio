import SectionShell from './SectionShell.jsx';

const groups = [
  {
    title: 'Frontend & SPA',
    items: ['Angular (TS)', 'React.js', 'JavaScript', 'HTML5', 'CSS Flexbox', 'SASS / Bootstrap', 'Reusable UI Components']
  },
  {
    title: 'State & Architecture',
    items: ['NgRx Framework', 'Micro-Frontend SPA', 'Component-Based Architecture', 'Code Integration']
  },
  {
    title: 'AI & Automation',
    items: ['Gen AI (Gemini, ChatGPT)', 'Agentic AI (Antigravity, Codex)', 'Google AI Studio', 'Scaffolding & Optimization']
  },
  {
    title: 'QA & Workflows',
    items: ['Jasmine Unit Testing', 'Git Version Control', 'Azure DevOps', 'Agile Scrum', 'WCAG Accessibility']
  }
];

export default function Skills() {
  return (
    <SectionShell id="skills" title="Expertise" muted>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
        {groups.map((group) => (
          <article className="bg-bg p-8 flex flex-col group hover:bg-text hover:text-bg transition-colors duration-500" key={group.title}>
            <span className="text-[10px] uppercase tracking-widest opacity-40 mb-4 block group-hover:text-bg">Capability</span>
            <h3 className="mb-6 font-bold uppercase transition-all">{group.title}</h3>
            <div className="flex flex-wrap gap-2 mt-auto">
               {group.items.map(item => (
                 <span key={item} className="text-[11px] font-bold uppercase tracking-tight py-1 px-2 border border-border group-hover:border-bg/40">
                   {item}
                 </span>
               ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
