export type FormData = {
  sellername: string;
  category: string;
  location: string;
  email: string;
  title: string;
  description: string;
  price: number | null;
  contactNumber: number | null;
  negotiable: boolean;
  images: Array<string>;
};

export type uploadData = {
  sellername: string;
  category: string;
  location: string;
  email: string;
  title: string;
  userEmail: string;
  description: string;
  price: number | null;
  contactNumber: number | null;
  negotiable: boolean;
  images: Array<any>;
};

export type adData = {
  sellername: string;
  title: string;
  negotiable: boolean;
  category: string;
  location: string;
  email: string;
  description: string;
  userEmail: string;
  price: number;
  imagesUrl: Array<string>;
  id: string;
  contactNumber: number | null;
};

export type WishlistItem = {
  userEmail: string;
  adId: string;
  addedAt: Date;
};
