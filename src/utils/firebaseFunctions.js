// saving new items

import { setDoc, doc, getDocs, query, collection, orderBy } from "firebase/firestore";
import { firestore } from "../firebase.config";

export const saveItem = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

// getting the food items

export const getAllFoodItems = async() =>{
    const items = await getDocs(
        query(collection(firestore, 'foodItems'), orderBy('id', 'desc'))
    );

    return items.docs.map((doc)=> doc.data());
}
