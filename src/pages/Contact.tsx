import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useDataStore } from "@/store/dataStore";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const store = useDataStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    store.addEnquiry({
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message
    });
    setSubmitted(true);
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border bg-background text-foreground text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
      focused === field ? "border-accent shadow-md" : "border-primary/10"
    }`;

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: (
        <p className="text-sm text-foreground/70 leading-relaxed">
          28 & 29 Phase, 3, 3rd Main Rd<br />
          Rajeshwari Nagar, Chamundi Nagar<br />
          Laggere, Bengaluru, Karnataka 560058
        </p>
      ),
    },
    {
      icon: Phone,
      title: "Phone",
      content: <a href="tel:+919972235286" className="text-sm text-foreground/70 hover:text-accent transition-colors">99722 35286</a>,
    },
    {
      icon: Mail,
      title: "Email",
      content: <a href="mailto:info@vignanpublichighschool.com" className="text-sm text-foreground/70 hover:text-accent transition-colors">info@vignanpublichighschool.com</a>,
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: <p className="text-sm text-foreground/70">Monday – Saturday: 8:00 AM – 4:00 PM</p>,
    },
  ];

  return (
    <div>
      <section className="bg-muted pt-28 md:pt-36 pb-16 md:pb-20 relative overflow-hidden">
        <motion.div className="absolute -top-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="container max-w-3xl relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary tracking-tight text-balance mb-6">Contact Us</h1>
            <p className="text-foreground/70 leading-relaxed text-pretty text-lg">
              We'd love to hear from you. Reach out for admissions, inquiries, or feedback.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl">
          {/* Info */}
          <div>
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="p-3 rounded-2xl bg-primary/10 shrink-0 mt-1 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary mb-1">{item.title}</h3>
                    {item.content}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="rounded-xl overflow-hidden shadow-elegant mt-8 aspect-video"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
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

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">Send us a Message</h2>
            {submitted ? (
              <motion.div
                className="bg-secondary rounded-xl p-12 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={48} className="text-accent mx-auto mb-4" />
                <p className="font-heading font-semibold text-primary text-lg">Thank you!</p>
                <p className="text-sm text-muted-foreground mt-1">We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: "name", label: "Full Name", type: "text", required: true },
                  { id: "email", label: "Email", type: "email", required: true },
                  { id: "phone", label: "Phone", type: "tel", required: false },
                ].map((field) => (
                  <motion.div key={field.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-foreground/80 mb-1.5">{field.label}</label>
                    <input
                      id={field.id}
                      type={field.type}
                      required={field.required}
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      onFocus={() => setFocused(field.id)}
                      onBlur={() => setFocused(null)}
                      className={inputClass(field.id)}
                    />
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1.5">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className={`${inputClass("message")} resize-none`}
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 inline-flex items-center justify-center gap-2 group"
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
