import type { ContentsData } from "@/types";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

async function fetchContentsData(): Promise<ContentsData[] | undefined> {
  try {
    const response = await getDocs(collection(db, "contents"));
    return response.docs.map((cnt) => ({
      id: cnt.id,
      ...cnt.data(),
    })) as ContentsData[];
  } catch (err) {
    console.error(err);
  }
}

export { fetchContentsData };
