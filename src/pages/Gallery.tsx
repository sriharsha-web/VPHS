import { motion, AnimatePresence } from "framer-motion";
import { FolderHeart, Image as ImageIcon } from "lucide-react";
import { useDataStore } from "@/store/dataStore";

const Gallery = () => {
  const store = useDataStore();

  return (
    <div>
      <section className="bg-muted pt-28 md:pt-36 pb-16 md:pb-20 relative overflow-hidden">
        <motion.div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="container relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary tracking-tight text-balance mb-6">Our Gallery</h1>
            <p className="text-foreground/70 leading-relaxed text-pretty text-lg">
              A glimpse into the vibrant life at Vignan Public High School.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container py-16 md:py-24 min-h-[400px]">
        {store.gallery.length === 0 ? (
          <div className="text-center py-24 bg-card rounded-3xl border border-primary/5 shadow-sm">
            <div className="w-20 h-20 bg-primary/5 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <ImageIcon size={32} />
            </div>
            <h3 className="font-heading font-bold text-2xl text-primary mb-3">No Photos Yet</h3>
            <p className="text-muted-foreground max-w-sm mx-auto">Check back later for photos of our school events and activities.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {store.gallery.map((photo, i) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="break-inside-avoid relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white font-bold font-heading text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {photo.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;
