import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Hotel,
  ShieldCheck,
  Compass,
  Headphones,
  Trophy,
  Users,
  TrendingUp,
  Map,
  ArrowUpRight,
  Plane,
  CheckCircle,
} from 'lucide-react';

/**
 * SCI Presentation App - Optimized Executive Briefing
 */

// --- TypeScript Interfaces to resolve Build Errors ---
interface Stat {
  label?: string;
  value?: string;
  kpi?: string;
  start?: string;
  current?: string;
  unit?: string;
  trend?: string;
  icon?: React.ReactNode;
}

interface Milestone {
  year: string;
  label: string;
  detail: string;
  location: string;
  logo?: string;
}

interface Hub {
  name: string;
  tag: string;
  logo: string;
  img: string;
  desc: string;
}

interface Feature {
  icon: React.ReactElement;
  title: string;
  desc: string;
}

interface Panel {
  img: string;
  size: string;
}

interface ImpactPoint {
  icon: React.ReactNode;
  label: string;
  detail: string;
}

interface Slide {
  type: string;
  isDark: boolean;
  title: string;
  subtitle: string;
  bgImage?: string;
  image?: string;
  tag?: string;
  content?: string;
  stats?: Stat[];
  maps?: string[];
  impactPoints?: ImpactPoint[];
  hubs?: Hub[];
  milestones?: Milestone[];
  features?: Feature[];
  panels?: Panel[];
  testimonialImages?: string[];
}

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      type: 'hero',
      isDark: true,
      title: 'Where Competition Meets Culture',
      subtitle: 'Bringing the Best of The Best Together on the World Stage',
      bgImage:
        'https://d2cankni8sodj9.cloudfront.net/JeKKe1GblGU88B0h2Emq4RcGMGC4z7Gyll3Tjg.jpeg',
    },
    {
      type: 'cinematic',
      isDark: true,
      tag: 'The International Standard',
      title: 'A New Era of Elite Global Competition',
      content:
        "Surf Cup International has redefined the global youth landscape, establishing a premier circuit that spans the most iconic footballing cultures. We provide the ultimate proving ground for the world's best academies.",
      stats: [
        { label: 'International Hubs', value: '3+' },
        { label: 'Nations Represented', value: '31+' },
        { label: 'Annual Teams', value: '280+' },
      ],
      image:
        'https://d2cankni8sodj9.cloudfront.net/sJ2ico9HoLvZyURlW2texiKSsRYG4ubBSthiVA.png',
    },
    {
      type: 'global-maps',
      isDark: true,
      title: 'Global Participant Footprint',
      subtitle: 'Representing Elite Talent from 31 Nations and 7 Continents',
      maps: [
        'https://d2cankni8sodj9.cloudfront.net/vNycsKBYGcB4slgo5Qp-ORqyZ-SlJYUKgTB_Jg.png',
        'https://d2cankni8sodj9.cloudfront.net/iM-qBUCy-JuoHGx6kouqLeXvJdw0OpGPBI-PJA.png',
        'https://d2cankni8sodj9.cloudfront.net/nrw3sYZtr2Xypv4VpPaHOFuUwr9VWSyJiTWptA.png',
        'https://d2cankni8sodj9.cloudfront.net/WiWKCXUm_M2p7bq2NYNmmzwRg9Bkgo4IyTHUdw.png',
        'https://d2cankni8sodj9.cloudfront.net/5zP8vG9iliwNIB4M286S4JahiBJY5BBJS7J90w.png',
      ],
    },
    {
      type: 'data-performance',
      isDark: true,
      title: 'Market Performance Matrix',
      subtitle: 'Quantifying Global Expansion Impact',
      bgImage:
        'https://d2cankni8sodj9.cloudfront.net/ifIVta4dR-Kn0aU2ShlMkUan25xHPTOMbNyXcg.jpeg',
      stats: [
        {
          kpi: 'Global Team Volume',
          start: '48 Teams',
          current: '280+',
          unit: 'Teams',
          trend: '+483%',
          icon: <Trophy className="w-6 h-6" />,
        },
        {
          kpi: 'International Players',
          start: '1,500',
          current: '4,200+',
          unit: 'Athletes',
          trend: '+180%',
          icon: <Users className="w-6 h-6" />,
        },
        {
          kpi: 'Annual Travelers',
          start: '2,000+',
          current: '6,900+',
          unit: 'Visitors',
          trend: '+245%',
          icon: <Plane className="w-6 h-6" />,
        },
        {
          kpi: 'Global Market Reach',
          start: '12 Nations',
          current: '31+',
          unit: 'Nations',
          trend: '+158%',
          icon: <Globe className="w-6 h-6" />,
        },
      ],
    },
    {
      type: 'economic',
      isDark: true,
      title: 'Real Economic Impact',
      subtitle: 'Driving Local Prosperity Through Curated Experiences',
      bgImage:
        'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=2000',
      content:
        'SCI tournaments serve as powerful economic engines for our host cities. Our concierge model actively propels every family member into the local community, ensuring sports tourism revenue translates into immediate, tangible growth.',
      impactPoints: [
        {
          icon: <TrendingUp className="w-8 h-8" />,
          label: 'Direct Local Spend',
          detail:
            'High-yield parent groups driving revenue to local gastronomy and retail.',
        },
        {
          icon: <Users className="w-8 h-8" />,
          label: 'Community Integration',
          detail:
            '100% of tourism activities utilize regional guides and local logistics partners.',
        },
        {
          icon: <Map className="w-8 h-8" />,
          label: 'Infrastructure Legacy',
          detail:
            'Activation of municipal sports complexes and historic city centers.',
        },
      ],
    },
    {
      type: 'hubs-badges',
      isDark: true,
      title: 'International Event Circuit',
      subtitle: 'Proven Success Across Iconic Global Locations',
      hubs: [
        {
          name: 'Salou, Spain',
          tag: 'Flagship Edition',
          logo: 'https://d2cankni8sodj9.cloudfront.net/l16vvxxC6h35XXRyk5e8FmdFFqyEn9GsBRclEA.png',
          img: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?auto=format&fit=crop&q=80&w=1200',
          desc: 'The gold standard. 3,500+ players representing 31 nations in a world-class resort setting.',
        },
        {
          name: 'Rome, Italy',
          tag: 'Prestige Edition',
          logo: 'https://d2cankni8sodj9.cloudfront.net/X6V4FXl0lGeALx0741FWyotsGvv1HFrErQG19w.png',
          img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1200',
          desc: 'Elite heritage. High-tier matchups in the historic capital featuring partners like SS Lazio.',
        },
        {
          name: 'Tangier, Morocco',
          tag: 'African Gateway',
          logo: 'https://d2cankni8sodj9.cloudfront.net/kob7FjatUk5Fy9D8XwIcz9Tdo2fnDuiTkJlhJw.png',
          img: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=1200',
          desc: 'Strategic growth. Mediterranean coastal venues supported by the Olympic Committee.',
        },
      ],
    },
    {
      type: 'timeline-visual',
      isDark: true,
      title: 'The Growth Trajectory',
      subtitle: 'Exponential Expansion (2021–2025)',
      bgImage:
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000',
      milestones: [
        {
          year: '2021',
          label: 'Salou Inaugural',
          detail: '48 Teams',
          location: 'Spain',
          logo: 'https://d2cankni8sodj9.cloudfront.net/l16vvxxC6h35XXRyk5e8FmdFFqyEn9GsBRclEA.png',
        },
        {
          year: '2022',
          label: 'Flagship Growth',
          detail: '96 Teams',
          location: 'Spain',
        },
        {
          year: '2023',
          label: 'Rome Prestige',
          detail: '150 Teams',
          location: 'Italy',
          logo: 'https://d2cankni8sodj9.cloudfront.net/X6V4FXl0lGeALx0741FWyotsGvv1HFrErQG19w.png',
        },
        {
          year: '2024',
          label: 'Tangier Milestone',
          detail: '210 Teams',
          location: 'Morocco',
          logo: 'https://d2cankni8sodj9.cloudfront.net/kob7FjatUk5Fy9D8XwIcz9Tdo2fnDuiTkJlhJw.png',
        },
        {
          year: '2025',
          label: 'Global Ecosystem',
          detail: '280+ Teams / 31 Nations',
          location: 'Global',
        },
      ],
    },
    {
      type: 'model-blueprint',
      isDark: true,
      title: 'The Turn-Key Blueprint',
      subtitle: 'Our Proven Operational Excellence',
      bgImage:
        'https://d2cankni8sodj9.cloudfront.net/GByWF504a9T52ZY_ahLhAdaVFWZjbSjL38gW7Q.png',
      content:
        'SCI manages the complexity of international sports travel. We transform a tournament into a curated, 5-star family experience where every detail is managed with professional precision.',
      features: [
        {
          icon: <Headphones className="w-10 h-10" />,
          title: 'Dedicated Liaisons',
          desc: 'Full-time, multilingual staff assigned to every club for end-to-end management.',
        },
        {
          icon: <Hotel className="w-10 h-10" />,
          title: 'Elite Hospitality',
          desc: 'Hand-picked boutique 4 & 5-star accommodations centrally located in host cities.',
        },
        {
          icon: <Compass className="w-10 h-10" />,
          title: 'Local Immersion',
          desc: 'Curated historical tours, local gastronomy, and bespoke parent networking activities.',
        },
        {
          icon: <ShieldCheck className="w-10 h-10" />,
          title: '24/7 Logistics',
          desc: 'Zero-friction transit, private luxury coaching, and comprehensive support.',
        },
      ],
    },
    {
      type: 'moments-mosaic',
      isDark: true,
      title: 'Unforgettable Moments',
      subtitle: 'Capturing the Spirit of Competition and Connection',
      panels: [
        {
          img: 'https://d2cankni8sodj9.cloudfront.net/BUF7cUGMD78ttEZqJvRYm9kfb2wJxqiyXp5Bug.png',
          size: 'large',
        },
        {
          img: 'https://d2cankni8sodj9.cloudfront.net/RXVdDOaRPaVxWl2PNYDdEjwT7qGbZkOr8DYmOg.png',
          size: 'large',
        },
        {
          img: 'https://d2cankni8sodj9.cloudfront.net/sSnynGsNjCpptXqrzL9LuSXfpZf-ennIXnnrdw.png',
          size: 'small',
        },
        {
          img: 'https://d2cankni8sodj9.cloudfront.net/cvgdkYpesaLnO7sda390Nfzheb6A2VdUrHKJ1A.png',
          size: 'small',
        },
        {
          img: 'https://d2cankni8sodj9.cloudfront.net/7zIg7thHQDQ2s6r1sS8hcpO5tUo4KTYD3j3cZA.png',
          size: 'small',
        },
        {
          img: 'https://d2cankni8sodj9.cloudfront.net/cAf2iv2yWwNcaqMeeAz30IMZ7ns3oAfVrDHYRw.png',
          size: 'small',
        },
      ],
    },
    {
      type: 'testimonials-spiced',
      isDark: true,
      title: 'Voices of Global Trust',
      subtitle: 'What our Club and Academy Participants Are Saying',
      bgImage:
        'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=2000',
      testimonialImages: [
        'https://d2cankni8sodj9.cloudfront.net/cFAawfByIpz4owNMEqGDOFKURSxnsYRACB6c3w.png',
        'https://d2cankni8sodj9.cloudfront.net/295qybtmdVG-ymtVAOTfb6Rf79a0eAstF0DUwA.png',
        'https://d2cankni8sodj9.cloudfront.net/sr83ZOTacJqcRC7mc_8m2VxjCDrVx3SiL1whyQ.png',
        'https://d2cankni8sodj9.cloudfront.net/J0azBnQG6wxsufuJc5GR5Dlr6DKhLWt9QbBKlQ.png',
      ],
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderSlide = (slide: Slide) => {
    switch (slide.type) {
      case 'hero':
        return (
          <div className="relative h-full flex items-center justify-center overflow-hidden bg-[#001A2D]">
            <img
              src={slide.bgImage}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              alt="hero-bg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#001A2D]/40 to-[#001A2D]/90" />
            <div className="relative z-10 text-center max-w-6xl px-12">
              <span className="text-[#11CAA0] font-black text-lg uppercase tracking-[0.5em] mb-10 block">
                {slide.subtitle}
              </span>
              <h1 className="text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-12 italic">
                {slide.title.includes('Meets') ? (
                  <>
                    {slide.title.split('Meets')[0]}
                    <span className="block text-[#11CAA0]">
                      Meets {slide.title.split('Meets')[1]}
                    </span>
                  </>
                ) : (
                  slide.title
                )}
              </h1>
              <div className="h-1.5 w-40 bg-[#11CAA0] mx-auto rounded-full" />
            </div>
          </div>
        );

      case 'testimonials-spiced':
        return (
          <div className="relative h-full flex flex-col justify-center overflow-hidden bg-[#001A2D]">
            <img
              src={slide.bgImage}
              className="absolute inset-0 w-full h-full object-cover opacity-10"
              alt="testimonial-bg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#001A2D] via-transparent to-[#001A2D]" />
            <div className="relative z-10 px-24 w-full max-w-[110rem] mx-auto pt-12">
              <div className="mb-20 text-center">
                <h2 className="text-7xl font-black text-white uppercase tracking-tighter mb-4 italic">
                  {slide.title}
                </h2>
                <p className="text-[#11CAA0] font-black uppercase text-base tracking-[0.4em] opacity-90">
                  {slide.subtitle}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {slide.testimonialImages?.map((img: string, i: number) => (
                  <div key={i} className="group relative z-10 hover:z-50">
                    <div className="absolute -inset-4 bg-gradient-to-b from-[#11CAA0] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-[2.5rem] blur-2xl" />
                    <div className="relative bg-white/5 border border-white/20 backdrop-blur-3xl rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:bg-white/20 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                      <img
                        src={img}
                        className="w-full h-auto object-contain transition-transform duration-500 p-2"
                        alt={`Academy Feedback ${i + 1}`}
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#11CAA0] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-[0_0_30px_#11CAA0]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'global-maps':
        return (
          <div className="relative h-full flex flex-col justify-center overflow-hidden bg-[#001A2D] pt-12 pb-16">
            <div className="absolute inset-0 bg-gradient-to-b from-[#001A2D] via-transparent to-[#001A2D]" />
            <div className="relative z-10 px-12 w-full max-w-[110rem] mx-auto">
              <div className="mb-8 text-center max-w-5xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-2 italic">
                  {slide.title}
                </h2>
                <p className="text-[#11CAA0] font-black uppercase text-xs lg:text-sm tracking-[0.4em] opacity-90">
                  {slide.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-3 gap-6">
                  {slide.maps?.slice(0, 3).map((map: string, i: number) => (
                    <div
                      key={i}
                      className="group relative bg-white/5 border border-white/20 backdrop-blur-xl rounded-[1.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#11CAA0]/50 hover:bg-white/10"
                    >
                      <img
                        src={map}
                        className="w-full h-auto max-h-[32vh] object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                        alt={`Map ${i + 1}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-6 max-w-[66%] mx-auto w-full">
                  {slide.maps?.slice(3, 5).map((map: string, i: number) => (
                    <div
                      key={i}
                      className="group relative bg-white/5 border border-white/20 backdrop-blur-xl rounded-[1.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#11CAA0]/50 hover:bg-white/10"
                    >
                      <img
                        src={map}
                        className="w-full h-auto max-h-[32vh] object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                        alt={`Map ${i + 4}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'cinematic':
        return (
          <div className="relative h-full items-center justify-start overflow-hidden bg-[#001A2D] hidden lg:flex">
            <img
              src={slide.image}
              className="absolute inset-0 w-full h-full object-cover opacity-70"
              alt="narrative"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001A2D] via-[#001A2D]/60 to-transparent" />
            <div className="relative z-10 px-24 max-w-4xl">
              <span className="text-[#11CAA0] font-bold text-sm uppercase tracking-[0.4em] mb-8 block">
                {slide.tag}
              </span>
              <h2 className="text-7xl font-black text-white uppercase leading-[0.9] mb-10 tracking-tighter italic">
                {slide.title}
              </h2>
              <p className="text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl">
                {slide.content}
              </p>
              <div className="flex gap-16">
                {slide.stats?.map((s: Stat, i: number) => (
                  <div key={i} className="group">
                    <div className="text-5xl font-black text-[#11CAA0] group-hover:scale-110 transition-transform cursor-default">
                      {s.value}
                    </div>
                    <div className="text-xs font-bold uppercase text-white/60 tracking-widest mt-3">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'timeline-visual':
        return (
          <div className="relative h-full flex flex-col justify-center overflow-hidden bg-[#001A2D]">
            <img
              src={slide.bgImage}
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              alt="expansion-bg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001A2D] via-transparent to-[#001A2D]/80" />
            <div className="relative z-10 px-24 w-full max-w-7xl mx-auto pt-24">
              <div className="mb-24 text-center">
                <h2 className="text-8xl font-black text-white uppercase tracking-tighter mb-6 italic">
                  {slide.title}
                </h2>
                <p className="text-[#11CAA0] font-black uppercase text-3xl tracking-[0.5em] opacity-100">
                  {slide.subtitle}
                </p>
              </div>
              <div className="relative flex items-center justify-between px-12 mt-12 gap-12">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 z-0" />
                {slide.milestones?.map((m: Milestone, i: number) => (
                  <div
                    key={i}
                    className="relative z-10 flex flex-col items-center group flex-1"
                  >
                    <div className="absolute -top-24 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-110">
                      {m.logo && (
                        <img
                          src={m.logo}
                          className="h-16 w-auto brightness-0 invert opacity-60"
                          alt="logo"
                        />
                      )}
                    </div>
                    <div
                      className={`text-5xl font-black mb-6 transition-all duration-300 group-hover:scale-110 ${
                        i === (slide.milestones?.length ?? 0) - 1
                          ? 'text-[#11CAA0]'
                          : 'text-white'
                      }`}
                    >
                      {m.year}
                    </div>
                    <div className="w-14 h-14 rounded-full bg-[#001A2D] border-4 border-white/40 group-hover:border-[#11CAA0] group-hover:bg-[#11CAA0] transition-all relative z-20 shadow-[0_0_30px_rgba(17,202,160,0.4)] group-hover:scale-125" />
                    <div className="mt-14 text-center">
                      <div className="font-black text-white uppercase text-lg tracking-widest mb-3">
                        {m.label}
                      </div>
                      <div className="text-sm text-white/60 font-bold uppercase tracking-widest mb-3">
                        {m.location}
                      </div>
                      <div className="text-base text-[#11CAA0] font-black uppercase tracking-tighter bg-[#11CAA0]/10 px-6 py-2 rounded-full inline-block">
                        {m.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'data-performance':
        return (
          <div className="relative h-full flex flex-col justify-center overflow-hidden bg-[#001A2D]">
            <img
              src={slide.bgImage}
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              alt="performance-bg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#001A2D] via-transparent to-[#001A2D]" />
            <div className="relative z-10 px-24 w-full max-w-[105rem] mx-auto pt-24">
              <div className="mb-20 text-center">
                <h2 className="text-6xl font-black text-white uppercase tracking-tighter mb-4 italic">
                  {slide.title}
                </h2>
                <p className="text-[#11CAA0] font-black uppercase text-base tracking-[0.4em] opacity-90">
                  {slide.subtitle}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {slide.stats?.map((s: Stat, i: number) => (
                  <div key={i} className="group relative">
                    <div className="relative px-10 py-12 bg-white/5 border border-white/20 backdrop-blur-xl rounded-[2.5rem] flex flex-col items-center text-center hover:-translate-y-4 transition-all duration-500 shadow-2xl">
                      <div className="mb-8 p-5 bg-[#11CAA0]/10 rounded-2xl text-[#11CAA0]">
                        {s.icon}
                      </div>
                      <h4 className="text-white/60 font-black uppercase text-xs tracking-widest mb-6">
                        {s.kpi}
                      </h4>
                      <div className="flex flex-col mb-10">
                        <div className="text-6xl font-black text-white tracking-tighter leading-none">
                          {s.current}
                        </div>
                        <div className="text-[#11CAA0] font-black uppercase text-xs tracking-widest mt-4">
                          {s.unit}
                        </div>
                      </div>
                      <div className="w-full flex items-center justify-between gap-6 mt-auto pt-10 border-t border-white/10">
                        <div className="flex flex-col items-start text-left">
                          <span className="text-xs text-white/40 uppercase font-bold tracking-tighter mb-1">
                            Inaugural
                          </span>
                          <span className="text-sm text-white/80 font-black">
                            {s.start}
                          </span>
                        </div>
                        <div className="bg-[#11CAA0] px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_0_20px_rgba(17,202,160,0.3)] group-hover:scale-110 transition-transform">
                          <ArrowUpRight className="w-4 h-4 text-black" />
                          <span className="text-xs font-black text-black">
                            {s.trend}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'economic':
        return (
          <div className="relative h-full flex items-center justify-end overflow-hidden bg-[#001A2D]">
            <img
              src={slide.bgImage}
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              alt="economic-bg"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#001A2D] via-[#001A2D]/60 to-transparent" />
            <div className="relative z-10 px-24 max-w-5xl text-right">
              <span className="text-[#11CAA0] font-bold text-sm uppercase tracking-[0.4em] mb-8 block">
                {slide.title}
              </span>
              <h2 className="text-7xl font-black text-white uppercase leading-[0.9] mb-10 tracking-tighter italic">
                {slide.subtitle}
              </h2>
              <p className="text-2xl text-white/90 mb-14 leading-relaxed max-w-3xl ml-auto">
                {slide.content}
              </p>
              <div className="grid grid-cols-3 gap-10">
                {slide.impactPoints?.map((p: ImpactPoint, i: number) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/20 p-10 rounded-[2rem] backdrop-blur-xl group hover:bg-white/10 transition-all text-center"
                  >
                    <div className="text-[#11CAA0] mb-6 flex justify-center group-hover:scale-110 transition-transform">
                      {p.icon}
                    </div>
                    <h4 className="text-white font-black uppercase text-sm tracking-widest mb-3">
                      {p.label}
                    </h4>
                    <p className="text-white/60 text-xs uppercase leading-tight font-bold tracking-tighter">
                      {p.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'hubs-badges':
        return (
          <div className="h-full bg-[#001A2D] flex relative overflow-hidden pt-40">
            {slide.hubs?.map((hub: Hub, i: number) => (
              <div
                key={i}
                className="relative flex-1 group overflow-hidden border-r border-white/10 last:border-r-0"
              >
                <img
                  src={hub.img}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-60"
                  alt={hub.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001A2D] via-[#001A2D]/20 to-transparent opacity-90" />
                <div className="absolute inset-0 p-16 flex flex-col justify-end z-10">
                  <div className="mb-10 transform group-hover:-translate-y-4 transition-transform duration-500">
                    <div className="h-32 w-auto mb-10 flex items-center">
                      <img
                        src={hub.logo}
                        alt={`${hub.name} Logo`}
                        className="max-h-full w-auto group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                      />
                    </div>
                    <span className="px-6 py-2 bg-[#11CAA0] text-black font-black text-xs uppercase rounded-full tracking-[0.2em]">
                      {hub.tag}
                    </span>
                    <h3 className="text-6xl font-black text-white uppercase mt-6 italic leading-none">
                      {hub.name.split(',')[0]}
                    </h3>
                    <p className="text-[#11CAA0] font-bold text-sm uppercase tracking-[0.3em] mt-3">
                      {hub.name.split(',')[1]}
                    </p>
                  </div>
                  <div className="h-0 group-hover:h-32 opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    <p className="text-white/80 text-xl leading-relaxed font-medium max-w-sm">
                      {hub.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute top-28 left-1/2 -translate-x-1/2 text-center pointer-events-none z-20 w-full px-12">
              <h2 className="text-6xl font-black text-white uppercase tracking-tighter italic drop-shadow-2xl">
                {slide.title}
              </h2>
              <p className="text-[#11CAA0] font-black uppercase text-sm tracking-[0.4em] mt-4">
                {slide.subtitle}
              </p>
            </div>
          </div>
        );

      case 'model-blueprint':
        return (
          <div className="relative h-full bg-[#001A2D] flex items-center px-24 overflow-hidden pt-24">
            <img
              src={slide.bgImage}
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              alt="blueprint"
            />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-16 w-full items-center max-w-[110rem] mx-auto">
              <div className="lg:col-span-3">
                <span className="text-[#11CAA0] font-black text-base uppercase tracking-[0.4em] mb-6 block">
                  {slide.subtitle}
                </span>
                <h2 className="text-6xl lg:text-7xl font-black text-white uppercase leading-[0.9] mb-10 tracking-tighter italic">
                  {slide.title}
                </h2>
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed italic mb-10 max-w-2xl">
                  {slide.content}
                </p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-2 gap-6 lg:gap-8">
                {slide.features?.map((f: Feature, i: number) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/20 backdrop-blur-xl p-8 rounded-[2rem] flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-500 shadow-xl"
                  >
                    <div className="mb-6 text-[#11CAA0] group-hover:scale-110 transition-transform duration-500">
                      {React.cloneElement(f.icon, { className: 'w-10 h-10' })}
                    </div>
                    <h4 className="text-white font-black uppercase text-[10px] tracking-[0.2em] mb-4">
                      {f.title}
                    </h4>
                    <p className="text-white/60 text-[10px] uppercase leading-tight tracking-widest font-bold">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'moments-mosaic':
        return (
          <div className="h-full bg-[#001A2D] flex flex-col relative overflow-hidden pt-24">
            <div className="p-12 pb-6 text-center relative z-20">
              <h2 className="text-7xl font-black text-white uppercase tracking-tighter italic">
                {slide.title}
              </h2>
              <p className="text-[#11CAA0] font-black uppercase text-base tracking-[0.4em] mt-6">
                {slide.subtitle}
              </p>
            </div>
            <div className="flex-grow grid grid-cols-4 grid-rows-2 gap-6 p-16 pt-0">
              {slide.panels?.map((p: Panel, i: number) => (
                <div
                  key={i}
                  className={`relative group overflow-hidden rounded-[2.5rem] bg-[#001A2D]/40 shadow-inner ${
                    p.size === 'large' ? 'col-span-2' : 'col-span-1'
                  }`}
                >
                  <img
                    src={p.img}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[4s]"
                    alt={`Event Moment ${i}`}
                  />
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-screen bg-[#001A2D] text-slate-900 font-sans select-none overflow-hidden relative">
      {/* Absolute Branding Layer */}
      <div className="absolute top-12 left-12 z-[100]">
        <img
          src="https://surfcupinternational.com/wp-content/uploads/2020/12/cropped-Surf-Cup-International-Blue.png"
          className={`h-16 w-auto transition-all duration-500 ${
            slides[currentSlide].isDark ? 'brightness-0 invert' : ''
          }`}
          alt="SCI Logo"
        />
      </div>

      {/* Main Slide Content */}
      <div className="h-full transition-all duration-700 ease-in-out">
        {renderSlide(slides[currentSlide])}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-12 flex items-center gap-8 z-[100]">
        <button
          onClick={prevSlide}
          className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white hover:bg-[#11CAA0] hover:text-[#001A2D] transition-all group shadow-2xl"
        >
          <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
        </button>
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full cursor-pointer transition-all duration-500 ${
                i === currentSlide ? 'w-16 bg-[#11CAA0]' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white hover:bg-[#11CAA0] hover:text-[#001A2D] transition-all group shadow-2xl"
        >
          <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Pagination Status */}
      <div className="absolute top-12 right-12 z-[100]">
        <div
          className={`text-xs font-black tracking-[0.6em] uppercase transition-colors duration-500 ${
            slides[currentSlide].isDark ? 'text-white/60' : 'text-slate-400'
          }`}
        >
          Executive Briefing{' '}
          <span
            className={
              slides[currentSlide].isDark ? 'text-white' : 'text-[#11CAA0]'
            }
          >
            {currentSlide + 1}
          </span>{' '}
          <span className="mx-2">/</span> {slides.length}
        </div>
      </div>
    </div>
  );
};

export default App;