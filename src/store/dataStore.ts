import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Admission {
  id: string;
  date: string;
  studentName: string;
  grade: string;
  parentName: string;
  contact: string;
  status: 'Pending' | 'Reviewed' | 'Admitted';
}

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  date: string;
  read: boolean;
}

export interface GalleryFolder {
  id: string;
  title: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  folderId?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  department: string;
  role: string;
  experience: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
}

interface DataStore {
  admissions: Admission[];
  addAdmission: (req: Omit<Admission, 'id' | 'date' | 'status'>) => void;
  updateAdmissionStatus: (id: string, status: Admission['status']) => void;
  deleteAdmission: (id: string) => void;

  enquiries: Enquiry[];
  addEnquiry: (req: Omit<Enquiry, 'id' | 'date' | 'read'>) => void;
  markEnquiryRead: (id: string) => void;
  deleteEnquiry: (id: string) => void;

  galleryFolders: GalleryFolder[];
  addGalleryFolder: (title: string) => void;
  deleteGalleryFolder: (id: string) => void;

  gallery: GalleryPhoto[];
  addGalleryPhoto: (photo: Omit<GalleryPhoto, 'id'>) => void;
  deleteGalleryPhoto: (id: string) => void;

  faculty: FacultyMember[];
  addFaculty: (faculty: Omit<FacultyMember, 'id'>) => void;
  deleteFaculty: (id: string) => void;

  testimonials: Testimonial[];
  addTestimonial: (test: Omit<Testimonial, 'id'>) => void;
  deleteTestimonial: (id: string) => void;
}

export const useDataStore = create<DataStore>()(
  persist(
    (set) => ({
      admissions: [
        { id: crypto.randomUUID(), date: "3/15/2026", studentName: "Rahul Sharma", grade: "Class 6", parentName: "Ramesh S", contact: "9988776655", status: "Pending" },
        { id: crypto.randomUUID(), date: "3/16/2026", studentName: "Sneha P", grade: "LKG", parentName: "Priya P", contact: "8899001122", status: "Reviewed" },
        { id: crypto.randomUUID(), date: "3/17/2026", studentName: "Ananya V", grade: "UKG", parentName: "Vikram V", contact: "9900887766", status: "Admitted" }
      ],
      addAdmission: (req) => set((state) => ({
        admissions: [{
          ...req,
          id: crypto.randomUUID(),
          date: new Date().toLocaleDateString(),
          status: 'Pending'
        }, ...state.admissions]
      })),
      updateAdmissionStatus: (id, status) => set((state) => ({
        admissions: state.admissions.map(a => a.id === id ? { ...a, status } : a)
      })),
      deleteAdmission: (id) => set((state) => ({
        admissions: state.admissions.filter(a => a.id !== id)
      })),

      enquiries: [
        { id: crypto.randomUUID(), name: "John Doe", email: "john@example.com", message: "When do the admissions for LKG start?", date: "3/16/2026", phone: "9876543210", read: false },
        { id: crypto.randomUUID(), name: "Sita R", email: "sita@gmail.com", message: "I wanted to inquire about the school bus routes for Chamundi Nagar.", date: "3/17/2026", read: true }
      ],
      addEnquiry: (req) => set((state) => ({
        enquiries: [{
          ...req,
          id: crypto.randomUUID(),
          date: new Date().toLocaleDateString(),
          read: false
        }, ...state.enquiries]
      })),
      markEnquiryRead: (id) => set((state) => ({
        enquiries: state.enquiries.map(e => e.id === id ? { ...e, read: true } : e)
      })),
      deleteEnquiry: (id) => set((state) => ({
        enquiries: state.enquiries.filter(e => e.id !== id)
      })),

      galleryFolders: [
        { id: "folder-1", title: "Geniusphere" },
        { id: "folder-2", title: "Christmas Celebration" },
        { id: "folder-3", title: "Independence Day" },
        { id: "folder-4", title: "Sankranti Celebration" },
        { id: "folder-5", title: "School Trip" },
        { id: "folder-6", title: "Science Exhibition" },
        { id: "folder-7", title: "Annual Day" },
        { id: "folder-8", title: "Sports Day" },
        { id: "folder-9", title: "Diwali Celebrations" },
        { id: "folder-10", title: "Kannada Rajostava" },
        { id: "folder-11", title: "Prathiba Karanji" },
        { id: "folder-12", title: "Red Day" },
        { id: "folder-13", title: "Yoga" },
        { id: "folder-14", title: "Abacus" }
      ],
      addGalleryFolder: (title) => set((state) => ({
        galleryFolders: [{ id: crypto.randomUUID(), title }, ...state.galleryFolders]
      })),
      deleteGalleryFolder: (id) => set((state) => ({
        galleryFolders: state.galleryFolders.filter(f => f.id !== id),
        gallery: state.gallery.filter(g => g.folderId !== id) // Cascade delete
      })),

      gallery: [
        // Geniusphere Photos
        { id: crypto.randomUUID(), title: "Code Club Launch", url: encodeURI("/gallery/Geniusphere/🚀 Code Club by Raspberry Pi is officially launched at Vignan Public High School!A new space wh.webp"), folderId: "folder-1" },
        { id: crypto.randomUUID(), title: "English Communication Session 1", url: encodeURI("/gallery/Geniusphere/🚀 Exciting Announcement! 🏫 Geniusphere is bringing an amazing English communication session t.jpg"), folderId: "folder-1" },
        { id: crypto.randomUUID(), title: "English Communication Session 2", url: encodeURI("/gallery/Geniusphere/🚀 Exciting Announcement! 🏫 Geniusphere is bringing an amazing English communication session t.heic"), folderId: "folder-1" },
        { id: crypto.randomUUID(), title: "English Communication Session 3", url: encodeURI("/gallery/Geniusphere/🚀 Exciting Announcement! 🏫 Geniusphere is bringing an amazing English communication session t (1).heic"), folderId: "folder-1" },
        
        // Christmas Photos
        { id: crypto.randomUUID(), title: "Christmas Celebration 1", url: encodeURI("/gallery/christmas/WhatsApp Image 2026-03-14 at 9.51.03 AM.jpeg"), folderId: "folder-2" },
        { id: crypto.randomUUID(), title: "Christmas Celebration 2", url: encodeURI("/gallery/christmas/WhatsApp Image 2026-03-14 at 9.51.05 AM (3).jpeg"), folderId: "folder-2" },
        { id: crypto.randomUUID(), title: "Christmas Celebration 3", url: encodeURI("/gallery/christmas/WhatsApp Image 2026-03-14 at 9.51.08 AM (1).jpeg"), folderId: "folder-2" },
        
        // Independence Day Photos
        { id: crypto.randomUUID(), title: "Independence Day Celebration 1", url: encodeURI("/gallery/independence day/From conducting Geniusphere sessions to being invited as a guest for Independence Day at Vignan .jpg"), folderId: "folder-3" },
        { id: crypto.randomUUID(), title: "Independence Day Celebration 2", url: encodeURI("/gallery/independence day/From conducting Geniusphere sessions to being invited as a guest for Independence Day at Vignan.heic"), folderId: "folder-3" },
        { id: crypto.randomUUID(), title: "Independence Day Celebration 3", url: encodeURI("/gallery/independence day/From conducting Geniusphere sessions to being invited as a guest for Independence Day at Vignan (1).heic"), folderId: "folder-3" },
        { id: crypto.randomUUID(), title: "Independence Day Celebration 4", url: encodeURI("/gallery/independence day/WhatsApp Image 2026-03-14 at 9.50.47 AM.jpeg"), folderId: "folder-3" },
        { id: crypto.randomUUID(), title: "Independence Day Celebration 5", url: encodeURI("/gallery/independence day/WhatsApp Image 2026-03-14 at 9.50.48 AM.jpeg"), folderId: "folder-3" },
        { id: crypto.randomUUID(), title: "Independence Day Celebration 6", url: encodeURI("/gallery/independence day/WhatsApp Image 2026-03-14 at 9.50.54 AM (1).jpeg"), folderId: "folder-3" },
        
        // Sankranti Photos
        { id: crypto.randomUUID(), title: "Sankranti Celebration 1", url: encodeURI("/gallery/sankrathi celebaration/WhatsApp Image 2026-03-14 at 9.50.48 AM (1).jpeg"), folderId: "folder-4" },
        { id: crypto.randomUUID(), title: "Sankranti Celebration 2", url: encodeURI("/gallery/sankrathi celebaration/WhatsApp Image 2026-03-14 at 9.50.48 AM (2).jpeg"), folderId: "folder-4" },
        { id: crypto.randomUUID(), title: "Sankranti Celebration 3", url: encodeURI("/gallery/sankrathi celebaration/WhatsApp Image 2026-03-14 at 9.50.54 AM.jpeg"), folderId: "folder-4" },
        { id: crypto.randomUUID(), title: "Sankranti Celebration 4", url: encodeURI("/gallery/sankrathi celebaration/WhatsApp Image 2026-03-14 at 9.50.57 AM.jpeg"), folderId: "folder-4" },
        { id: crypto.randomUUID(), title: "Sankranti Celebration 5", url: encodeURI("/gallery/sankrathi celebaration/WhatsApp Image 2026-03-14 at 9.51.03 AM (2).jpeg"), folderId: "folder-4" },
        { id: crypto.randomUUID(), title: "Sankranti Celebration 6", url: encodeURI("/gallery/sankrathi celebaration/WhatsApp Image 2026-03-14 at 9.51.12 AM (1).jpeg"), folderId: "folder-4" },
        
        // Trip Photos
        { id: crypto.randomUUID(), title: "School Trip 1", url: encodeURI("/gallery/trip/WhatsApp Image 2026-03-14 at 9.51.04 AM.jpeg"), folderId: "folder-5" },
        { id: crypto.randomUUID(), title: "School Trip 2", url: encodeURI("/gallery/trip/WhatsApp Image 2026-03-14 at 9.51.04 AM (1).jpeg"), folderId: "folder-5" },
        { id: crypto.randomUUID(), title: "School Trip 3", url: encodeURI("/gallery/trip/WhatsApp Image 2026-03-14 at 9.51.04 AM (3).jpeg"), folderId: "folder-5" },
        { id: crypto.randomUUID(), title: "School Trip 4", url: encodeURI("/gallery/trip/WhatsApp Image 2026-03-14 at 9.51.05 AM.jpeg"), folderId: "folder-5" },
        { id: crypto.randomUUID(), title: "School Trip 5", url: encodeURI("/gallery/trip/WhatsApp Image 2026-03-14 at 9.51.05 AM (1).jpeg"), folderId: "folder-5" },
        { id: crypto.randomUUID(), title: "School Trip 6", url: encodeURI("/gallery/trip/WhatsApp Image 2026-03-14 at 9.51.06 AM (1).jpeg"), folderId: "folder-5" },
        { id: crypto.randomUUID(), title: "School Trip 7", url: encodeURI("/gallery/trip/WhatsApp Image 2026-03-14 at 9.51.06 AM (2).jpeg"), folderId: "folder-5" },
        { id: crypto.randomUUID(), title: "School Trip 8", url: encodeURI("/gallery/trip/WhatsApp Image 2026-03-14 at 9.51.07 AM.jpeg"), folderId: "folder-5" },
        { id: crypto.randomUUID(), title: "School Trip 9", url: encodeURI("/gallery/trip/WhatsApp Image 2026-03-14 at 9.51.07 AM (1).jpeg"), folderId: "folder-5" },
        
        // Science Exhibition Photos
        { id: crypto.randomUUID(), title: "Science Exhibition 1", url: encodeURI("/gallery/science exhibiton/WhatsApp Image 2026-03-14 at 9.50.49 AM.jpeg"), folderId: "folder-6" },
        { id: crypto.randomUUID(), title: "Science Exhibition 2", url: encodeURI("/gallery/science exhibiton/WhatsApp Image 2026-03-14 at 9.50.49 AM (1).jpeg"), folderId: "folder-6" },
        { id: crypto.randomUUID(), title: "Science Exhibition 3", url: encodeURI("/gallery/science exhibiton/WhatsApp Image 2026-03-14 at 9.50.49 AM (2).jpeg"), folderId: "folder-6" },
        { id: crypto.randomUUID(), title: "Science Exhibition 4", url: encodeURI("/gallery/science exhibiton/WhatsApp Image 2026-03-14 at 9.50.53 AM (2).jpeg"), folderId: "folder-6" },
        { id: crypto.randomUUID(), title: "Science Exhibition 5", url: encodeURI("/gallery/science exhibiton/WhatsApp Image 2026-03-14 at 9.50.57 AM (3).jpeg"), folderId: "folder-6" }
      ],
      addGalleryPhoto: (photo) => set((state) => ({
        gallery: [{ ...photo, id: crypto.randomUUID() }, ...state.gallery]
      })),
      deleteGalleryPhoto: (id) => set((state) => ({
        gallery: state.gallery.filter(g => g.id !== id)
      })),

      faculty: [
        { id: crypto.randomUUID(), name: "Amar Narayan", department: "Administration", role: "Principal", experience: "20+ Years" },
        { id: crypto.randomUUID(), name: "Dr. Suresh K", department: "Sciences", role: "HOD Science", experience: "15 Years" },
        { id: crypto.randomUUID(), name: "Meera Reddy", department: "Mathematics", role: "Senior Teacher", experience: "12 Years" }
      ],
      addFaculty: (faculty) => set((state) => ({
        faculty: [{ ...faculty, id: crypto.randomUUID() }, ...state.faculty]
      })),
      deleteFaculty: (id) => set((state) => ({
        faculty: state.faculty.filter(f => f.id !== id)
      })),

      testimonials: [
        { id: crypto.randomUUID(), name: "Suresh P.", role: "Parent (Class 8)", text: "The Geniusphere program has transformed how my son looks at math and finance. Highly recommended!" },
        { id: crypto.randomUUID(), name: "Kavitha M.", role: "Parent (Class 5)", text: "Vignan provides a perfectly balanced curriculum. The faculty is very approachable and caring." },
        { id: crypto.randomUUID(), name: "Rahul S.", role: "Alumnus", text: "My years at Vignan gave me the foundation I needed for my engineering career." }
      ],
      addTestimonial: (test) => set((state) => ({
        testimonials: [{ ...test, id: crypto.randomUUID() }, ...state.testimonials]
      })),
      deleteTestimonial: (id) => set((state) => ({
        testimonials: state.testimonials.filter(t => t.id !== id)
      })),
    }),
    {
      name: 'vphs-data-store-v3', // Changed version to clear out old empty states
    }
  )
);
