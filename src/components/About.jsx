import SectionShell from './SectionShell.jsx';

export default function About() {
  return (
    <SectionShell id="about" title="Philosophy">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <p className="text-xl md:text-2xl leading-relaxed mb-6 font-light">
            Frontend Engineer with nearly 3 years of experience building responsive,
            high-performance single-page applications (SPA) and reusable UI component
            libraries using Angular, TypeScript, React, HTML5, CSS Flexbox, and JavaScript.
          </p>
          <p className="text-lg opacity-60">
            Experienced in micro-frontend SPA architecture, adaptive design, accessibility (WCAG),
            and unit testing with Jasmine. Proficient in leveraging Gen AI and Agentic AI platforms
            for accelerated development, component scaffolding, and code optimization.
          </p>
        </div>
        <div className="md:col-span-5 bg-accent p-8 md:p-10 border border-border">
          <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-6">Capabilities</span>
          <ul className="flex flex-col gap-4">
            <li className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-bold text-lg uppercase tracking-tight">Micro-Frontends</span>
              <span className="text-[10px] opacity-40">01</span>
            </li>
            <li className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-bold text-lg uppercase tracking-tight">Accessibility (WCAG)</span>
              <span className="text-[10px] opacity-40">02</span>
            </li>
            <li className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-bold text-lg uppercase tracking-tight">Gen AI Integration</span>
              <span className="text-[10px] opacity-40">03</span>
            </li>
            <li className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-bold text-lg uppercase tracking-tight">Jasmine Unit Testing</span>
              <span className="text-[10px] opacity-40">04</span>
            </li>
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
