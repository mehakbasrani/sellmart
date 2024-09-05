import BookmarkAds from "@/components/bookmarkAds";
import { getWishlistItemsWithAds } from "@/lib/wishlist";

export default async function page({
  params,
}: {
  params: { userEmail: string };
}) {
  const userEmail = params.userEmail;
  const ads = await getWishlistItemsWithAds(decodeURIComponent(userEmail));

  console.log(ads);

  return (
    <div className="max-w-5xl mx-auto">
      {ads?.map((ad: any) => (
        <BookmarkAds data={ad} key={ad.adId} />
      ))}
    </div>
  );
}
