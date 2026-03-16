import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, FlaskConical, Calculator, Code, Brain, Heart, Swords, Palette, ChevronRight, Lightbulb, ChevronDown } from "lucide-react";
import { useState } from "react";

const programs = [
  {
    title: "Primary School (K–5)",
    description: "A strong foundation in literacy, numeracy, and social skills through interactive and play-based learning.",
    highlights: ["Activity-based learning", "Phonics & storytelling", "Basic computer skills"],
  },
  {
    title: "Middle School (6–8)",
    description: "An expanded curriculum fostering critical thinking, scientific inquiry, and creative expression.",
    highlights: ["Science lab practicals", "Public speaking", "Project-based learning"],
  },
  {
    title: "High School (9–10)",
    description: "Rigorous academic preparation for board examinations with career guidance and life skills training.",
    highlights: ["Board exam prep", "Career counseling", "Advanced labs"],
  },
];

const subjects = [
  { icon: BookOpen,    name: "English & Kannada",  color: "bg-primary/10" },
  { icon: Calculator,  name: "Mathematics",         color: "bg-accent/10"  },
  { icon: FlaskConical,name: "Science",             color: "bg-primary/10" },
  { icon: Brain,       name: "Social Studies",      color: "bg-accent/10"  },
  { icon: Code,        name: "Computer Science",    color: "bg-primary/10" },
  { icon: Palette,     name: "Arts & Crafts",       color: "bg-accent/10"  },
  { icon: Heart,       name: "Yoga & Wellness",     color: "bg-primary/10" },
  { icon: Swords,      name: "Karate",              color: "bg-accent/10"  },
];

const extracurricular = [
  {
    icon: Lightbulb,
    name: "Geniusphere",
    description: "A flagship enrichment programme that nurtures innovation, logical reasoning, and creative problem-solving through inter-school competitions, quizzes, and STEM challenges.",
    color: "bg-yellow-50",
    iconColor: "text-yellow-600",
    badge: "Featured",
  },
  {
    icon: Code,
    name: "Code Club",
    description: "Students explore programming, build mini-projects, and develop computational thinking through fun challenges and hackathons.",
    color: "bg-primary/5",
    iconColor: "text-primary",
    badge: null,
  },
  {
    icon: Calculator,
    name: "Abacus",
    description: "Mental arithmetic training using the abacus method to improve concentration, memory, and speed calculation skills.",
    color: "bg-accent/10",
    iconColor: "text-accent",
    badge: null,
  },
  {
    icon: Swords,
    name: "Karate",
    description: "Discipline, self-defence, and physical fitness through structured karate training under certified instructors.",
    color: "bg-primary/5",
    iconColor: "text-primary",
    badge: null,
  },
  {
    icon: Heart,
    name: "Yoga & Wellness",
    description: "Promoting physical and mental well-being through daily yoga, meditation, and mindfulness practices.",
    color: "bg-accent/10",
    iconColor: "text-accent",
    badge: null,
  },
  {
    icon: Palette,
    name: "Arts & Crafts",
    description: "A creative outlet where students express themselves through drawing, painting, clay modelling, and craft projects.",
    color: "bg-primary/5",
    iconColor: "text-primary",
    badge: null,
  },
];

const faqs = [
  {
    q: "What is the medium of instruction at Vignan Public High School?",
    a: "The primary medium of instruction is English. Kannada is taught as a compulsory second language from primary school onwards, ensuring students are proficient in both.",
  },
  {
    q: "What board does the school follow?",
    a: "Vignan Public High School follows the Karnataka State Board syllabus. Classes 9 and 10 prepare students for the SSLC Board Examinations.",
  },
  {
    q: "What is Geniusphere and who can participate?",
    a: "Geniusphere is our flagship enrichment programme designed to challenge and inspire academically gifted students. It involves inter-school competitions, quizzes, and STEM projects. Students from Class 4 onwards are eligible to participate based on teacher recommendations.",
  },
  {
    q: "What are the school timings?",
    a: "School operates Monday to Saturday. Primary section (K–5) runs from 8:30 AM to 1:30 PM, while the Middle and High School sections (6–10) run from 8:30 AM to 4:00 PM.",
  },
  {
    q: "Are extracurricular activities mandatory?",
    a: "All students are encouraged to participate in at least one extracurricular activity. Some activities like Yoga are integrated into the daily schedule. Karate, Abacus, and Geniusphere are optional but highly recommended.",
  },
  {
    q: "How does the school support students who need extra help?",
    a: "We offer dedicated remedial classes after school hours, one-on-one teacher support, and a student counsellor for emotional and academic guidance. Parents are regularly updated through PTMs and our communication app.",
  },
  {
    q: "What facilities are available for students?",
    a: "The school has a well-equipped Science Lab, Mathematics Lab, Computer Lab (with internet access), a comprehensive Library, a Yoga room, and open sports grounds for physical activities.",
  },
];

const Academics = () => {
  const [expanded, setExpanded] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="bg-muted pt-28 md:pt-36 pb-16 md:pb-20 relative overflow-hidden">
        <motion.div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="container max-w-3xl relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary tracking-tight text-balance mb-6">Academics</h1>
            <p className="text-foreground/70 leading-relaxed text-lg">
              Our curriculum is designed to nurture intellectual curiosity and build a strong academic foundation from Kindergarten through Class 10.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="container py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-tight mb-8">Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-secondary rounded-xl p-6 shadow-elegant cursor-pointer group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <h3 className="font-heading font-semibold text-accent mb-3 relative">{p.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4 relative">{p.description}</p>
              <motion.div
                initial={false}
                animate={{ height: expanded === i ? "auto" : 0, opacity: expanded === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 pt-2 border-t border-primary/10">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-foreground/60">
                      <ChevronRight size={14} className="text-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <button className="text-xs text-accent font-medium mt-2 relative">
                {expanded === i ? "Show less" : "Show more"}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-tight mb-8">Subjects</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {subjects.map((s, i) => (
              <motion.div
                key={s.name}
                className="bg-background rounded-xl p-4 shadow-elegant flex items-center gap-3 group hover:shadow-lg transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -3 }}
              >
                <div className={`shrink-0 p-2.5 rounded-lg ${s.color} group-hover:scale-110 transition-transform`}>
                  <s.icon size={20} className="text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground/80">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="container py-16 md:py-24">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-tight mb-2">Extracurricular Activities</h2>
          <p className="text-muted-foreground">Beyond books — enriching every student's journey</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {extracurricular.map((item, i) => (
            <motion.div
              key={item.name}
              className="bg-background rounded-2xl p-6 border border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {item.badge && (
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
              <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon size={24} className={item.iconColor} />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-tight mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about academics at Vignan</p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-background rounded-2xl border border-primary/5 overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-foreground text-sm md:text-base leading-snug group-hover:text-primary transition-colors">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center"
                  >
                    <ChevronDown size={15} className="text-primary" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-primary/5 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
