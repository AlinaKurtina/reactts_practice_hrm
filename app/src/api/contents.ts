import type { ContentsData, ContentsFilters } from "@/types";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  query,
  QuerySnapshot,
  where,
  type DocumentData,
} from "firebase/firestore";

async function filterContentsData({
  filter,
  filterValue,
  category,
}: ContentsFilters): Promise<ContentsData[] | undefined> {
  const collectionRef = collection(db, category);
  try {
    let response: QuerySnapshot<DocumentData, DocumentData>;
    if (filter && filterValue) {
      response = await getDocs(query(collectionRef, where(filter, "==", filterValue)));
    } else {
      response = await getDocs(collectionRef);
    }
    return response.docs.map((cnt) => ({
      id: cnt.id,
      ...cnt.data(),
    })) as ContentsData[];
  } catch (err) {
    console.error(err);
  }
}

export { filterContentsData };
