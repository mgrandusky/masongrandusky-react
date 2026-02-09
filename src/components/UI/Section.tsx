import type { SectionProps } from '../../types';

export default function Section({ id, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className="section-container">
        {children}
      </div>
    </section>
  );
}
