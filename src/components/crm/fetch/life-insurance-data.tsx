// make call to database fetching all orders and display them here. additionally, add filters (product, time span, etc)
import { firestore } from "@/lib/utils/firebase/config";
import { collection, getDocs } from "firebase/firestore/lite";

const fetchData = async () => {
	try {
		const col = collection(firestore, "life-insurance");
		const data = await getDocs(col);
		const docs = data.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // all docs array
		console.log(docs);
		return docs;
	} catch (err) {
		console.log(err);
	}
};
export default async function LifeInsuranceData() {
	const data: any = await fetchData();
	return (
		<div>
			<h1>CRMPage</h1>
			<h3 className="text-xl font-bold">Life Insurance Data</h3>
			<div className="flex gap-4 justify-between">
				{data.map((entry: any, index: number) => (
					<div className="border border-black flex-1" key={index}>
						<h3 className="font-bold">Personal Info</h3>
						<p>Name: {entry.data.name}</p>
						<p>Gender: {entry.data.gender}</p>

						<h3 className="font-bold">Contact Info</h3>
						<p>City: {entry.data.city}</p>
						<p>ZIP Code: {entry.data.zip}</p>
						<p>Country: {entry.data.country}</p>
						<p>Email: {entry.data.email}</p>
						<p>Address: {entry.data.address}</p>

						<h3 className="font-bold">Policy Details</h3>
						<p>Policy Type: {entry.data.policyType}</p>
						<p>Policy Term: {entry.data.policyTerm}</p>
						<p>Smoke: {entry.data.smoke === "smokes" ? "Yes" : "No"}</p>
						<p>Drink: {entry.data.drink === "drinks" ? "Yes" : "No"}</p>
					</div>
				))}
			</div>
		</div>
	);
}
