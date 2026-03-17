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
      admissions: [],
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

      enquiries: [],
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

      gallery: [], // flushed dummy data
      addGalleryPhoto: (photo) => set((state) => ({
        gallery: [{ ...photo, id: crypto.randomUUID() }, ...state.gallery]
      })),
      deleteGalleryPhoto: (id) => set((state) => ({
        gallery: state.gallery.filter(g => g.id !== id)
      })),

      faculty: [], // flushed dummy data
      addFaculty: (faculty) => set((state) => ({
        faculty: [{ ...faculty, id: crypto.randomUUID() }, ...state.faculty]
      })),
      deleteFaculty: (id) => set((state) => ({
        faculty: state.faculty.filter(f => f.id !== id)
      })),

      testimonials: [], // flushed dummy data
      addTestimonial: (test) => set((state) => ({
        testimonials: [{ ...test, id: crypto.randomUUID() }, ...state.testimonials]
      })),
      deleteTestimonial: (id) => set((state) => ({
        testimonials: state.testimonials.filter(t => t.id !== id)
      })),
    }),
    {
      name: 'vphs-data-store',
    }
  )
);
