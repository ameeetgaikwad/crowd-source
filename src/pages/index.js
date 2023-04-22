import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/card";
const inter = Inter({ subsets: ["latin"] });
import About from "./about";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav></nav>
      <div className="flex flex-row">
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
