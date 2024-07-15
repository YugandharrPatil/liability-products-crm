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
					name="policyType"
					render={({ field }) => (
						<FormItem className="space-y-3">
							<FormLabel>Policy Type</FormLabel>
							<FormControl>
								<RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="Term Life" />
										</FormControl>
										<FormLabel className="font-normal">Term Life</FormLabel>
									</FormItem>
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="Whole Life" />
										</FormControl>
										<FormLabel className="font-normal">Whole Life</FormLabel>
									</FormItem>
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="Universal Life" />
										</FormControl>
										<FormLabel className="font-normal">Universal Life</FormLabel>
									</FormItem>
								</RadioGroup>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* COVERAGE AMOUNT */}
				<FormField
					control={control}
					name="coverageAmount"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Coverage Amount</FormLabel>
							<FormControl>
								<Input type="number" placeholder="Coverage Amount" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</main>
	);
}
