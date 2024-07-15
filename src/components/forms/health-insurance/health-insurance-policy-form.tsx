"use client";

// UI COMPONENTS
import { Input } from "../../ui/input";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
// HOOKS
import { useFormContext } from "react-hook-form";

// FORM
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function LifeInsurancePolicyForm() {
	const { control } = useFormContext();
	return (
		<main>
			<h1 className="category-heading">Policy Details</h1>
			<div className="grid w-full items-center gap-4">
				{/* POLICY TYPE */}
				<FormField
					control={control}
					name="coverageType"
					render={({ field }) => (
						<FormItem className="space-y-3">
							<FormLabel>Coverage Type</FormLabel>
							<FormControl>
								<RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="Individual" />
										</FormControl>
										<FormLabel className="font-normal">Individual</FormLabel>
									</FormItem>
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="Family" />
										</FormControl>
										<FormLabel className="font-normal">Family</FormLabel>
									</FormItem>
								</RadioGroup>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* PREFERRED NETWORK */}
				<FormField
					control={control}
					name="preferredNetwork"
					render={({ field }) => (
						<FormItem className="space-y-3">
							<FormLabel>Preferred Network</FormLabel>
							<FormControl>
								<RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="HMO" />
										</FormControl>
										<FormLabel className="font-normal">HMO</FormLabel>
									</FormItem>
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="PPO" />
										</FormControl>
										<FormLabel className="font-normal">PPO</FormLabel>
									</FormItem>
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="EPO" />
										</FormControl>
										<FormLabel className="font-normal">EPO</FormLabel>
									</FormItem>
								</RadioGroup>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* DEDUCTABLE AMOUNT */}
				<FormField
					control={control}
					name="deductableAmount"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Deductable Amount</FormLabel>
							<FormControl>
								<Input type="number" placeholder="Deductable Amount" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* PREFERRED HOSPITAL */}
				<FormField
					control={control}
					name="preferredHospital"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Preferred Hospital</FormLabel>
							<FormControl>
								<Input type="text" placeholder="Preferred Hospital" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</main>
	);
}
