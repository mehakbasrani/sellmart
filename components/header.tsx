"use client";

import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Header() {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  return (
    <div className="flex max-w-6xl mx-auto">
      {/* Right Side */}
      <div>
        <img src="/header1.png" alt="logo" className="hidden md:inline" />
      </div>

      {/* Middle */}
      <div className="mx-auto md:my-auto py-10 md:py-0 w-[90%] md:w-[55%] text-center">
        <div className="mb-10 text-white">
          Find anything in{" "}
          <span className="bg-black text-white p-1 rounded-md">
            <LocationOnIcon /> All India
          </span>
        </div>

        <form action={`/search/${search}`}>
          <div className="flex bg-white p-2 rounded-sm mx-auto w-full">
            <input
              type="text"
              placeholder="I am looking for..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="flex-1 bg-transparent outline-none"
            />
            <SearchIcon />
          </div>
        </form>
      </div>

      {/* Left Side */}
      <div>
        <img src="/header2.png" alt="logo" className="hidden md:inline" />
      </div>
    </div>
  );
}

export default Header;
