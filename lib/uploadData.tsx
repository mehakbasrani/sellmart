import { uploadData } from "./types";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

export const createAd = async ({
  sellername,
  category,
  location,
  email,
  title,
  description,
  price,
  userEmail,
  contactNumber,
  negotiable,
  images,
}: uploadData) => {
  let imagesUrl: Array<string> = [];

  for (let i = 0; i < images.length; i++) {
    //Put the image in the /userEmail/title/image
    const imageRef = ref(storage, `${userEmail}/${title}/${images[i].name}`);

    const status: any = await uploadBytes(imageRef, images[i])
      .then((snapshot) => {
        return snapshot;
      })
      .catch((error) => {
        return false;
      });

    if (status) {
      const uploadImgUrl = await getDownloadURL(status.ref).then((url) => {
        return url;
      });
      imagesUrl.push(uploadImgUrl);
    }
  }
  //Submit Data
  const adsCollectionRef = collection(db, "ads");
  try {
    await addDoc(adsCollectionRef, {
      sellername,
      category,
      location,
      email,
      title,
      description,
      price,
      userEmail,
      negotiable,
      contactNumber,
      imagesUrl,
    });
  } catch (error) {
    return { error: true, message: "Unable to Submit AD" };
  }

  return {
    error: false,
    message: "Successfully Submitted",
  };
};
