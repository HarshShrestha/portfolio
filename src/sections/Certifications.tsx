import { profile } from '@/data/profile';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Stagger } from '@/components/motion/Stagger';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 lg:py-32 container mx-auto px-6">
      <SectionHeading number="04" title="Certifications" />

      <Reveal direction="up" className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Stagger>
            {profile.certifications.map((cert, idx) => (
              <Card key={idx} className="p-6 flex flex-col items-center text-center group hover:border-accent transition-colors">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-accent font-bold">📜</span>
                </div>
                <h3 className="text-foreground font-bold mb-1">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.issuer}</p>
              </Card>
            ))}
          </Stagger>
        </div>
      </Reveal>
    </section>
  );
};
