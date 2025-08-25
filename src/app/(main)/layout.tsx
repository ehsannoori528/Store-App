// app/(main)/layout.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-200">
    
      <Header />
     
      <Navbar />
      <main className="flex-grow">{children}</main>
      
      <Footer />
    </div>
  );
}