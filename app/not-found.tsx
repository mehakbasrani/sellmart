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
      <div className="flex justify-center mt-5 text-2xl font-medium">
        Page you are looking for is not here.
      </div>
      <div
        onClick={() => router.push("/")}
        className="flex justify-center mt-5 hover:cursor-pointer hover:underline"
      >
        <ArrowLeftIcon /> Go back to Home
      </div>
    </main>
  );
}
