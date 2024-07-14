"use client";

// UI COMPONENTS
import { Card, CardContent } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";
// HOOKS
import { useFormContext } from "react-hook-form";

// FORM
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function LifeInsuranceHealthForm() {
	const {
		register,
		formState: { errors },
		control,
	} = useFormContext();
	return (
		<main className="mt-4">
			<h1 className="category-heading">Health & Lifestyle Details</h1>
			<div className="grid w-full items-center gap-4">
				{/* SMOKE? */}
				<FormField
					control={control}
					name="smoke"
					render={({ field }) => (
						<FormItem className="flex flex-row border items-start space-x-3 space-y-0 rounded-md p-4">
							<FormControl>
								<Checkbox checked={field.value} onCheckedChange={field.onChange} />
							</FormControl>
							<div className="space-y-1 leading-none">
								<FormLabel>Smoke</FormLabel>
								<FormDescription>Do you smoke regularly?</FormDescription>
							</div>
						</FormItem>
					)}
				/>

				{/* DRINK? */}
				<FormField
					control={control}
					name="drink"
					render={({ field }) => (
						<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
							<FormControl>
								<Checkbox checked={field.value} onCheckedChange={field.onChange} />
							</FormControl>
							<div className="space-y-1 leading-none">
								<FormLabel>Drink</FormLabel>
								<FormDescription>Do you drink regularly?</FormDescription>
							</div>
						</FormItem>
					)}
				/>
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
			</div>
		</main>
	);
}
