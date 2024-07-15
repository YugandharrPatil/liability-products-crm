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

export default async function CarInsuranceData() {
	const data: any = await fetchData("car-insurance");
	return (
		<main className="container mb-4">
			{/* LIFE INSURANCE */}
			<h3 className="text-xl mb-3 font-bold">Car Insurance Data</h3>
			<div className="flex gap-4 justify-between">
				{data &&
					data.map((entry: { data: any }, index: number) => (
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

							<h3 className="font-bold mt-4">Vehicle Details</h3>
							<p>Vehicle Make: {entry.data.vehicleMake}</p>
							<p>Vehicle Model: {entry.data.vehicleModel}</p>
							<p>VIN: {entry.data.vehicleIdentificationNumber}</p>
							<p>Mileage: {entry.data.mileage}</p>

							<h3 className="font-bold mt-4">Driving Info</h3>
							<p>Driving History: {entry.data.drivingHistory}</p>
							<p>Usage: {entry.data.usage}</p>
							<p>Driver Info: {entry.data.driverInfo}</p>
							<p>Annual Milege: {entry.data.mileage}</p>

							<h3 className="font-bold mt-4">Policy Details</h3>
							<p>Coverage Type: {entry.data.coverageType}</p>
							<p>Deductable Amount: {entry.data.deductableAmount}</p>
							<p>Account Coverage: {entry.data.accountCoverage}</p>
							<p>Payment Frequency: {entry.data.paymentFrequency}</p>
						</Card>
					))}
			</div>
		</main>
	);
}
