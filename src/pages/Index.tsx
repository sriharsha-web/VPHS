import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FlaskConical, Code, Calculator, Heart, Swords, MapPin, GraduationCap, Users, Trophy, Clock, Calendar, TrendingUp, ChevronDown } from "lucide-react";
import { useRef, useState, useEffect } from "react";

import AnimatedCounter from "@/components/AnimatedCounter";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const facilities = [
  {
    category: "Academic Facilities",
    items: [
      { icon: FlaskConical, name: "Science Lab" },
      { icon: Calculator, name: "Mathematics Lab" },
      { icon: BookOpen, name: "Library" },
    ],
  },
  {
    category: "Skill Development",
    items: [
      { icon: TrendingUp, name: "Geniusphere" },
      { icon: Code, name: "Code Club" },
      { icon: Calculator, name: "Abacus" },
    ],
  },
  {
    category: "Physical & Wellness",
    items: [
      { icon: Heart, name: "Yoga" },
      { icon: Swords, name: "Karate" },
    ],
  },
];

const events = [
  { title: "Annual Day Celebrations 2025", date: "March 15, 2025", description: "A grand celebration of student achievements with cultural performances and award ceremonies.", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600" },
  { title: "Science Exhibition", date: "February 20, 2025", description: "Students showcase innovative science projects and experiments.", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600" },
  { title: "Sports Day", date: "January 26, 2025", description: "Inter-house sports competitions celebrating athleticism and teamwork.", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=600" },
];

const heroImages = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=2000",
];

const Index = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="bg-background text-foreground">
      {/* Hero — Clean & Compact */}
      <section ref={heroRef} className="relative bg-background pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        {/* Background dot pattern */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #7A0032 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Text side */}
            <motion.div variants={stagger} initial="initial" animate="animate">
              {/* School name */}
              <motion.p
                variants={fadeUp}
                className="font-heading font-bold text-primary tracking-wide mb-1"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
              >
                Vignan Public High School
              </motion.p>
              <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Est. 2004 &bull; Laggere, Bengaluru
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="font-heading font-black text-foreground leading-tight tracking-tight mb-5"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
              >
                Shaping{" "}<span className="text-primary">Tomorrow's</span>{" "}Leaders
              </motion.h1>

              <motion.p variants={fadeUp} className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Two decades of nurturing curious minds. A community built on knowledge, values, and the belief that every child can shine.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 group"
                >
                  Enrol Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 text-foreground font-semibold rounded-xl hover:border-primary hover:text-primary transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeUp} className="flex items-center gap-8 pt-6 border-t border-primary/10">
                {[{ n: '20+', l: 'Years' }, { n: '1500+', l: 'Students' }, { n: '95%', l: 'Pass Rate' }, { n: '50+', l: 'Faculty' }].map(s => (
                  <div key={s.l}>
                    <p className="text-lg font-black text-primary">{s.n}</p>
                    <p className="text-xs text-muted-foreground">{s.l}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image side — contained, medium-sized */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="relative"
            >
              {/* Decorative bg blob */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary/20 rounded-full blur-2xl pointer-events-none" />

              {/* Image frame */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-primary/10 border border-primary/5">
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={currentHero}
                    src={heroImages[currentHero]}
                    alt="School Campus"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.0, ease: 'easeInOut' }}
                  />
                </AnimatePresence>
                {/* Light inner overlay for elegance */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />

                {/* Slideshow dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentHero(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        idx === currentHero ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Small floating stat badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-background rounded-2xl px-4 py-3 shadow-lg border border-primary/10 hidden sm:block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-xs text-muted-foreground">Board Pass Rate</p>
                <p className="text-2xl font-black text-primary">95%</p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats bar — removed, now inline in hero */}

      {/* About Preview */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000"
                alt="Students at Vignan"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                About Vignan
              </div>
              <h2 className="font-heading font-black text-foreground text-3xl md:text-4xl leading-tight mb-4">
                20 Years of <span className="text-primary">Academic Excellence</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Vignan Public High School has been shaping confident, curious, and compassionate students since 2004. Our dedicated faculty, world-class facilities, and student-first culture create an environment where learning is a joy.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 group mb-8"
              >
                Discover our story <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>

              {/* 2×2 stat grid */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                {[
                  { icon: GraduationCap, value: 'LKG–10', label: 'Classes Offered' },
                  { icon: Users,         value: '50+',    label: 'Expert Teachers' },
                  { icon: Trophy,        value: '95%',    label: 'Pass Rate' },
                  { icon: Clock,         value: '20+',    label: 'Years Legacy' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="bg-background rounded-xl p-4 flex items-center gap-3 border border-primary/5 hover:border-primary/20 transition-colors group"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 + 0.2 }}
                  >
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all">
                      <item.icon size={16} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-black text-foreground">{item.value}</p>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight mb-3">Our Facilities</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">World-class infrastructure to support holistic learning</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facilities.map((cat, i) => (
              <motion.div
                key={cat.category}
                className="bg-background rounded-2xl p-0 group relative overflow-hidden shadow-elegant border border-primary/5 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } }}
              >
                <div className="h-56 w-full overflow-hidden relative">
                  <img 
                    src={i === 0 ? "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600" : i === 1 ? "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=600" : "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"} 
                    alt={cat.category} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
                
                <div className="p-8 flex-1 flex flex-col relative bg-background">
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6 -mt-14 relative z-10 shadow-sm border border-white">
                    {i === 0 ? <FlaskConical size={24} /> : i === 1 ? <Code size={24} /> : <Heart size={24} />}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-4 relative">{cat.category}</h3>
                  <ul className="space-y-4 relative">
                    {cat.items.map((item, j) => (
                      <motion.li
                        key={item.name}
                        className="flex items-center gap-3 text-foreground/80 group/item"
                      >
                        <div className="p-2 rounded-lg bg-primary/5 group-hover/item:bg-primary/10 group-hover/item:text-primary transition-all">
                          <item.icon size={16} />
                        </div>
                        <span className="font-body text-sm font-medium">{item.name}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center max-w-4xl mx-auto"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            <motion.div
              className="md:col-span-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-56 h-64 bg-secondary rounded-xl flex items-center justify-center shadow-elegant overflow-hidden group relative">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500" 
                  alt="Principal" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="relative">
                <span className="absolute -top-6 -left-3 text-8xl font-heading text-primary/10 leading-none select-none">"</span>
                <blockquote className="pl-6 text-foreground/80 leading-relaxed text-pretty italic text-lg">
                  Education is not just about academic excellence; it is about building character, fostering creativity, and preparing our children to become responsible citizens. At Vignan, we believe every child has the potential to shine.
                </blockquote>
                <div className="mt-6 pl-6">
                  <p className="font-heading font-semibold text-primary text-lg">Amar Narayan</p>
                  <p className="text-sm text-muted-foreground">Principal</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Latest Events */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight">Latest Events</h2>
              <p className="text-muted-foreground text-sm mt-1">What's happening at Vignan</p>
            </div>
            <Link to="/events" className="text-accent font-medium text-sm hover:underline hidden sm:inline-flex items-center gap-1 group">
              View all <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                className="bg-background rounded-2xl p-0 group relative overflow-hidden shadow-elegant border border-primary/5 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="h-44 w-full overflow-hidden relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground pb-1 px-3 pt-2 rounded-lg text-center shadow-lg border-2 border-white/20 backdrop-blur-md">
                    <p className="text-[10px] font-bold text-primary-foreground/90 uppercase tracking-widest">{event.date.split(' ')[0]}</p>
                    <p className="text-2xl font-black text-white leading-tight">{event.date.split(' ')[1].replace(',', '')}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col relative bg-background">
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-4">{event.description}</p>
                  <div className="mt-auto flex items-center gap-2 text-xs font-bold text-primary/70 uppercase tracking-wider pt-3 border-t border-primary/10">
                    <Calendar size={13} className="text-primary shrink-0" />
                    <span>{event.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <Link to="/events" className="sm:hidden mt-6 inline-flex items-center gap-1 text-accent font-medium text-sm hover:underline">
            View all events <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="container py-20 md:py-32">
        <motion.div
          className="bg-primary rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        >
          <motion.div
            className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-accent/15 blur-2xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-24 -left-20 w-64 h-64 rounded-full bg-secondary/20 blur-2xl"
            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
            transition={{ repeat: Infinity, duration: 10, delay: 1, ease: "easeInOut" }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 md:mb-8 leading-tight">Admissions Open for 2025-26</h2>
            <p className="text-primary-foreground/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
              Give your child the gift of quality education. Join the Vignan family and watch them grow into confident, knowledgeable individuals.
            </p>
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 md:px-12 md:py-6 bg-white text-primary font-bold rounded-2xl hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group text-lg md:text-xl"
            >
              Apply Now <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Campus Life Gallery — Marquee */}
      <section className="py-16 md:py-20 bg-muted overflow-hidden">
        <div className="text-center mb-10 container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight mb-3">Campus Life Gallery</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">A glimpse into our vibrant educational environment</p>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden mb-3 relative">
          <div className="marquee-track gap-3">
            {[
              { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=700", label: "Campus" },
              { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=700", label: "Classroom" },
              { src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=700", label: "Science Lab" },
              { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=700", label: "Study Hall" },
              { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=700", label: "Tech" },
              { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=700", label: "School Grounds" },
              // duplicated for seamless loop
              { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=700", label: "Campus" },
              { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=700", label: "Classroom" },
              { src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=700", label: "Science Lab" },
              { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=700", label: "Study Hall" },
              { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=700", label: "Tech" },
              { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=700", label: "School Grounds" },
            ].map((photo, idx) => (
              <div key={idx} className="shrink-0 w-64 h-44 md:w-80 md:h-56 rounded-2xl overflow-hidden relative group shadow-sm border border-primary/5">
                <img src={photo.src} alt={photo.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-2 left-3 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">{photo.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden relative">
          <div className="marquee-track-rtl gap-3">
            {[
              { src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=700", label: "Sports Day" },
              { src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=700", label: "Annual Day" },
              { src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=700", label: "Computer Lab" },
              { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=700", label: "Students" },
              { src: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=700", label: "Library" },
              { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=700", label: "Workshop" },
              // duplicated
              { src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=700", label: "Sports Day" },
              { src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=700", label: "Annual Day" },
              { src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=700", label: "Computer Lab" },
              { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=700", label: "Students" },
              { src: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=700", label: "Library" },
              { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=700", label: "Workshop" },
            ].map((photo, idx) => (
              <div key={idx} className="shrink-0 w-64 h-44 md:w-80 md:h-56 rounded-2xl overflow-hidden relative group shadow-sm border border-primary/5">
                <img src={photo.src} alt={photo.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-2 left-3 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">{photo.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background border-t border-primary/5">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to what parents ask most</p>
          </motion.div>
          <div className="space-y-3">
            {[
              { q: "How can I apply for admission?", a: "Visit our Admissions page or come directly to the school office. We accept applications for all grades K–10, subject to seat availability. Early applications are recommended as seats fill up quickly." },
              { q: "What are the school timings?", a: "Primary (K–5): 8:30 AM – 1:30 PM. Middle & High School (6–10): 8:30 AM – 4:00 PM, Monday to Saturday." },
              { q: "What is Geniusphere?", a: "Geniusphere is Vignan's flagship finance & trading programme where students learn about stock markets, financial literacy, budgeting, and entrepreneurship through hands-on simulations. Available for Class 6 onwards." },
              { q: "Does the school provide transport?", a: "Yes, school bus routes cover major areas around Laggere, Bengaluru. Contact the school office for route details and availability." },
              { q: "What is the medium of instruction?", a: "English is the primary medium. Kannada is taught as a compulsory second language from the primary level." },
              { q: "How do I contact the school?", a: "Visit us at Laggere, Bengaluru, or use the contact form on our Contact page. Office hours: Monday–Saturday, 8:30 AM – 4:30 PM." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                className="bg-secondary/50 rounded-2xl border border-primary/5 overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 text-left group"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                >
                  <span className="font-semibold text-foreground text-sm md:text-base leading-snug group-hover:text-primary transition-colors">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: faqOpen === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center"
                  >
                    <ChevronDown size={15} className="text-primary" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {faqOpen === i && (
                    <motion.div
                      key="ans"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-primary/5 pt-4">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-background py-16 md:py-24 border-t border-primary/5">
        <div className="container">
          <motion.div className="text-center mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight mb-3">Visit Our Campus Location</h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin size={16} />
              <span className="text-sm">Laggere, Bengaluru, Karnataka</span>
            </div>
          </motion.div>
          <motion.div
            className="rounded-xl overflow-hidden shadow-elegant aspect-video max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.476!2d77.5142!3d13.0165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzAwLjAiTiA3N8KwMzAnNTEuMSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vignan Public High School Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
