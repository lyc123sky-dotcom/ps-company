import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "피에스컴퍼니 | PS COMPANY",
  description: "크리에이터가 마음껏 꿈꾸는 곳, 피에스컴퍼니. 유튜브·치지직·SOOP·틱톡 BJ를 위한 전문 매니지먼트.",
  keywords: ["MCN", "BJ", "크리에이터", "인터넷방송", "피에스컴퍼니"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster
          position="top-center"
          theme="dark"
          richColors
          closeButton
          toastOptions={{
            style: {
              background: "#1a1a1a",
              border: "1px solid rgba(255, 20, 147, 0.3)",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
