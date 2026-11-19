import type { ContentsData } from "@/types";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

async function fetchContentsData(category: string): Promise<ContentsData[] | undefined> {
  try {
    const response = await getDocs(collection(db, category));
    console.log(response);
    return response.docs.map((cnt) => ({
      id: cnt.id,
      ...cnt.data(),
    })) as ContentsData[];
  } catch (err) {
    console.error(err);
  }
}

async function filterContentsData(
  filterValue: string,
  category: string,
): Promise<ContentsData[] | undefined> {
  try {
    const response = await getDocs(
      query(collection(db, category), where("author", "==", filterValue)),
    );
    return response.docs.map((cnt) => ({
      id: cnt.id,
      ...cnt.data(),
    })) as ContentsData[];
  } catch (err) {
    console.error(err);
  }
}

export { fetchContentsData, filterContentsData };
