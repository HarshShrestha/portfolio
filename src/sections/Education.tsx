import { profile } from '@/data/profile';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tag } from '@/components/ui/Tag';
import { Timeline, TimelineItem } from '@/components/motion/Timeline';
import { Stagger } from '@/components/motion/Stagger';

export const Education = () => {
  const { school, degree, grade, period, coursework } = profile.education;

  return (
    <section id="education" aria-labelledby="education-heading" className="py-24 lg:py-32 container mx-auto px-6">
      <SectionHeading id="education-heading" number="02" title="Education" />

      <Reveal direction="up" className="mt-12 max-w-3xl">
        <Timeline>
          <TimelineItem
            date={period}
            title={degree}
            subtitle={school}
          >
            <div className="space-y-4">
              <p className="text-muted-foreground italic">{grade}</p>
              <div className="flex flex-wrap gap-2">
                <Stagger>
                  {coursework.map((course) => (
                    <Tag key={course} variant="muted">
                      {course}
                    </Tag>
                  ))}
                </Stagger>
              </div>
            </div>
          </TimelineItem>
        </Timeline>
      </Reveal>
    </section>
  );
};
