"use client";

// UI COMPONENTS
import { Input } from "../../ui/input";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
// HOOKS
import { useFormContext } from "react-hook-form";

// FORM
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function CarInsuranceVehicleInfoForm() {
	const { control } = useFormContext();
	return (
		<main>
			<h1 className="category-heading">Vehicle Details</h1>
			<div className="grid w-full items-center gap-4">
				{/* VEHICLE MAKE*/}
				<FormField
					control={control}
					name="vehicleMake"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Vehicle Make</FormLabel>
							<FormControl>
								<Input type="text" placeholder="Vehicle Make" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* VEHICLE MODEL */}
				<FormField
					control={control}
					name="vehicleModel"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Vehicle Model</FormLabel>
							<FormControl>
								<Input type="text" placeholder="Model" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* VEHICLE IDENTIFICATION NUMBER */}
				<FormField
					control={control}
					name="vehicleIdentificationNumber"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Vehicle Identification Number</FormLabel>
							<FormControl>
								<Input type="string" placeholder="VIN" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* MILEAGE */}
				<FormField
					control={control}
					name="mileage"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Mileage</FormLabel>
							<FormControl>
								<Input type="string" placeholder="Mileage" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</main>
	);
}
