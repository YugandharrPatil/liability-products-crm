"use client";

// UI COMPONENTS
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Textarea } from "./ui/textarea";
// HOOKS
import { useFormContext } from "react-hook-form";

// FORM
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";

// MISC
import { twMerge } from "tailwind-merge";

export default function PersonalInfoForm() {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext();
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

				{/* <div className="flex flex-col space-y-1.5">
						<Label htmlFor="name">Full Name</Label>
						<Input {...register("name", { required: "Please enter your name" })} placeholder="Please enter your name" id="name" />
						{errors.name && <p className="text-red-500">{`${errors.name.message}`}</p>}
					</div>
					{/* DOB */}
				{/* <div className="flex flex-col space-y-1.5">
						<Label htmlFor="DOB">Date of Birth</Label>
						<Input {...register("DOB", { valueAsDate: true, required: "Please enter a valid date" })} type="date" id="DOB" />
						{errors.DOB && <p className="text-red-500">{`${errors.DOB.message}`}</p>}
					</div> */}
				{/* Gender */}
				{/* <div>
						<Label htmlFor="gender">Gender</Label>
						<div className="flex flex-col space-y-1.5">
							<RadioGroup id="gender">
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="male" id="r1" {...register("gender")} />
									<Label htmlFor="r1">Male</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="female" id="r2" {...register("gender")} />
									<Label htmlFor="r2">Female</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="other" id="r3" {...register("gender")} />
									<Label htmlFor="r3">Other</Label>
								</div>
							</RadioGroup>
							{errors.gender && <p className="text-red-500">{`${errors.gender?.message}`}</p>}
						</div>
					</div> */}
			</div>
		</main>
	);
}
