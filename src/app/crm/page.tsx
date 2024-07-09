// make call to database fetching all orders and display them here. additionally, add filters (product, time span, etc)
import { firestore } from "@/lib/utils/firebase/config";
import { collection, getDocs } from "firebase/firestore/lite";

const fetchData = async () => {
	try {
		const col = collection(firestore, "life-insurance");
		const data = await getDocs(col);
		const docs = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
		console.log(docs[0], "done!");
		return docs[0];
	} catch (err) {
		console.log(err);
	}
};
export default async function CRMPage() {
	const fields = await fetchData();
	return (
		<div>
			<h1>CRMPage</h1>
			<h3 className="text-xl font-bold">Life Insurance Fields</h3>
			{/* {fields?.map((field: any) => (
				<div key={field.id} className="">
					<p>{field.data.message}</p>
				</div>
			))} */}
			{Object.entries(fields?.data).map(([key, value]: [key: any, value: any]) => (
				<div key={key}>
					<strong>{key}:</strong> {value}
				</div>
			))}
		</div>
	);
}
