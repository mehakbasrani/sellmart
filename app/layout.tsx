import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import AuthProvider from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sell Mart",
  description: "Buy and sell goods online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="bg-[#00b53f] ">
            <NavBar />
          </div>

          {children}

          <div className="mt-5">
            <img
              src="https://assets.jiji.ng/static/img/footer-nigeria-new.svg"
              alt="city logo"
              className="mx-auto"
            />
          </div>

          <footer className="bg-white md:bg-[#00b53f]">
            <Footer />
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
