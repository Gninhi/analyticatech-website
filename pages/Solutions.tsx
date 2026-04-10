import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { ArrowRight, Loader2, Sparkles, Zap } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import AnimatedHeading from '../components/UI/AnimatedHeading';
import { usePageSEO } from '../hooks/usePageSEO';
import { useSolutions } from '../hooks/useContent';
import { Link } from 'react-router-dom';
import { useI18n } from '../components/System/I18nProvider';

const Solutions: React.FC = () => {
  const { t } = useI18n();
  const reducedMotion = useReducedMotion();

  usePageSEO({
    title: t('nav.solutions'),
    description: 'IA products for business growth.',
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const { data: solutions, isLoading } = useSolutions();

  const [dimensions, setDimensions] = useState({
    trackWidth: 0,
    containerWidth: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (trackRef.current && containerRef.current) {
        setDimensions({
          trackWidth: trackRef.current.scrollWidth,
          containerWidth: containerRef.current.clientWidth,
        });
      }
    };

    const timeoutId = setTimeout(updateDimensions, 100);
    window.addEventListener('resize', updateDimensions);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateDimensions);
    };
  }, [solutions]);

  const scrollDistance = Math.max(0, dimensions.trackWidth - dimensions.containerWidth);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
  const backgroundX = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance * 0.3]);

  useEffect(() => {
    if (reducedMotion || scrollDistance === 0) return;

    const container = containerRef.current;
    const sticky = stickyRef.current;
    if (!container || !sticky) return;

    let rafId: number | null = null;
    let currentX = 0;
    let targetX = 0;
    const ease = 0.1;

    const handleWheel = (e: WheelEvent) => {
      const rect = container.getBoundingClientRect();
      const isInZone = rect.top <= 0 && rect.bottom > window.innerHeight;

      if (isInZone) {
        e.preventDefault();
        targetX = Math.max(
          Math.min(targetX + e.deltaY * 0.8, 0),
          -scrollDistance
        );
      }
    };

    const animate = () => {
      currentX += (targetX - currentX) * ease;

      if (sticky) {
        sticky.style.transform = `translateX(${currentX}px)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    rafId = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [reducedMotion, scrollDistance]);

  const sectionHeight = reducedMotion || scrollDistance === 0
    ? 'auto'
    : `${scrollDistance + window.innerHeight}px`;

  if (reducedMotion) {
    return (
      <div className="bg-transparent w-full min-h-screen">
        <section className="min-h-[35vh] flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative z-10 pt-20 pb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-analytica-accent/10 border border-analytica-accent/20 mb-6">
              <Sparkles size={14} className="text-analytica-accent" />
              <span className="text-analytica-accent font-mono text-xs tracking-[0.15em] uppercase font-medium">
                Catalogue 2025
              </span>
            </div>

            <AnimatedHeading text="SOLUTIONS" highlightText="PACKAGÉES" size="9xl" />

            <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Des produits IA clés en main pour accélérer votre transformation digitale.
              <span className="text-slate-800 dark:text-slate-300 font-medium">
                {' '}Déployez en jours, pas en mois.
              </span>
            </p>

            <div className="flex flex-wrap gap-6 md:gap-8 mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
              {[
                { value: '6+', label: 'Solutions' },
                { value: '-80%', label: 'Coût API' },
                { value: 'x50', label: 'Vitesse' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white">
                    {value}
                  </div>
                  <div className="text-xs md:text-sm text-slate-500 font-mono uppercase tracking-wider">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions?.map((solution) => (
              <Link
                key={solution.id}
                to={`/solutions/${solution.id}`}
                className="block group"
              >
                <Card
                  variant="tech"
                  className="h-full p-8 hover:border-analytica-accent/50 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-analytica-accent/10 border border-analytica-accent/20 flex items-center justify-center text-analytica-accent">
                      <solution.icon size={28} />
                    </div>
                    <span className="text-[10px] font-mono text-analytica-accent bg-analytica-accent/10 px-2 py-1 rounded-full border border-analytica-accent/20 uppercase tracking-widest">
                      PROD-{String(solution.id).slice(0, 3).toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3 group-hover:text-analytica-accent transition-colors">
                    {solution.title.toUpperCase()}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {solution.shortDescription}
                  </p>

                  <div className="flex items-center gap-2 text-analytica-accent text-sm font-bold mt-6 group-hover:gap-4 transition-all">
                    <span className="uppercase text-[10px] tracking-widest">Détails</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Card
              variant="tech"
              className="p-10 text-center bg-gradient-to-br from-analytica-accent/10 via-transparent to-transparent border-analytica-accent/30"
            >
              <Sparkles size={28} className="mx-auto mb-4 text-analytica-accent animate-pulse" />
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-3">
                CONFIGURATION <span className="text-analytica-accent">CUSTOM</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Développement sur mesure pour vos besoins spécifiques.
              </p>
              <Button to="/contact" variant="shiny">
                START PROTOCOL
              </Button>
            </Card>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-transparent w-full">
      <section
        ref={containerRef}
        className="relative"
        style={{ height: sectionHeight }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-[2px] bg-slate-200/20 z-40"
            role="progressbar"
            aria-label="Scroll progress"
          >
            <motion.div
              className="h-full bg-analytica-accent origin-left"
              style={{ scaleX: smoothProgress }}
            />
          </div>

          <motion.div
            style={{ x: backgroundX }}
            className="absolute top-[15%] left-0 text-[25vw] font-display font-bold text-slate-200/20 dark:text-white/[0.02] whitespace-nowrap pointer-events-none select-none z-0 tracking-tighter"
            aria-hidden="true"
          >
            SOLUTIONS CATALOGUE
          </motion.div>

          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-20 pointer-events-none" />

          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-12 md:gap-16 pl-8 md:pl-24 pr-[50vw] items-center h-full"
          >
            <div className="w-[85vw] md:w-[400px] flex-shrink-0">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-analytica-accent/10 border border-analytica-accent/20">
                  <Zap size={14} className="text-analytica-accent" />
                  <span className="text-xs font-mono text-analytica-accent uppercase tracking-wider font-bold">
                    Ready to deploy
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                  VOTRE{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-analytica-accent to-orange-500">
                    ARSENAL
                  </span>{' '}
                  IA.
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-sm">
                  Une suite d'outils industriels conçus pour scalabilité immédiate.
                </p>

                <div className="flex items-center gap-4 text-analytica-accent font-mono text-xs uppercase tracking-wider animate-pulse">
                  <span className="w-12 h-px bg-analytica-accent" />
                  Scroll pour explorer
                </div>
              </div>
            </div>

            {isLoading && (
              <div className="flex-shrink-0 w-[85vw] md:w-[480px] flex items-center justify-center">
                <Loader2 className="animate-spin text-analytica-accent" size={48} />
              </div>
            )}

            {solutions?.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0"
              >
                <Link to={`/solutions/${solution.id}`} className="block group">
                  <Card
                    variant="tech"
                    className="w-[85vw] md:w-[480px] h-[520px] md:h-[580px] flex flex-col p-8 md:p-10 hover:border-analytica-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-analytica-accent/10 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-analytica-accent/0 to-analytica-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-analytica-accent/20 to-analytica-accent/5 border border-analytica-accent/20 flex items-center justify-center text-analytica-accent group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-analytica-accent/10">
                        <solution.icon size={28} />
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="text-[10px] font-mono font-bold text-analytica-accent bg-analytica-accent/10 px-3 py-1.5 rounded-full border border-analytica-accent/20 uppercase tracking-widest">
                          PROD-{String(solution.id).slice(0, 3).toUpperCase()}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-4 relative z-10">
                      <div>
                        <p className="text-[10px] font-mono text-analytica-accent uppercase tracking-[0.3em] mb-1">
                          {solution.subtitle}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white group-hover:text-analytica-accent transition-colors duration-500 leading-none">
                          {solution.title.toUpperCase()}
                        </h3>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base line-clamp-3">
                        {solution.shortDescription}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 my-6 p-4 rounded-xl bg-slate-50/50 dark:bg-white/[0.02] border border-slate-200/50 dark:border-white/5 relative z-10">
                      {solution.kpis.slice(0, 2).map((stat, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="text-[9px] uppercase text-slate-500 font-bold tracking-widest font-mono opacity-80">
                            {stat.label}
                          </div>
                          <div className="text-xl font-display font-bold text-slate-900 dark:text-white">
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-slate-200/50 dark:border-white/10 relative z-10">
                      <div className="flex gap-2">
                        {solution.techStack.slice(0, 2).map((tech, i) => (
                          <span
                            key={i}
                            className="text-[9px] font-mono text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded border border-slate-200 dark:border-white/5 uppercase"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-analytica-accent text-sm font-bold group-hover:gap-4 transition-all">
                        <span className="uppercase text-[10px] tracking-widest">
                          {t('common.details')}
                        </span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}

            <div className="w-[85vw] md:w-[500px] flex-shrink-0 flex items-center h-full">
              <Card
                variant="tech"
                className="p-12 text-center w-full bg-gradient-to-br from-analytica-accent/10 via-transparent to-transparent border-analytica-accent/30 hover:border-analytica-accent/50 transition-all duration-500 shadow-xl shadow-analytica-accent/5"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-analytica-accent/20 border border-analytica-accent/20 flex items-center justify-center text-analytica-accent">
                  <Sparkles size={28} className="animate-pulse" />
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white leading-none mb-4">
                  CONFIGURATION <br />
                  <span className="text-analytica-accent">CUSTOM</span>
                </h2>

                <p className="text-slate-600 dark:text-slate-400 text-base mb-8 max-w-xs mx-auto leading-relaxed">
                  Développement sur mesure pour architectures complexes.
                </p>

                <Button
                  to="/contact"
                  variant="shiny"
                  className="!px-10 !py-4 text-xs font-bold tracking-widest uppercase"
                >
                  START PROTOCOL
                </Button>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
