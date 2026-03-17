import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, Image as ImageIcon, MessageSquare, FileText, 
  Settings, LogOut, Search, Plus, Trash2, Edit 
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useDataStore } from "@/store/dataStore";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  const store = useDataStore();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "admin@123") {
      setIsAuthenticated(true);
      toast({ title: "Welcome back!", description: "Successfully logged into Admin Portal." });
    } else {
      toast({ title: "Access Denied", description: "Invalid username or password.", variant: "destructive" });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
    toast({ title: "Logged out", description: "You have been logged out securely." });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
        <motion.div 
          className="bg-card w-full max-w-md p-8 rounded-3xl shadow-2xl border border-primary/5 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        >
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <Settings className="text-primary-foreground" size={32} />
            </div>
            <h1 className="text-3xl font-heading font-bold text-foreground mb-2">Admin Portal</h1>
            <p className="text-muted-foreground text-sm mb-8">Sign in to manage Vignan Public High School.</p>
            
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Username</label>
                <input 
                  type="text" 
                  autoFocus
                  required
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="w-full px-5 py-3.5 bg-background border border-primary/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" 
                  placeholder="Enter username" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Password</label>
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full px-5 py-3.5 bg-background border border-primary/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" 
                  placeholder="Enter password" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3.5 bg-primary text-primary-foreground font-bold rounded-xl mt-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
              >
                Sign In
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: Settings },
    { id: "admissions", label: "Admissions", icon: FileText },
    { id: "messages", label: "Enquiries", icon: MessageSquare },
    { id: "gallery", label: "Gallery", icon: ImageIcon },
    { id: "faculty", label: "Faculty", icon: Users },
    { id: "testimonials", label: "Testimonials", icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col md:flex-row">
      <div className="w-full md:w-64 bg-card border-r border-primary/5 flex flex-col shadow-sm hidden md:flex sticky top-0 h-screen">
        <div className="p-6 border-b border-primary/5">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md">
               <Settings className="text-primary-foreground" size={20} />
             </div>
             <div>
               <h2 className="font-heading font-bold text-foreground leading-tight">Admin Portal</h2>
               <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Vignan High School</p>
             </div>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium text-sm
                ${activeTab === tab.id 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }
              `}
            >
              <tab.icon size={18} /> {tab.label}
            </button>
          ))}
        </div>
        
        <div className="p-4 border-t border-primary/5">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors font-medium text-sm"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col min-w-0 bg-background overflow-hidden relative min-h-screen">
        <div className="md:hidden flex items-center justify-between p-4 bg-card border-b border-primary/5 sticky top-0 z-50">
           <h2 className="font-heading font-bold text-lg">Admin / {tabs.find(t=>t.id===activeTab)?.label}</h2>
           <button onClick={handleLogout} className="p-2 bg-red-50 text-red-500 rounded-lg"><LogOut size={18}/></button>
        </div>
        <div className="md:hidden flex overflow-x-auto p-4 gap-2 bg-muted/50 border-b border-primary/5 hide-scrollbar sticky top-[60px] z-40 bg-background/95 backdrop-blur-md pb-2">
          {tabs.map(tab => (
             <button
               key={tab.id}
               onClick={() => setActiveTab(tab.id)}
               className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === tab.id ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground border border-primary/10"}`}
             >
               {tab.label}
             </button>
          ))}
        </div>

        <main className="flex-1 overflow-y-auto p-6 lg:p-12 relative z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
            >
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <h1 className="text-3xl font-heading font-bold text-foreground">Dashboard Overview</h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard title="Total Admissions" count={store.admissions.length} icon={FileText} />
                    <StatCard title="Total Enquiries" count={store.enquiries.length} icon={MessageSquare} />
                    <StatCard title="Gallery Photos" count={store.gallery.length} icon={ImageIcon} />
                    <StatCard title="Active Faculty" count={store.faculty.length} icon={Users} />
                  </div>
                </div>
              )}

              {activeTab === 'admissions' && (
                <div className="space-y-6">
                  <h1 className="text-3xl font-heading font-bold text-foreground">Admission Applications</h1>
                  <div className="bg-card rounded-2xl border border-primary/10 shadow-sm overflow-hidden overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                      <thead className="bg-primary/5 border-b border-primary/10">
                        <tr>
                          {["Date", "Student Name", "Grade", "Parent Name", "Contact", "Status", "Actions"].map(h => <th key={h} className="px-6 py-4 font-bold text-foreground/80">{h}</th>)}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-primary/5">
                        {store.admissions.length === 0 && <tr><td colSpan={7} className="text-center py-6 text-muted-foreground">No applications found</td></tr>}
                        {store.admissions.map(a => (
                          <tr key={a.id} className="hover:bg-primary/[0.02]">
                            <td className="px-6 py-4">{a.date}</td>
                            <td className="px-6 py-4 font-medium">{a.studentName}</td>
                            <td className="px-6 py-4">{a.grade}</td>
                            <td className="px-6 py-4">{a.parentName}</td>
                            <td className="px-6 py-4">{a.contact}</td>
                            <td className="px-6 py-4">
                              <select 
                                value={a.status} 
                                onChange={(e) => store.updateAdmissionStatus(a.id, e.target.value as any)}
                                className={`px-2 py-1 rounded-md text-xs font-bold outline-none border-none
                                  ${a.status === 'Pending' ? 'bg-orange-100 text-orange-700' : a.status === 'Reviewed' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}
                                `}
                              >
                                <option value="Pending">Pending</option>
                                <option value="Reviewed">Reviewed</option>
                                <option value="Admitted">Admitted</option>
                              </select>
                            </td>
                            <td className="px-6 py-4">
                              <button onClick={() => { if(confirm('Delete admission?')) store.deleteAdmission(a.id); }} className="text-red-500 hover:underline px-2 py-1 bg-red-50 rounded">Delete</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'messages' && (
                <div className="space-y-6">
                  <h1 className="text-3xl font-heading font-bold text-foreground">Contact Enquiries</h1>
                  <div className="grid gap-4">
                    {store.enquiries.length === 0 && <p className="text-muted-foreground">No enquiries found</p>}
                    {store.enquiries.map((msg) => (
                      <div key={msg.id} className={`bg-card rounded-2xl border border-primary/10 p-6 shadow-sm relative group overflow-hidden ${msg.read ? 'opacity-70' : ''}`}>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-foreground">{msg.name}</h3>
                            <p className="text-xs text-muted-foreground">{msg.email}</p>
                          </div>
                          <span className="text-xs font-semibold">{msg.date}</span>
                        </div>
                        <p className="text-sm text-foreground/80 mt-3 p-4 bg-muted/50 rounded-xl">"{msg.message}"</p>
                        <div className="mt-4 flex gap-2">
                          {!msg.read && <button onClick={() => store.markEnquiryRead(msg.id)} className="text-xs font-bold text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary/90">Mark Read</button>}
                          <button onClick={() => { if(confirm('Delete enquiry?')) store.deleteEnquiry(msg.id); }} className="text-xs font-bold text-red-500 bg-red-50 px-4 py-2 rounded-lg hover:bg-red-100">Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'gallery' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center sm:items-start flex-col sm:flex-row gap-4">
                    <h1 className="text-3xl font-heading font-bold text-foreground">Manage Gallery</h1>
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        const fd = new FormData(e.currentTarget);
                        store.addGalleryPhoto({ title: fd.get('title') as string, url: fd.get('url') as string });
                        e.currentTarget.reset();
                        toast({ title: 'Photo added' });
                      }}
                      className="flex gap-2 w-full sm:w-auto flex-wrap"
                    >
                      <input required name="title" type="text" placeholder="Title" className="border px-3 py-2 rounded-lg text-sm flex-1 sm:w-32" />
                      <input required name="url" type="url" placeholder="Image URL" className="border px-3 py-2 rounded-lg text-sm flex-1 sm:w-48" />
                      <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex gap-2 items-center"><Plus size={16}/> Add Photo</button>
                    </form>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {store.gallery.length === 0 && <p className="text-muted-foreground col-span-2">No photos in gallery</p>}
                    {store.gallery.map((img) => (
                      <div key={img.id} className="aspect-square bg-muted rounded-xl relative group overflow-hidden border border-primary/10 shadow-sm">
                        <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">{img.title}</div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                           <button onClick={() => { if(confirm('Delete photo?')) store.deleteGalleryPhoto(img.id); }} className="w-10 h-10 bg-white/20 hover:bg-red-500 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-colors shadow-lg"><Trash2 size={16}/></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'faculty' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center flex-col sm:flex-row gap-4">
                    <h1 className="text-3xl font-heading font-bold text-foreground">Faculty Directory</h1>
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        const fd = new FormData(e.currentTarget);
                        store.addFaculty({ 
                          name: fd.get('name') as string, 
                          department: fd.get('dept') as string,
                          role: fd.get('role') as string,
                          experience: fd.get('exp') as string 
                        });
                        e.currentTarget.reset();
                        toast({ title: 'Faculty added' });
                      }}
                      className="flex gap-2 w-full sm:w-auto flex-wrap bg-card p-3 rounded-xl border"
                    >
                      <input required name="name" type="text" placeholder="Name" className="border px-2 py-1 rounded text-sm w-full sm:w-32" />
                      <input required name="dept" type="text" placeholder="Department" className="border px-2 py-1 rounded text-sm w-full sm:w-32" />
                      <input required name="role" type="text" placeholder="Role" className="border px-2 py-1 rounded text-sm w-full sm:w-24" />
                      <input required name="exp" type="text" placeholder="Experience" className="border px-2 py-1 rounded text-sm w-full sm:w-24" />
                      <button className="bg-primary text-white px-3 py-1 rounded text-sm font-bold w-full sm:w-auto"><Plus size={16} className="inline mr-1"/> Add</button>
                    </form>
                  </div>
                  <div className="bg-card rounded-2xl border border-primary/10 shadow-sm overflow-hidden overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                      <thead className="bg-primary/5 border-b border-primary/10">
                        <tr>
                          {["Name", "Department", "Role", "Experience", "Actions"].map(h => <th key={h} className="px-6 py-4 font-bold text-foreground/80">{h}</th>)}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-primary/5">
                        {store.faculty.length === 0 && <tr><td colSpan={5} className="text-center py-6 text-muted-foreground">No faculty members found</td></tr>}
                        {store.faculty.map(f => (
                          <tr key={f.id} className="hover:bg-primary/[0.02]">
                            <td className="px-6 py-4 font-medium">{f.name}</td>
                            <td className="px-6 py-4">{f.department}</td>
                            <td className="px-6 py-4">{f.role}</td>
                            <td className="px-6 py-4">{f.experience}</td>
                            <td className="px-6 py-4">
                              <button onClick={() => { if(confirm('Delete faculty?')) store.deleteFaculty(f.id); }} className="text-red-500 hover:underline px-2 py-1 bg-red-50 rounded">Delete</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'testimonials' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center flex-col sm:flex-row gap-4">
                    <h1 className="text-3xl font-heading font-bold text-foreground">Testimonials</h1>
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        const fd = new FormData(e.currentTarget);
                        store.addTestimonial({ 
                          name: fd.get('name') as string, 
                          role: fd.get('role') as string,
                          text: fd.get('text') as string 
                        });
                        e.currentTarget.reset();
                        toast({ title: 'Testimonial added' });
                      }}
                      className="flex gap-2 w-full sm:w-auto flex-wrap bg-card p-3 rounded-xl border flex-col sm:flex-row"
                    >
                      <input required name="name" type="text" placeholder="Parent Name" className="border px-3 py-2 rounded-lg text-sm w-full sm:w-auto" />
                      <input required name="role" type="text" placeholder="Role (e.g. Class 5 Parent)" className="border px-3 py-2 rounded-lg text-sm w-full sm:w-auto" />
                      <textarea required name="text" placeholder="Testimonial text..." className="border px-3 py-2 rounded-lg text-sm w-full sm:w-64 resize-none h-10" />
                      <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold w-full sm:w-auto h-10"><Plus size={16} className="inline mr-1"/> Add</button>
                    </form>
                  </div>
                  <div className="bg-card rounded-2xl border border-primary/10 shadow-sm overflow-hidden p-6 divide-y divide-primary/5">
                    {store.testimonials.length === 0 && <p className="text-muted-foreground text-center">No testimonials added</p>}
                    {store.testimonials.map((item) => (
                      <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex justify-between items-center group gap-4">
                        <div>
                          <p className="font-bold text-foreground">{item.name} <span className="font-normal text-xs text-muted-foreground ml-2">({item.role})</span></p>
                          <p className="text-sm text-foreground/80 mt-1 italic">"{item.text}"</p>
                        </div>
                        <button onClick={() => { if(confirm('Delete testimonial?')) store.deleteTestimonial(item.id); }} className="p-2 shrink-0 bg-red-50 rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition-colors"><Trash2 size={16}/></button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

function StatCard({ title, count, icon: Icon, trend }: any) {
  return (
    <div className="bg-card p-6 rounded-2xl border border-primary/5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors" />
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-primary/10 text-primary rounded-xl">
          <Icon size={24} />
        </div>
        {trend && <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-md">{trend}</span>}
      </div>
      <div>
        <p className="text-3xl font-heading font-black text-foreground mb-1">{count}</p>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
      </div>
    </div>
  );
}
