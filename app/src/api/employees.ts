import type { EmployeeData, EmployeeFilters } from "@/types";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  query,
  QuerySnapshot,
  where,
  type DocumentData,
} from "firebase/firestore";

async function filterEmployeeData({
  filter,
  filterValue,
}: EmployeeFilters): Promise<EmployeeData[] | undefined> {
  const collectionRef = collection(db, "employees");
  try {
    let response: QuerySnapshot<DocumentData, DocumentData>;
    if (filter && filterValue) {
      response = await getDocs(query(collectionRef, where(filter, "==", filterValue)));
    } else {
      response = await getDocs(collectionRef);
    }
    return response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as EmployeeData[];
  } catch (err) {
    console.error(err);
  }
}

export { filterEmployeeData };
