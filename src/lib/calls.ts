import { firestore } from "@/lib/utils/firebase/config";
import { collection, getDocs } from "firebase/firestore/lite";

type tableNames = "life-insurance" | "health-insurance" | "car-insurance";

export default async function fetchData(tableName: tableNames) {
	try {
		const col = collection(firestore, tableName);
		const data = await getDocs(col);
		const docs = data.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // all docs array
		// console.log(docs);
		return docs;
	} catch (err) {
		console.log(err);
	}
}
