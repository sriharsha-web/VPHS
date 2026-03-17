import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, CheckCircle, ClipboardList, Phone, GraduationCap } from "lucide-react";
import { useDataStore } from "@/store/dataStore";
import { toast } from "@/hooks/use-toast";

const process = [
  "Visit the school or contact us for an application form",
  "Submit the completed application with required documents",
  "Attend the interaction/assessment session",
  "Receive admission confirmation",
  "Complete fee payment and enrollment",
];

const documents = [
  "Birth Certificate",
  "Transfer Certificate (if applicable)",
  "Report Card / Progress Report",
  "Passport-size photographs (4 nos.)",
  "Aadhar Card of student and parent",
  "Address proof",
];

const eligibility = [
  { grade: "Kindergarten (LKG)", age: "3.5 years as of June 1st" },
  { grade: "Kindergarten (UKG)", age: "4.5 years as of June 1st" },
  { grade: "Class 1", age: "5.5 years as of June 1st" },
  { grade: "Class 2–10", age: "Based on Transfer Certificate and assessment" },
];

const Admissions = () => {
  const [submitted, setSubmitted] = useState(false);
  const store = useDataStore();

  const handleApply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    store.addAdmission({
      studentName: fd.get('studentName') as string,
      grade: fd.get('grade') as string,
      parentName: fd.get('parentName') as string,
      contact: fd.get('contact') as string,
    });
    setSubmitted(true);
    toast({ title: 'Application Submitted', description: 'We will contact you shortly.' });
    e.currentTarget.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      <section className="bg-muted pt-28 md:pt-36 pb-16 md:pb-20 relative overflow-hidden">
        <motion.div className="absolute -top-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container max-w-3xl relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
              2025-26 Admissions Open
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary tracking-tight text-balance mb-6">Admissions</h1>
            <p className="text-foreground/70 leading-relaxed text-pretty text-lg">
              Join the Vignan family. We welcome students who are eager to learn and grow.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container py-16 md:py-24 max-w-3xl space-y-16">
        {/* Process */}
        <div>
          <motion.div className="flex items-center gap-3 mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="p-2.5 rounded-xl bg-primary/10">
              <ClipboardList size={20} className="text-primary" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-primary">Admission Process</h2>
          </motion.div>
          <ol className="space-y-4 relative">
            <div className="absolute left-[13px] top-4 bottom-4 w-px bg-primary/10" />
            {process.map((step, i) => (
              <motion.li
                key={i}
                className="flex gap-4 items-start relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center justify-center shrink-0 tabular-nums relative z-10">
                  {i + 1}
                </span>
                <p className="text-foreground/70 text-sm leading-relaxed pt-1">{step}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Documents */}
        <div>
          <motion.div className="flex items-center gap-3 mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="p-2.5 rounded-xl bg-primary/10">
              <FileText size={20} className="text-primary" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-primary">Documents Required</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {documents.map((doc, i) => (
              <motion.div
                key={doc}
                className="flex items-center gap-3 text-foreground/70 text-sm bg-secondary rounded-xl p-4 group hover:shadow-elegant transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ x: 4 }}
              >
                <CheckCircle size={16} className="text-accent shrink-0 group-hover:scale-110 transition-transform" />
                {doc}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Eligibility */}
        <div>
          <motion.div className="flex items-center gap-3 mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="p-2.5 rounded-xl bg-primary/10">
              <GraduationCap size={20} className="text-primary" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-primary">Eligibility</h2>
          </motion.div>
          <div className="bg-card rounded-xl overflow-hidden shadow-elegant border border-primary/5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-primary/10 bg-primary/5">
                  <th className="text-left p-4 font-heading font-semibold text-primary">Grade</th>
                  <th className="text-left p-4 font-heading font-semibold text-primary">Age Requirement</th>
                </tr>
              </thead>
              <tbody>
                {eligibility.map((e, i) => (
                  <motion.tr
                    key={e.grade}
                    className="border-b border-primary/5 last:border-0 hover:bg-primary/[0.02] transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <td className="p-4 text-foreground/80 font-medium">{e.grade}</td>
                    <td className="p-4 text-foreground/60">{e.age}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Admission Form Section */}
        <div>
          <motion.div className="flex items-center gap-3 mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="p-2.5 rounded-xl bg-primary/10">
              <FileText size={20} className="text-primary" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-primary">Apply Online</h2>
          </motion.div>
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-elegant border border-primary/5 relative overflow-hidden">
             {/* Decorative Background Accent */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
             
            <form className="space-y-6 relative z-10" onSubmit={handleApply}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80">Student's Name</label>
                  <input name="studentName" required type="text" className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-sm" placeholder="e.g. Rahul Sharma" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80">Grade Applied For</label>
                  <select name="grade" required className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-sm text-foreground/90">
                    <option value="" disabled selected>Select Grade</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <option key={n} value={`Class ${n}`}>Class {n}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80">Parent's Name</label>
                  <input name="parentName" required type="text" className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-sm" placeholder="e.g. Ramesh Sharma" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80">Contact Number</label>
                  <input name="contact" required type="tel" className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-sm" placeholder="+91" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground/80">Prior School (if any)</label>
                  <input name="priorSchool" type="text" className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-sm" placeholder="Previous school name" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground/80">Additional Notes / Queries</label>
                  <textarea name="notes" rows={3} className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-sm resize-none" placeholder="Any special requirements or questions..."></textarea>
                </div>
              </div>
              <button type="submit" disabled={submitted} className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed">
                {submitted ? "Submitted Successfully!" : "Submit Application"} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          className="bg-primary rounded-2xl p-8 md:p-10 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-accent/10"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 6 }}
          />
          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Phone size={18} className="text-primary-foreground" />
              <h2 className="text-xl font-heading font-bold text-primary-foreground">Have Questions?</h2>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Contact us at <a href="tel:+919972235286" className="underline font-medium">99722 35286</a> or visit our school.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-sm group"
            >
              Contact Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Admissions;
