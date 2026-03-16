import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FlaskConical, Code, Calculator, Heart, Swords, MapPin, GraduationCap, Users, Trophy, Clock, Calendar } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import logo from "@/assets/logo.png";
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section ref={heroRef} className="relative bg-muted overflow-hidden min-h-[90vh] flex items-center">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, scale: heroScale }}
        >
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={currentHero}
              src={heroImages[currentHero]} 
              alt="School Campus" 
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-muted" />
        </motion.div>
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container py-20 md:py-32 relative">
          <motion.div className="max-w-3xl mx-auto text-center" variants={stagger} initial="initial" animate="animate">
            <motion.img
              src={logo}
              alt="Vignan Public High School"
              className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 rounded-full shadow-elegant"
              variants={fadeUp}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter text-balance mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent drop-shadow-sm"
              variants={fadeUp}
            >
              Vignan Public High School
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground font-body mb-8 text-pretty"
              variants={fadeUp}
            >
              Knowledge is Power
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeUp}>
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Admissions Open <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
            <motion.div className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={20} suffix="+" label="Years of Excellence" />
          <AnimatedCounter end={1500} suffix="+" label="Happy Students" />
          <AnimatedCounter end={50} suffix="+" label="Expert Faculty" />
          <AnimatedCounter end={95} suffix="%" label="Board Pass Rate" />
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight mb-6">About Our School</h2>
              <p className="text-foreground/70 leading-relaxed text-pretty mb-4">
                Vignan Public High School, located in Laggere, Bengaluru, has been a cornerstone of quality education for over two decades.
              </p>
              <p className="text-foreground/70 leading-relaxed text-pretty mb-6">
                We provide a nurturing environment where students develop academic excellence, moral values, and life skills.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group mb-8 md:mb-0">
                Read more about us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full h-[350px] md:h-[400px]">
                <div className="absolute inset-0 bg-primary/10 transform translate-x-4 translate-y-4 rounded-2xl" />
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" 
                  alt="Students studying" 
                  className="relative rounded-2xl shadow-xl object-cover -rotate-2 hover:rotate-0 transition-transform duration-500 z-10 w-full h-full"
                />
              </div>
              <div className="relative z-20 grid grid-cols-2 gap-4 md:gap-6 -mt-12 md:-mt-20 px-4 md:px-8">
                {[
                  { icon: GraduationCap, label: "K to Class 10" },
                  { icon: Users, label: "Small Class Sizes" },
                  { icon: Trophy, label: "Award Winning" },
                  { icon: Clock, label: "20+ Years" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="bg-background/90 backdrop-blur-md rounded-xl p-5 shadow-elegant text-center group cursor-default border border-primary/5"
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                  >
                    <item.icon size={26} className="mx-auto text-primary mb-2 group-hover:scale-110 group-hover:text-accent transition-all duration-300" />
                    <p className="text-xs md:text-sm font-bold text-foreground/80">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
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
              <div className="w-56 h-64 bg-secondary rounded-xl flex items-center justify-center shadow-elegant overflow-hidden group relative transform -rotate-3 hover:rotate-0 transition-all duration-500">
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
                <div className="p-6 flex-1 flex flex-col relative bg-background">
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-6">{event.description}</p>
                  <div className="mt-auto flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider">
                    <Calendar size={14} className="text-accent" />
                    {event.date}
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

      {/* Campus Gallery */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight mb-3">Campus Life Gallery</h2>
            <p className="text-muted-foreground mx-auto max-w-lg">A glimpse into our vibrant educational environment</p>
          </div>
          <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory scrollbar-hide px-4 md:px-0 -mx-4 md:mx-0">
            {[
              "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
            ].map((src, idx) => (
              <motion.div
                key={idx}
                className="min-w-[85vw] md:min-w-[400px] h-64 md:h-80 rounded-2xl overflow-hidden shadow-md snap-center relative group isolate"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img src={src} alt="Campus" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
