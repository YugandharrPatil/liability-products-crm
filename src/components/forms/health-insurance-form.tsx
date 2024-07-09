"use client";

// UI COMPONENTS
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";
// HOOKS
import { useFormContext } from "react-hook-form";

export default function LifeInsuranceForm() {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	return (
		<main>
			<h1 className="text-center font-bold text-xl">Policy Details</h1>
			<CardContent>
				<div className="grid w-full items-center gap-4">
					{/* Policy Type */}
					<div>
						<Label htmlFor="policy">Policy</Label>
						<div className="flex flex-col space-y-1.5">
							<RadioGroup id="policy" {...register("policy", { required: "Please select your policy" })} defaultValue="somethingdude">
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="male" id="r1" />
									<Label htmlFor="r1">Male</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="female" id="r2" />
									<Label htmlFor="r2">Female</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="other" id="r3" />
									<Label htmlFor="r3">Other</Label>
								</div>
							</RadioGroup>
							{errors.name && <p className="text-red-500">{`${errors.gender?.message}`}</p>}
						</div>
					</div>
				</div>
				{/* DOB */}
				<div className="flex flex-col space-y-1.5">
					<Label htmlFor="DOB">Date of Birth</Label>
					<Input {...register("DOB", { required: "Please enter a valid DOB" })} placeholder="Please enter your name" type="date" name="DOB" id="DOB" autoComplete="off" />
					{errors.name && <p className="text-red-500">{`${errors.name.message}`}</p>}
				</div>
				{/* Gender */}
				<div className="flex flex-col space-y-1.5">
					<RadioGroup defaultValue="male">
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="male" id="r1" />
							<Label htmlFor="r1">Male</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="female" id="r2" />
							<Label htmlFor="r2">Female</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="other" id="r3" />
							<Label htmlFor="r3">Other</Label>
						</div>
					</RadioGroup>
					{/* Email */}
					<div className="flex flex-col space-y-1.5">
						<Label htmlFor="email">Email</Label>
						<Input
							{...register("email", {
								required: "Please enter your email",
								validate: {
									matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Email address must be a valid address",
								},
							})}
							placeholder="Please enter your email"
							type="email"
							id="email"
							name="email"
							autoComplete="off"
						/>
						{errors.email && <p className="text-red-500">{`${errors.email.message}`}</p>}
					</div>
					<div className="flex flex-col space-y-1.5">
						<Label htmlFor="message">Your message</Label>
						<Textarea
							className="resize-none"
							{...register("message", {
								required: "Please enter a message",
								minLength: {
									value: 10,
									message: "Please enter a longer message (min 10 characters)",
								},
							})}
							placeholder="Type your message here..."
							id="message"
							name="message"
						/>
						{errors.message && <p className="text-red-500">{`${errors.message.message}`}</p>}
					</div>
				</div>
			</CardContent>
		</main>
	);
}
