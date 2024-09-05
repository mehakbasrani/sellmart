"use client";

import Header from "@/components/header";
import { useRouter } from "next/navigation";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

export default function NotFound() {
  const router = useRouter();

  return (
    <main>
      <div className="bg-gradient-to-r from-green-500 to-green-700">
        <Header />
      </div>
      <div className="flex justify-center items-center mt-5 text-2xl font-medium">
        No Product in this category. Click to add the first product in this
        category.
      </div>
      <div className="w-[200px] h-[200px] m-auto mt-5">
        <img
          src="/ad.png"
          alt="ad"
          className="hover:cursor-pointer"
          onClick={() => router.push("/create")}
        />
      </div>

      <div
        onClick={() => router.push("/")}
        className="flex justify-center items-center mt-5 hover:cursor-pointer hover:underline"
      >
        <ArrowLeftIcon /> Go back to Home
      </div>
    </main>
  );
}
