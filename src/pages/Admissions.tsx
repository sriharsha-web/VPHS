import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, CheckCircle, ClipboardList, Phone, GraduationCap, PenTool } from "lucide-react";
import { useDataStore } from "@/store/dataStore";
import { toast } from "@/hooks/use-toast";

const steps = [
  { icon: Phone, text: "Visit or contact us for an application form" },
  { icon: FileText, text: "Submit application with required documents" },
  { icon: ClipboardList, text: "Attend the interaction/assessment session" },
  { icon: GraduationCap, text: "Receive admission confirmation" },
  { icon: PenTool, text: "Complete fee payment and enrollment" },
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
  { grade: "LKG", age: "3.5 yrs as of June 1st" },
  { grade: "UKG", age: "4.5 yrs as of June 1st" },
  { grade: "Class 1", age: "5.5 yrs as of June 1st" },
  { grade: "Class 2–10", age: "Based on TC & assessment" },
];

const tabs = [
  { id: "process", label: "Process" },
  { id: "documents", label: "Documents" },
  { id: "eligibility", label: "Eligibility" },
];

const Admissions = () => {
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("process");
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
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-primary isolate">
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-[0.15]" />
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              2025-26 Admissions Open
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight mb-6 drop-shadow-lg">Begin Your Journey</h1>
            <p className="text-white/80 leading-relaxed text-lg md:text-xl font-medium drop-shadow-md">
              Join the Vignan family. We welcome students who are eager to learn, explore, and shape a bright future.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Main Content - Two Column on Desktop */}
      <section className="container py-14 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">

          {/* LEFT — Tabbed Info Card */}
          <motion.div
            className="bg-card rounded-[2rem] border border-primary/10 shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            {/* Tab pills */}
            <div className="flex border-b border-primary/10 bg-primary/5 p-2 gap-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-2.5 px-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-md"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="p-6 md:p-8 min-h-[300px]">
              <AnimatePresence mode="wait">
                {activeTab === "process" && (
                  <motion.div key="process" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="space-y-3">
                    {steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors group">
                        <span className="w-8 h-8 shrink-0 rounded-full bg-primary text-white font-black text-sm flex items-center justify-center shadow-sm shadow-primary/30">{i + 1}</span>
                        <step.icon size={16} className="text-primary shrink-0" />
                        <p className="text-sm text-foreground/80 font-medium leading-snug">{step.text}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
                {activeTab === "documents" && (
                  <motion.div key="documents" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="space-y-3">
                    {documents.map((doc, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors">
                        <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                        <p className="text-sm text-foreground/80 font-medium">{doc}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
                {activeTab === "eligibility" && (
                  <motion.div key="eligibility" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="space-y-3">
                    {eligibility.map((e, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/20 transition-colors">
                        <p className="font-heading font-bold text-primary text-sm">{e.grade}</p>
                        <p className="text-xs text-muted-foreground font-medium text-right">{e.age}</p>
                      </div>
                    ))}
                    <p className="text-xs text-muted-foreground text-center pt-2">Age calculated as on June 1st of admission year</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom CTA */}
            <div className="px-6 pb-6 md:px-8">
              <a href="tel:+919972235286" className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-primary/20 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all duration-200">
                <Phone size={16} /> Call: 99722 35286
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Application Form */}
          <motion.div
            className="bg-card rounded-[2rem] border border-primary/10 shadow-lg overflow-hidden relative"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="p-6 md:p-8 relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <PenTool size={20} className="text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-black text-foreground">Apply Online</h2>
              </div>

              <form className="space-y-4" onSubmit={handleApply}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Student's Name</label>
                    <input name="studentName" required type="text" className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-background/50 hover:bg-background focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm shadow-sm" placeholder="Full name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Grade Applied For</label>
                    <select name="grade" required className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-background/50 hover:bg-background focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm text-foreground/90 shadow-sm appearance-none cursor-pointer">
                      <option value="" disabled>Select Grade</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={`Class ${n}`}>Class {n}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Parent's Name</label>
                    <input name="parentName" required type="text" className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-background/50 hover:bg-background focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm shadow-sm" placeholder="Parent name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Contact Number</label>
                    <input name="contact" required type="tel" className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-background/50 hover:bg-background focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm shadow-sm" placeholder="+91" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Prior School (optional)</label>
                  <input name="priorSchool" type="text" className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-background/50 hover:bg-background focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm shadow-sm" placeholder="Previous school name" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Notes / Queries</label>
                  <textarea name="notes" rows={3} className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-background/50 hover:bg-background focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm resize-none shadow-sm" placeholder="Any special requirements..." />
                </div>
                <button type="submit" disabled={submitted} className="w-full py-3.5 bg-primary text-primary-foreground font-black tracking-wide rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                  {submitted ? "Submitted Successfully!" : "Submit Application"}
                  {!submitted && <ArrowRight size={18} />}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          className="bg-gradient-to-r from-primary to-accent rounded-[2rem] p-8 md:p-10 text-center mt-12 max-w-6xl mx-auto relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }} />
          <h2 className="text-2xl md:text-3xl font-heading font-black text-white mb-3">Have Questions?</h2>
          <p className="text-white/90 mb-6 text-base font-medium">
            Call <a href="tel:+919972235286" className="font-bold underline underline-offset-4">99722 35286</a> or visit our campus.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary font-black rounded-xl hover:bg-secondary transition-all duration-300 shadow-xl hover:-translate-y-0.5 group">
            Contact Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Admissions;
