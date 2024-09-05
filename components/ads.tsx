"use client";

import { IconButton } from "@mui/material";
import { Rupees } from "@/lib/currency";
import { adData } from "@/lib/types";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import ChatForm from "./chatForm";
import ImageGallery from "./imageGallery";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CallIcon from "@mui/icons-material/Call";
import { addItemToWishlist } from "@/lib/wishlist";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

export default function Ads(ad: adData) {
  //  console.log(ad);
  
  const [showChat, setShowChat] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);


  const handleChatClick = () => {
    setShowChat(true);
  };

  const handleWishlist = async () => {
    setIsWishlisted(!isWishlisted);

    await addItemToWishlist(ad.userEmail, ad.id);
  };

  return (
    <>
      <div className="lg:flex m-10 lg:space-x-5">
        <div className="lg:flex-1 border-t-8 border-green-600 bg-white pb-10">
          <ImageGallery {...ad} />

          <div className="m-5">
            <p className="text-2xl font-bold">{ad.title}</p>
            <p className="text-green-600">
              {Rupees.format(ad.price)}
              {ad.negotiable && <span>,{"  "}Negotiable</span>}
            </p>

            <p className="my-5  text-gray-400">
              <LocationOnIcon /> {ad.location}
            </p>
            <p className="my-5 ">
              <CallIcon /> {ad.contactNumber}
            </p>

            <div className="divider"></div>

            <div>
              <p className="text-xl font-medium ">Specifications</p>
              <p className="my-2">{ad.description}</p>
            </div>
            <div className="divider"></div>

            <div className="flex space-x-5">
              {ad.imagesUrl.map((image: string, index: number) => (
                <span key={index}>
                  <img
                    src={image}
                    className="w-[100px] h-[100px]"
                    alt="AdImage"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className=" lg:w-[30%] hidden lg:inline">
          <IconButton onClick={handleWishlist}>
            {isWishlisted ? (
              <>
                <BookmarkAddedIcon
                  sx={{ color: "red", transform: "scale(1.2)" }}
                />
                <span className="text-[16px] ml-2">Added</span>
              </>
            ) : (
              <>
                <BookmarkAddIcon
                  sx={{ color: "gray", transform: "scale(1.0)" }}
                />
                <span className="text-[16px] ml-2">Bookmark</span>
              </>
            )}
          </IconButton>
         
          <div className="bg-white p-5 text-sm">
            <div className="font-bold text-center">Safety tips</div>
            <ul className="list-disc p-2">
              <li>Dont pay in advance, including for delivery.</li>

              <li>Meet the seller at a safe public place.</li>

              <li>Inspect the item and ensure its exactly what you want.</li>

              <li>
                On delivery, check that the item delivered is what was
                inspected.
              </li>

              <li>Only pay when you are satisfied.</li>
            </ul>
          </div>
          <div className="bg-white mt-5 p-5">
            <div className="flex">
              <AccountCircleIcon className=" " />
              <span className="text-xl font-bold ml-2 ">{ad.sellername}</span>
            </div>
            <br />
            <button
              onClick={handleChatClick}
              className="btn w-full mt-2 bg-[#ebf2f7]  hover:bg-[#00b53f]"
            >
              Chat with seller
            </button>
          </div>
         

          <div className="mt-5">
            {showChat && <ChatForm email={ad.email} userEmail={ad.userEmail} />}
          </div>
        </div>
      </div>
    </>
  );
}
