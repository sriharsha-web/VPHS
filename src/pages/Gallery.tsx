import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Image as ImageIcon, Folder, ArrowLeft } from "lucide-react";

// The folders
const folders = [
  { id: 'f1', name: "Annual Day 2024", date: "March 2024", count: 4, cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600" },
  { id: 'f2', name: "Science Fair & Tech", date: "Feb 2024", count: 3, cover: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600" },
  { id: 'f3', name: "Sports Meet 2024", date: "Jan 2024", count: 3, cover: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=600" },
  { id: 'f4', name: "Cultural Events", date: "Oct 2023", count: 3, cover: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80&w=600" },
  { id: 'f5', name: "Campus & Labs", date: "Ongoing", count: 4, cover: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600" },
];

// The pictures belonging to those folders
const galleryItems = [
  // Folder 1
  { id: 1, folderId: 'f1', title: "Stage Performance", type: "image" as const, url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800" },
  { id: 2, folderId: 'f1', title: "Prize Distribution", type: "image" as const, url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" },
  { id: 3, folderId: 'f1', title: "Chief Guest Speech", type: "image" as const, url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" },
  { id: 4, folderId: 'f1', title: "Dance Highlights", type: "video" as const, url: "", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  // Folder 2
  { id: 5, folderId: 'f2', title: "Robotics Demo", type: "image" as const, url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800" },
  { id: 6, folderId: 'f2', title: "Chemistry Setup", type: "image" as const, url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800" },
  { id: 7, folderId: 'f2', title: "Computer Lab", type: "image" as const, url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800" },
  // Folder 3
  { id: 8, folderId: 'f3', title: "100m Sprint", type: "image" as const, url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800" },
  { id: 9, folderId: 'f3', title: "Football Finals", type: "image" as const, url: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800" },
  { id: 10, folderId: 'f3', title: "Medal Ceremony", type: "image" as const, url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800" },
  // Folder 4
  { id: 11, folderId: 'f4', title: "Art Exhibition", type: "image" as const, url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" },
  { id: 12, folderId: 'f4', title: "Diwali Celebration", type: "image" as const, url: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80&w=800" },
  { id: 13, folderId: 'f4', title: "Music Band", type: "image" as const, url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800" },
  // Folder 5
  { id: 14, folderId: 'f5', title: "Library Reading", type: "image" as const, url: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800" },
  { id: 15, folderId: 'f5', title: "Workshop Tools", type: "image" as const, url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
  { id: 16, folderId: 'f5', title: "School Building", type: "image" as const, url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" },
  { id: 17, folderId: 'f5', title: "Classroom Layout", type: "image" as const, url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" },
];

const Gallery = () => {
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const activeFolder = folders.find(f => f.id === selectedFolderId);
  const activePhotos = galleryItems.filter(i => i.folderId === selectedFolderId);

  return (
    <div>
      {/* Hero */}
      <section className="bg-muted pt-28 md:pt-36 pb-16 relative overflow-hidden">
        <motion.div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container max-w-5xl relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary tracking-tight text-balance mb-4">Gallery</h1>
            <p className="text-foreground/70 leading-relaxed text-lg max-w-2xl">
              Memories, events, and a glimpse into everyday life at Vignan Public High School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Folders / Photos View */}
      <section className="container py-16 md:py-24 min-h-[60vh] max-w-6xl">
        <AnimatePresence mode="wait">
          {!selectedFolderId ? (
            <motion.div
              key="folders-view"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-heading font-bold text-foreground">Albums & Events</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {folders.map(folder => (
                  <motion.div
                    key={folder.id}
                    className="group cursor-pointer flex flex-col items-center text-center bg-card rounded-2xl p-4 border border-primary/5 hover:border-primary/20 hover:shadow-elegant transition-all duration-300"
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedFolderId(folder.id)}
                  >
                    <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 relative bg-muted flex items-center justify-center">
                      <img src={folder.cover} alt={folder.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-primary/20 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                      {/* Folder Icon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                           <Folder className="text-primary z-10" fill="currentColor" fillOpacity={0.2} />
                         </div>
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-foreground/90 group-hover:text-primary transition-colors">{folder.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{folder.count} items &bull; {folder.date}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="photos-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <button
                    onClick={() => setSelectedFolderId(null)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-3 group"
                  >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Albums
                  </button>
                  <h2 className="text-3xl font-heading font-bold text-primary">{activeFolder?.name}</h2>
                  <p className="text-sm text-foreground/70 mt-1">{activeFolder?.date}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {activePhotos.map((item) => (
                  <motion.div
                    key={item.id}
                    layoutId={`gallery-item-${item.id}`}
                    className="group cursor-pointer"
                    onClick={() => setLightbox(item.id)}
                  >
                    <div className="aspect-[4/3] bg-secondary rounded-xl overflow-hidden shadow-sm relative border border-primary/5 group-hover:shadow-lg transition-all duration-300">
                      {item.type === "video" ? (
                         <div className="w-full h-full relative">
                           {/* Using a placeholder if video has no URL overlay */}
                           <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-4 text-center text-primary/40 font-semibold">Video Placeholder</div>
                           <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                             <motion.div
                               className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm shadow-xl border border-white/20"
                               whileHover={{ scale: 1.15 }}
                             >
                               <Play size={24} className="text-white ml-1" fill="currentColor" />
                             </motion.div>
                           </div>
                         </div>
                      ) : (
                        <div className="w-full h-full relative">
                          <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-end">
                        <div className="w-full px-5 py-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          <p className="text-sm font-bold text-white">{item.title}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.button
              className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all z-[60]"
              onClick={() => setLightbox(null)}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>
            <motion.div
              layoutId={`gallery-item-${lightbox}`}
              className="bg-black rounded-xl overflow-hidden max-w-5xl w-full h-full max-h-[80vh] shadow-2xl relative flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const item = galleryItems.find((i) => i.id === lightbox);
                if (!item) return null;
                if (item.type === "video" && item.videoUrl) {
                  return (
                    <div className="w-full aspect-video">
                      <iframe src={item.videoUrl} className="w-full h-full" allowFullScreen title={item.title} />
                    </div>
                  );
                }
                return (
                  <div className="w-full h-full flex flex-col">
                    <div className="flex-1 w-full flex items-center justify-center p-4">
                      <img src={item.url} alt={item.title} className="max-w-full max-h-[70vh] object-contain rounded-lg" />
                    </div>
                    <div className="bg-gradient-to-t from-black via-black/80 to-transparent p-6 absolute bottom-0 left-0 w-full">
                       <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
