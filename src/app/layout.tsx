
import "./globals.css";
import { ReactNode } from "react";




type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (


  <html lang="fa">
       <body>

           <div>
     
          <main>{children}</main>
      
          </div>
        
      </body>
  </html>
  );
}