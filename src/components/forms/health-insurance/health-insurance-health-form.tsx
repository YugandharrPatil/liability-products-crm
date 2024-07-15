"use client";

// UI COMPONENTS
import { Input } from "../../ui/input";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
// HOOKS
import { useFormContext } from "react-hook-form";

// FORM
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function HealthInsurancePolicyForm() {
	const { control } = useFormContext();
	return (
		<main>
			<h1 className="category-heading">Health Details</h1>
			<div className="grid w-full items-center gap-4">
				{/* MEDICAL CONDITION*/}
				<FormField
					control={control}
					name="medicalCondition"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Pre-existing Medical Condition (if any)</FormLabel>
							<FormControl>
								<Input type="text" placeholder="Medical Condition" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* MEDICATIONS */}
				<FormField
					control={control}
					name="medications"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Medications (if any)</FormLabel>
							<FormControl>
								<Input type="text" placeholder="Medications" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* SURGERIES */}
				<FormField
					control={control}
					name="surgeries"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Surgeries & Hospitalizations (if any)</FormLabel>
							<FormControl>
								<Input type="text" placeholder="Surgeries/Hospitalizations" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</main>
	);
}
