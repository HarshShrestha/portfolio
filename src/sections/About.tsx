import { profile } from '@/data/profile';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Mail, MapPin, Phone } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 lg:py-32 container mx-auto px-6">
      <SectionHeading id="about-heading" number="01" title="About Me" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mt-12">
        <Reveal direction="up" className="lg:col-span-2">
          <p className="text-xl text-muted-foreground leading-relaxed">
            {profile.summary}
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <Card className="p-6 space-y-6">
            <h3 className="text-lg font-bold text-foreground mb-4">Quick Facts</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-muted-foreground">
                <MapPin size={20} className="text-accent" />
                <span>{profile.location}</span>
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail size={20} className="text-accent" />
                <span>{profile.email}</span>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone size={20} className="text-accent" />
                <span>{profile.phone}</span>
              </a>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
};
