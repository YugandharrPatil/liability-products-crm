"use client";

// UI COMPONENTS
import { Input } from "../../ui/input";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
// HOOKS
import { useFormContext } from "react-hook-form";

// FORM
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function CarInsuranceDrivingInfoForm() {
	const { control } = useFormContext();
	return (
		<main>
			<h1 className="category-heading">Driving Info</h1>
			<div className="grid w-full items-center gap-4">
				{/* DRIVING HISTORY */}
				<FormField
					control={control}
					name="drivingHistory"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Driving History</FormLabel>
							<FormControl>
								<Input type="text" placeholder="Accidents/Violations if any..." {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* USAGE*/}
				<FormField
					control={control}
					name="usage"
					render={({ field }) => (
						<FormItem className="space-y-3">
							<FormLabel>Usage</FormLabel>
							<FormControl>
								<RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="Personal" />
										</FormControl>
										<FormLabel className="font-normal">Personal</FormLabel>
									</FormItem>
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="Business" />
										</FormControl>
										<FormLabel className="font-normal">Business</FormLabel>
									</FormItem>
								</RadioGroup>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* DRIVER INFO */}
				<FormField
					control={control}
					name="driverInfo"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Driver Info</FormLabel>
							<FormControl>
								<Input type="text" placeholder="Driver Info" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* ANNUAL MILEAGE*/}
				<FormField
					control={control}
					name="annualMileage"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Annual Mileage</FormLabel>
							<FormControl>
								<Input type="text" placeholder="Annual Mileage" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</main>
	);
}
