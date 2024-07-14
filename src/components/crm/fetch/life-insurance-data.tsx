// make call to database fetching all orders and display them here. additionally, add filters (product, time span, etc)
import { Card } from "@/components/ui/card";
import fetchData from "@/lib/calls";

type EntryData = {
	name: string;
	gender: string;
	city: string;
	zip: string;
	country: string;
	email: string;
	address: string;
	policyType: string;
	// policyTerm: string;
	coverageAmount: number;
	smoke: boolean;
	drink: boolean;
	medicalCondition: string;
	medications: string;
};

type FetchedData =
	| {
			id: string;
			data: EntryData;
	  }[]
	| undefined;

export default async function LifeInsuranceData() {
	const data: any = await fetchData("life-insurance");
	return (
		<main className="container">
			{/* LIFE INSURANCE */}
			<h3 className="text-xl mb-3 font-bold">Life Insurance Data</h3>
			<div className="flex gap-4 justify-between">
				{data &&
					data.map((entry: { data: EntryData }, index: number) => (
						<Card className="p-3 flex-1" key={index}>
							<h3 className="font-bold">Personal Info</h3>
							<p>Name: {entry.data.name}</p>
							<p>Gender: {entry.data.gender}</p>

							<h3 className="font-bold mt-4">Contact Info</h3>
							<p>City: {entry.data.city}</p>
							<p>ZIP Code: {entry.data.zip}</p>
							<p>Country: {entry.data.country}</p>
							<p>Email: {entry.data.email}</p>
							<p>Address: {entry.data.address}</p>

							<h3 className="font-bold mt-4">Policy Details</h3>
							<p>Policy Type: {entry.data.policyType}</p>
							<p>Coverage Amount: {entry.data.coverageAmount}</p>
							{/* <p>Policy Term: {entry.data.policyTerm}</p> */}

							<h3 className="font-bold mt-4">Health & Lifestyle Details</h3>
							<p>Smoke: {entry.data.smoke === false ? "No" : "Yes"}</p>
							<p>Drink: {entry.data.drink === false ? "No" : "Yes"}</p>
							<p>Medical Condition: {entry.data.medicalCondition}</p>
							<p>Coverage Amount: {entry.data.medications}</p>
						</Card>
					))}
			</div>
		</main>
	);
}
