import { motion } from "framer-motion";
import { Target, Eye, Sparkles, History } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const values = ["Academic Excellence", "Integrity & Ethics", "Respect & Inclusivity", "Innovation & Creativity", "Community Service", "Physical Fitness"];

const About = () => {
  return (
    <div>
      <section className="bg-muted pt-28 md:pt-36 pb-16 md:pb-20 relative overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <div className="container max-w-3xl relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary tracking-tight text-balance mb-6">About Vignan Public High School</h1>
            <p className="text-foreground/70 leading-relaxed text-pretty text-lg">
              Established with a vision to provide quality education, Vignan Public High School has been nurturing young minds in Laggere, Bengaluru for over two decades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-primary/5 py-12">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={20} suffix="+" label="Years Est." />
          <AnimatedCounter end={1500} suffix="+" label="Students" />
          <AnimatedCounter end={50} suffix="+" label="Staff" />
          <AnimatedCounter end={10} suffix="" label="Grades (K–10)" />
        </div>
      </section>

      <section className="container py-16 md:py-24 max-w-4xl">
        <div className="space-y-16">
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
          ].map((section, i) => (
            <motion.div
              key={section.title}
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-2 rounded-lg bg-primary/10 shrink-0 mt-1">
                <section.icon size={20} className="text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-3">{section.title}</h2>
                <p className="text-foreground/70 leading-relaxed text-pretty">{section.text}</p>
              </div>
            </motion.div>
          ))}

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Sparkles size={20} className="text-primary" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-primary">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v}
                  className="bg-secondary rounded-xl p-5 shadow-elegant group hover:shadow-lg transition-all duration-300 cursor-default relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <p className="font-medium text-secondary-foreground text-sm">{v}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="flex gap-6 items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-2 rounded-lg bg-primary/10 shrink-0 mt-1">
              <History size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-3">Our History</h2>
              <p className="text-foreground/70 leading-relaxed text-pretty">
                Since our founding, Vignan Public High School has grown from a small institution to a well-respected school serving hundreds of students from Kindergarten through Class 10. Our alumni have gone on to achieve success in various fields, a testament to the strong foundation we provide.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
