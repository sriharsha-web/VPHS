import { motion } from "framer-motion";
import { Target, Eye, Sparkles, History, Info } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const values = ["Academic Excellence", "Integrity & Ethics", "Respect & Inclusivity", "Innovation & Creativity", "Excellence in Sports"];

const About = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-primary isolate">
        {/* Animated Mesh Gradient Background Elements */}
        <div className="absolute inset-0 z-[-1] opacity-40">
          <motion.div
            className="absolute top-[-30%] left-[-10%] w-[60%] h-[160%] bg-accent rounded-full mix-blend-screen filter blur-[120px]"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          />
          <motion.div
            className="absolute top-[-20%] right-[-10%] w-[50%] h-[150%] bg-secondary rounded-full mix-blend-screen filter blur-[100px]"
            animate={{ rotate: -360, scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10" />

        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-xl">
              <Info size={14} className="text-white" />
              Who We Are
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight mb-6 drop-shadow-lg">
              About Vignan
            </h1>
            <p className="text-white/80 leading-relaxed text-lg md:text-xl font-medium drop-shadow-md">
              Established with a vision to provide quality education, Vignan Public High School has been nurturing young minds in Laggere, Bengaluru for over two decades.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative bottom gradient fade to bg-background */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats section */}
      <section className="container py-8 -mt-16 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 bg-card/80 backdrop-blur-xl border border-primary/10 rounded-3xl p-6 md:p-10 shadow-2xl">
          {[
            { end: 20, suffix: "+", label: "Years Est." },
            { end: 1500, suffix: "+", label: "Students" },
            { end: 50, suffix: "+", label: "Staff" },
            { end: 10, suffix: "", label: "Grades (K–10)" }
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-4 rounded-2xl bg-background border border-primary/5 hover:border-primary/20 transition-colors shadow-sm"
            >
              <AnimatedCounter end={stat.end} suffix={stat.suffix} label="" />
              <p className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="container py-16 md:py-24 max-w-5xl relative">
        {/* Background blobs */}
        <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {[
            {
              icon: Eye,
              title: "Our Vision",
              text: "To be a leading educational institution that empowers students with knowledge, skills, and values to excel in a rapidly changing world while staying rooted in Indian culture and traditions.",
            },
            {
              icon: Target,
              title: "Our Mission",
              text: "To provide a safe, inclusive, and stimulating learning environment that fosters academic excellence, character development, and holistic growth. We are committed to helping every student discover their unique potential.",
            },
            {
              icon: History,
              title: "Our History",
              text: "Since our founding, Vignan Public High School has grown from a small institution to a well-respected school serving hundreds of students from Kindergarten through Class 10 with an unwavering commitment to educational excellence over two successful decades.",
            },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              className="relative bg-card rounded-[2rem] p-8 lg:p-10 border border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner">
                <section.icon size={28} className="text-primary" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-heading font-black text-foreground mb-4 group-hover:text-primary transition-colors">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">{section.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
              <Sparkles size={16} className="text-primary" />
              Core Principles
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground">Our Values</h2>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v}
                className="bg-card border border-primary/10 rounded-2xl px-6 py-4 hover:bg-primary hover:text-white transition-all duration-300 cursor-default shadow-sm hover:shadow-xl hover:-translate-y-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <p className="font-bold text-base whitespace-nowrap">{v}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default About;
