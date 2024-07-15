"use client";

// UI COMPONENTS

import { Input } from "./ui/input";

import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
// HOOKS
import { useFormContext } from "react-hook-form";

// FORM
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";

export default function PersonalInfoForm() {
	const { control } = useFormContext();
	return (
		<main>
			<h1 className="category-heading">Personal Info</h1>
			<div className="grid w-full items-center gap-4">
				{/* NAME */}
				<FormField
					control={control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input type="text" placeholder="Please enter your name" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* DOB */}

				{/* GENDER */}
				<FormField
					control={control}
					name="gender"
					render={({ field }) => (
						<FormItem className="space-y-3">
							<FormLabel>Gender</FormLabel>
							<FormControl>
								<RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="male" />
										</FormControl>
										<FormLabel className="font-normal">Male</FormLabel>
									</FormItem>
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="female" />
										</FormControl>
										<FormLabel className="font-normal">Female</FormLabel>
									</FormItem>
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="other" />
										</FormControl>
										<FormLabel className="font-normal">Other</FormLabel>
									</FormItem>
								</RadioGroup>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name="married"
					render={({ field }) => (
						<FormItem className="space-y-3">
							<FormLabel>Married</FormLabel>
							<FormControl>
								<RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="married" />
										</FormControl>
										<FormLabel className="font-normal">Married</FormLabel>
									</FormItem>
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="single" />
										</FormControl>
										<FormLabel className="font-normal">Single</FormLabel>
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
