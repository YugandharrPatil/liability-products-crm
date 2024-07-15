"use client";

// UI COMPONENTS
import { Input } from "../../ui/input";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
// HOOKS
import { useFormContext } from "react-hook-form";

// FORM
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function CarInsurancePolicyDetailsForm() {
	const { control } = useFormContext();
	return (
		<main>
			<h1 className="category-heading">Policy Details</h1>
			<div className="grid w-full items-center gap-6">
				{/* COVERAGE TYPE */}
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
											<RadioGroupItem value="Liability" />
										</FormControl>
										<FormLabel className="font-normal">Liability</FormLabel>
									</FormItem>
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="Collision" />
										</FormControl>
										<FormLabel className="font-normal">Collision</FormLabel>
									</FormItem>
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="Comprehensive" />
										</FormControl>
										<FormLabel className="font-normal">Comprehensive</FormLabel>
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
								<Input type="number" placeholder="Amount" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* ADDITIONAL COVERAGE */}
				<FormField
					control={control}
					name="accountCoverage"
					render={({ field }) => (
						<FormItem className="space-y-3">
							<FormLabel>Additional Coverage</FormLabel>
							<FormControl>
								<RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="rental-reimbursement" />
										</FormControl>
										<FormLabel className="font-normal">Rental Reimbursement</FormLabel>
									</FormItem>
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="roadside-assistance" />
										</FormControl>
										<FormLabel className="font-normal">Roadside Assistance</FormLabel>
									</FormItem>
								</RadioGroup>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* PAYMENT FREQUENCY */}
				<FormField
					control={control}
					name="paymentFrequency"
					render={({ field }) => (
						<FormItem className="space-y-3">
							<FormLabel>Payment Frequency</FormLabel>
							<FormControl>
								<RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="monthly" />
										</FormControl>
										<FormLabel className="font-normal">Monthly</FormLabel>
									</FormItem>
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="quaterly" />
										</FormControl>
										<FormLabel className="font-normal">Quarterly</FormLabel>
									</FormItem>
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="annually" />
										</FormControl>
										<FormLabel className="font-normal">Annually</FormLabel>
									</FormItem>
								</RadioGroup>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</main>
	);
}
