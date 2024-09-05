"use client";

import { signOut, signIn } from "next-auth/react";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ViewListIcon from "@mui/icons-material/ViewList";

import { useRouter, redirect, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const router = useRouter();

  const pathname = usePathname();

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=4{pathname}");
    },
  });

  // console.log(session);

  return (
    <div className="flex py-1 space-x-3 mx-auto max-w-6xl">
      <div className="flex-1 mx-auto">
       
        <div className="w-20 shadow-xl rounded-lg">
          <p
            onClick={() => router.push("/")}
            className="text-lg font-medium text-white p-1 hover:cursor-pointer"
          >
            SellMart
          </p>
        </div>
      </div>

      <div
        className="p-[5px] rounded-full bg-white tooltip tooltip-bottom hover:cursor-pointer"
        data-tip="Bookmark"
        onClick={() => router.push(`/bookmark/${session?.user?.email}`)}
      >
        <BookmarkIcon />
      </div>
      <div
        className="p-[5px] rounded-full bg-white tooltip tooltip-bottom hover:cursor-pointer"
        data-tip="Messages"
      >
        <MessageIcon />
      </div>

      <div
        className="p-[5px] rounded-full bg-white tooltip tooltip-bottom hover:cursor-pointer"
        data-tip="Notifications"
      >
        <NotificationsIcon />
      </div>

      <div
        className="p-[5px] rounded-full bg-white tooltip tooltip-bottom hover:cursor-pointer"
        data-tip="My Adverts"
        onClick={() => router.push(`/myadverts/${session?.user?.email}`)}
      >
        <ViewListIcon />
      </div>

      <div className="dropdown dropdown-hover my-auto dropdown-bottom dropdown-end">
        <img
          src={session?.user?.image || "/logo2.png"}
          className="rounded-full w-8"
          alt="logo"
        />
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu shadow bg-base-100 rounded-sm w-40"
        >
          <li>
            <a>My Shop</a>
          </li>
          <li>
            <a>My clients</a>
          </li>
          <li>
            <a>Feedback</a>
          </li>
          <li>
            <a>Performance</a>
          </li>
          <li className="">
            <a>My Balance</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          {/* <li>
            {session.data && <button onClick={() => signOut()}>Log out</button>}
            {!session.data && <button onClick={() => signIn()}>Sign In</button>}
          </li> */}
          <li>
            <button onClick={() => signOut()}>Log Out </button>
          </li>
        </ul>
      </div>

      <button
        onClick={() => router.push("/create")}
        className="btn btn-warning btn-sm my-auto mr-10"
      >
        SELL
      </button>
    </div>
  );
}
