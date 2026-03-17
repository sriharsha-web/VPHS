import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, Image as ImageIcon, MessageSquare, FileText, 
  Settings, LogOut, CheckCircle, Search, Plus, Trash2, Edit 
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

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
    { id: "testimonials", label: "Testimonials", icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col md:flex-row">
      {/* Sidebar */}
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

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-background overflow-hidden relative min-h-screen">
        
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 bg-card border-b border-primary/5 sticky top-0 z-50">
           <h2 className="font-heading font-bold text-lg">Admin / {tabs.find(t=>t.id===activeTab)?.label}</h2>
           <button onClick={handleLogout} className="p-2 bg-red-50 text-red-500 rounded-lg"><LogOut size={18}/></button>
        </div>

        {/* Mobile Tabs */}
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <h1 className="text-3xl font-heading font-bold text-foreground">Dashboard Overview</h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard title="New Admissions" count="12" icon={FileText} trend="+2 this week" />
                    <StatCard title="Unread Messages" count="34" icon={MessageSquare} trend="3 today" />
                    <StatCard title="Gallery Photos" count="124" icon={ImageIcon} />
                    <StatCard title="Active Faculty" count="48" icon={Users} />
                  </div>
                </div>
              )}

              {activeTab === 'admissions' && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <h1 className="text-3xl font-heading font-bold text-foreground">Admission Applications</h1>
                    <div className="flex bg-card border border-primary/10 rounded-xl px-4 py-2 w-full sm:w-80 focus-within:ring-2 focus-within:ring-primary/20">
                      <Search className="text-muted-foreground mr-2" size={20} />
                      <input type="text" placeholder="Search applications..." className="bg-transparent border-none outline-none w-full text-sm font-medium" />
                    </div>
                  </div>
                  <div className="bg-card rounded-2xl border border-primary/10 shadow-sm overflow-hidden">
                    <Table 
                      headers={["Date", "Student Name", "Grade", "Parent Name", "Contact", "Status"]}
                      rows={[
                        ["Today", "Rahul Sharma", "Class 6", "Ramesh S", "9988776655", "Pending"],
                        ["Yesterday", "Sneha P", "LKG", "Priya P", "8899001122", "Reviewed"],
                        ["Mar 10", "Karthik R", "Class 9", "Rajesh R", "7766554433", "Pending"],
                        ["Mar 08", "Ananya V", "UKG", "Vikram V", "9900887766", "Admitted"],
                      ]}
                    />
                  </div>
                </div>
              )}

              {activeTab === 'messages' && (
                <div className="space-y-6">
                  <h1 className="text-3xl font-heading font-bold text-foreground">Contact Enquiries</h1>
                  <div className="grid gap-4">
                    {[
                      { name: "John Doe", email: "john@example.com", msg: "When do the admissions for LKG start? We recently moved to Laggere.", time: "2 hours ago" },
                      { name: "Sita R", email: "sita@gmail.com", msg: "I wanted to inquire about the school bus routes for Chamundi Nagar.", time: "5 hours ago" },
                      { name: "Vikas M", email: "vikas.m@yahoo.com", msg: "Can we visit the Geniusphere facility during weekend?", time: "1 day ago" },
                    ].map((msg, i) => (
                      <div key={i} className="bg-card rounded-2xl border border-primary/10 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-foreground">{msg.name}</h3>
                            <p className="text-xs text-muted-foreground">{msg.email}</p>
                          </div>
                          <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-md">{msg.time}</span>
                        </div>
                        <p className="text-sm text-foreground/80 mt-3 p-4 bg-muted/50 rounded-xl">"{msg.msg}"</p>
                        <div className="mt-4 flex gap-2">
                          <button className="text-xs font-bold text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary/90">Reply via Email</button>
                          <button className="text-xs font-bold text-muted-foreground bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/80">Mark Read</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'gallery' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-heading font-bold text-foreground">Manage Gallery</h1>
                    <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-xl font-bold text-sm shadow-md hover:-translate-y-0.5 transition-all">
                      <Plus size={16} /> Upload Photo
                    </button>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                       "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400",
                       "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400",
                       "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400",
                       "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400",
                       "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400"
                    ].map((img, i) => (
                      <div key={i} className="aspect-square bg-muted rounded-xl relative group overflow-hidden border border-primary/10 shadow-sm">
                        <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                           <button className="w-10 h-10 bg-white/20 hover:bg-red-500 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-colors shadow-lg"><Trash2 size={16}/></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'faculty' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-heading font-bold text-foreground">Faculty Directory</h1>
                    <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-xl font-bold text-sm shadow-md hover:-translate-y-0.5 transition-all">
                      <Plus size={16} /> Add Faculty
                    </button>
                  </div>
                  <div className="bg-card rounded-2xl border border-primary/10 shadow-sm overflow-hidden">
                    <Table 
                      headers={["Name", "Department", "Role", "Experience", "Actions"]}
                      rows={[
                        ["Amar Narayan", "Administration", "Principal", "20+ Years", "edit"],
                        ["Dr. Suresh K", "Sciences", "HOD Science", "15 Years", "edit"],
                        ["Meera Reddy", "Mathematics", "Senior Teacher", "12 Years", "edit"],
                        ["Priya S", "English", "Teacher", "8 Years", "edit"],
                      ]}
                    />
                  </div>
                </div>
              )}

              {activeTab === 'testimonials' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-heading font-bold text-foreground">Testimonials</h1>
                    <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-xl font-bold text-sm shadow-md hover:-translate-y-0.5 transition-all">
                      <Plus size={16} /> Add New
                    </button>
                  </div>
                  <div className="bg-card rounded-2xl border border-primary/10 shadow-sm overflow-hidden p-6 divide-y divide-primary/5">
                    {[
                       { n: "Suresh P.", r: "Parent (Class 8)", t: "The Geniusphere program has transformed how my son looks at math." },
                       { n: "Kavitha M.", r: "Parent (Class 5)", t: "Vignan provides a perfectly balanced curriculum." },
                       { n: "Rahul S.", r: "Alumnus", t: "My years at Vignan gave me the foundation I needed." }
                    ].map((item, i) => (
                      <div key={i} className="py-4 first:pt-0 last:pb-0 flex justify-between items-center group">
                        <div>
                          <p className="font-bold text-foreground">{item.n} <span className="font-normal text-xs text-muted-foreground ml-2">({item.r})</span></p>
                          <p className="text-sm text-foreground/80 mt-1 italic">"{item.t}"</p>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 bg-secondary rounded-lg text-secondary-foreground hover:bg-primary/20 hover:text-primary"><Edit size={16}/></button>
                          <button className="p-2 bg-red-50 rounded-lg text-red-500 hover:bg-red-500 hover:text-white"><Trash2 size={16}/></button>
                        </div>
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

// Helper Components
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

function Table({ headers, rows }: { headers: string[], rows: any[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead className="bg-primary/5 border-b border-primary/10">
          <tr>
            {headers.map((h, i) => <th key={i} className="px-6 py-4 font-bold text-foreground/80">{h}</th>)}
          </tr>
        </thead>
        <tbody className="divide-y divide-primary/5">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-primary/[0.02] transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-6 py-4 text-foreground/80 font-medium">
                  {cell === "edit" ? (
                     <div className="flex gap-2">
                       <button className="text-primary hover:underline px-2 py-1 bg-primary/10 rounded">Edit</button>
                       <button className="text-red-500 hover:underline px-2 py-1 bg-red-50 rounded">Del</button>
                     </div>
                  ) : cell === "Pending" ? (
                    <span className="px-2.5 py-1 bg-orange-100 text-orange-700 rounded-md text-xs font-bold">Pending</span>
                  ) : cell === "Admitted" ? (
                    <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-md text-xs font-bold">Admitted</span>
                  ) : cell === "Reviewed" ? (
                    <span className="px-2.5 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-bold">Reviewed</span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
