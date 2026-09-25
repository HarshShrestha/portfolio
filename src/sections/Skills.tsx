import { skills } from '@/data/profile';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import { Marquee } from '@/components/motion/Marquee';
import { Stagger } from '@/components/motion/Stagger';

export const Skills = () => {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24 lg:py-32 container mx-auto px-6">
      <SectionHeading id="skills-heading" number="03" title="Technical Skills" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Stagger>
          {skills.map((category) => (
            <Card key={category.category} className="p-6 flex flex-col h-full">
              <h3 className="text-lg font-bold text-foreground mb-4">{category.category}</h3>

              <div className="flex flex-wrap gap-2 mt-auto">
                {category.items.map((skill) => (
                  <Tag key={skill} variant="accent">
                    {skill}
                  </Tag>
                ))}
              </div>
            </Card>
          ))}
        </Stagger>
      </div>

      <div className="mt-20 space-y-8">
        <Reveal direction="up">
          <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20 overflow-hidden">
            <Marquee speed={40}>
              {skills.flatMap(cat => cat.items).map((skill, idx) => (
                <span key={idx} className="mx-4 text-xl font-bold text-accent/60 uppercase tracking-widest">
                  {skill}
                </span>
              ))}
            </Marquee>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
