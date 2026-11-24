import { db } from "@/lib/firebase";
import type { MessageData } from "@/types";
import { addDoc, collection, getDocs } from "firebase/firestore";

// TODO: SEPARATE THE COLLECTION NAMES INTO A ENUM-Y OBJ
// FIXME: REMOVE EXTRA CONSOLE.LOG
const collectionRef = collection(db, "messages");

async function getMessages(): Promise<MessageData[] | undefined> {
  try {
    const response = await getDocs(collectionRef);
    return response.docs.map((msg) => ({
      id: msg.id,
      ...msg.data(),
    })) as MessageData[];
  } catch (err) {
    console.log(err);
  }
}

async function createMessage(newMessage: MessageData) {
  try {
    const response = await addDoc(collectionRef, newMessage);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

export { getMessages, createMessage };
