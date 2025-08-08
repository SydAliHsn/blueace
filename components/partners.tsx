import { Card, CardContent } from './ui/card';
import Image from 'next/image';

const partners = [
  {
    img: '/images/nibaf.jpeg',
    title: 'NIBAF',
    description: 'National Institute of Banking & Finance',
  },
  {
    img: '/images/hashoo.png',
    title: 'Hashoo Hunar',
    description: 'Skills Development Partner',
  },
  {
    img: '/images/nutech.png',
    title: 'NUTECH University',
    description: 'Academic Excellence Partner',
  },
  {
    img: '/images/pathways.png',
    title: 'TechCorp Solutions',
    description: 'Technology Innovation Partner',
  },
  {
    img: '/images/pathways.png',
    title: 'Global Dynamics',
    description: 'International Training Partner',
  },
];

export default function Partners() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
      <div className="container mx-auto relative z-10">
        <div className="text-center space-y-6 mb-8 sm:mb-16">
          <h2 className="text-4xl font-bold px-4 sm:text-5xl">
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Trusted by the Best
            </span>
          </h2>
        </div>

        {/* Auto-scrolling horizontal */}
        <div className="flex flex-row relative group [--gap:2rem] [gap:var(--gap)] [--duration:28s] overflow-hidden hide-scrollbar cursor-pointer">
          <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee group-hover:animation-paused pt-1">
            {partners.map(el => (
              <PartnerCard
                img={el.img}
                key={el.title}
                title={el.title}
                description={el.description}
              />
            ))}
          </div>
          <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee group-hover:animation-paused pt-1">
            {partners.map(el => (
              <PartnerCard
                img={el.img}
                key={el.title}
                title={el.title}
                description={el.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const PartnerCard = ({ img, title, description }: { img: string; title: string; description: string }) => {
  return (
    <Card className="bg-slate-900/50 backdrop-blur-xl border-slate-700 hover:border-slate-500 transition-all duration-300 text-center w-68 sm:!w-80 snap-center flex-shrink-0">
      <CardContent className="p-2 sm:p-6">
        <Image
          width={64}
          height={64}
          src={img}
          alt={title}
          className="mx-auto mb-4 w-20 h-20 rounded-xl"
        />

        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </CardContent>
    </Card>
  );
};
