"use client";

import { adData } from "@/lib/types";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Rupees } from "@/lib/currency";
import { removeItemFromWishlist } from "@/lib/wishlist";

export default function BookmarkAds(data: any) {
  const router = useRouter();
  const ad = data.data;
  //   console.log(data);
  const removeAd = async () => {
    const result = await removeItemFromWishlist(ad.userEmail, ad.adId);

    router.refresh();
  };

  return (
    <>
      <div className="flex border-solid border-[1px] border-gray-400 m-4 rounded-lg bg-white hover:scale-105 transition hover:cursor-pointer hover:shadow-lg">
        <div className="w-[25%]">
          <img
            src={ad.imagesUrl[0]}
            alt="ad image"
            className="w-full h-full rounded-l-lg"
          />
        </div>

        <div className="flex-1 p-2">
          <Link
            href={`/adverts/${ad.id}`}
            className="font-bold line-clamp-2 hover:underline"
          >
            {ad.title}
          </Link>
          <p className="font-bold text-green-600">{Rupees.format(ad.price)}</p>
          <small>open</small>

          <div className="my-2">
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              size="small"
              onClick={removeAd}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
