import type { Metadata } from "next";
import "./globals.css";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Restaurant Name | Order Online",
  description: "Dine-in, takeaway, or home delivery — order straight to WhatsApp.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body 
        className="bg-cream text-charcoal min-h-screen flex flex-col"
        suppressHydrationWarning 
      >
        {children}
      </body>
    </html>
  );
}
// }
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="bg-cream text-charcoal min-h-screen flex flex-col">
//         <Navbar />
//         <main className="flex-1">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
