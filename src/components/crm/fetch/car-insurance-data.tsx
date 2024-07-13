// make call to database fetching all orders and display them here. additionally, add filters (product, time span, etc)
import { firestore } from "@/lib/utils/firebase/config";
import { collection, getDocs } from "firebase/firestore/lite";

const fetchData = async () => {
	try {
		const col = collection(firestore, "car-insurance");
		const data = await getDocs(col);
		const docs = data.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // all docs array
		console.log(docs);
		return docs;
	} catch (err) {
		console.log(err);
	}
};
export default async function CarInsuranceData() {
	const data: any = await fetchData();
	return (
		<div>
			<h1>CRMPage</h1>
			<h3 className="text-xl font-bold">Car Insurance Fields</h3>
		</div>
	);
}
