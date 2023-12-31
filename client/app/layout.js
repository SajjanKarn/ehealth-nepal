import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation.component";
import { AuthContextProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ehealth Nepal",
  description: "Powerful digital health assistant.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
