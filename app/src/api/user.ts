import { COLLECTION_KEYS } from "@/constants/keys";
import { db } from "@/lib/firebase";
import type { User } from "@/types";
import { doc, getDoc } from "firebase/firestore";

async function fetchUserData(id: string): Promise<User | undefined> {
  try {
    const docRef = doc(db, COLLECTION_KEYS.USERS, id);
    const userDoc = await getDoc(docRef);
    return userDoc.data() as User;
  } catch (err) {
    console.error(err);
  }
}

export default fetchUserData;
