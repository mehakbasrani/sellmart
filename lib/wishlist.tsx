// services/wishlist.ts
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  Timestamp,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { adData } from "./types";

export const addItemToWishlist = async (userEmail: string, adId: string) => {
  try {
    const wishlistItemRef = doc(
      collection(db, "wishlists"),
      `${userEmail}_${adId}`
    );
    await setDoc(wishlistItemRef, {
      userEmail,
      adId,
      addedAt: Timestamp.now(),
    });
    console.log("Item added to wishlist!");
  } catch (error) {
    console.error("Error adding item to wishlist: ", error);
  }
};

export type WishlistAdData = adData & { adId: string };

// Function to get wishlist items along with full ad data
export const getWishlistItemsWithAds = async (
  userEmail: string
): Promise<WishlistAdData[]> => {
  try {
    const wishlistQuery = query(
      collection(db, "wishlists"),
      where("userEmail", "==", userEmail)
    );
    const wishlistSnapshot = await getDocs(wishlistQuery);

    const wishlistItems = wishlistSnapshot.docs.map((doc) => doc.data());

    const adPromises = wishlistItems.map(async (wishlistItem) => {
      const adDocRef = doc(db, "ads", wishlistItem.adId);
      const adDoc = await getDoc(adDocRef);

      if (adDoc.exists()) {
        const adData = adDoc.data() as adData;
        return { adId: wishlistItem.adId, ...adData };
      } else {
        return null;
      }
    });

    const adsData = await Promise.all(adPromises);
    return adsData.filter((ad) => ad !== null) as WishlistAdData[];
  } catch (error) {
    console.error("Error fetching wishlist items with ads: ", error);
    return [];
  }
};

export const removeItemFromWishlist = async (
  userEmail: string,
  adId: string
) => {
  try {
    await deleteDoc(doc(db, "wishlists", `${userEmail}_${adId}`));
    console.log("Item removed from wishlist!");
  } catch (error) {
    console.error("Error removing item from wishlist: ", error);
  }
};
