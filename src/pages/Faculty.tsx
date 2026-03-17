import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useDataStore } from "@/store/dataStore";

const Faculty = () => {
  const store = useDataStore();

  return (
    <div>
      <section className="bg-muted pt-28 md:pt-36 pb-16 md:pb-20 relative overflow-hidden">
        <motion.div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container max-w-3xl relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary tracking-tight text-balance mb-6">Our Team</h1>
            <p className="text-foreground/70 leading-relaxed text-pretty text-lg">
              Meet the dedicated management team behind Vignan Public High School.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        {store.faculty.length === 0 ? (
          <div className="text-center py-20 bg-card rounded-2xl border border-primary/5">
            <h3 className="font-heading font-bold text-xl text-primary mb-2">Check back later!</h3>
            <p className="text-muted-foreground">Our faculty directory is currently being updated.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {store.faculty.map((member, i) => {
              const initials = member.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
              return (
                <motion.div
                  key={member.id}
                  className="bg-card rounded-xl overflow-hidden shadow-elegant group hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <motion.div
                      className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20"
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-2xl font-heading font-bold text-primary/50">{initials}</span>
                    </motion.div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-primary group-hover:text-accent transition-colors">{member.name}</h3>
                    <p className="text-xs font-medium text-accent mb-3">{member.role}</p>
                    <p className="text-sm text-foreground/60 leading-relaxed"><span className="font-semibold text-primary/80">Department:</span> {member.department}</p>
                    <p className="text-sm text-foreground/60 leading-relaxed mt-1"><span className="font-semibold text-primary/80">Experience:</span> {member.experience}</p>
                    <div className="mt-4 pt-3 border-t border-primary/5">
                      <a href="mailto:info@vignanpublichighschool.com" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors">
                        <Mail size={12} /> Contact
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default Faculty;
