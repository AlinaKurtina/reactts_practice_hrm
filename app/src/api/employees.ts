import type { EmployeeData } from "@/types";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

async function fetchEmployeeData(): Promise<EmployeeData[] | undefined> {
  try {
    const response = await getDocs(collection(db, "employees"));
    return response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as EmployeeData[];
  } catch (err) {
    console.error(err);
  }
}

export { fetchEmployeeData }
