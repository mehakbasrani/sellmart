"use client";
import { adData } from "@/lib/types";
import { useRouter } from "next/navigation";

export default function Slider(ad: adData) {
  // console.log(ad.imagesUrl);

  return (
    <div className="flex space-x-5">
      <div className="carousel">
        {ad.imagesUrl.map((url, index) => (
          <div
            id={`slide${index + 1}`}
            key={index}
            className="carousel-item relative w-full"
          >
            <img
              src={url}
              className="w-full"
              alt={`sliderImage ${index + 1}`}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${
                  ((index - 1 + ad.imagesUrl.length) % ad.imagesUrl.length) + 1
                }`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${((index + 1) % ad.imagesUrl.length) + 1}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
