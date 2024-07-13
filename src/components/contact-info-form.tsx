"use client";

// UI
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Textarea } from "./ui/textarea";

// HOOKS
import { useFormContext } from "react-hook-form";

export default function ContactInfoForm() {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	return (
		<div>
			<h1 className="text-center font-bold text-xl">Contact Info</h1>
			<CardContent>
				<div className="grid w-full items-center gap-4">
					{/* CITY*/}
					<div className="flex flex-col space-y-1.5">
						<Label htmlFor="city">City</Label>
						<Input {...register("city", { required: "Please enter a City" })} placeholder="City" id="city" autoComplete="off" />
						{errors.city && <p className="text-red-500">{`${errors.city.message}`}</p>}
					</div>
					{/* ZIP Code*/}
					<div className="flex flex-col space-y-1.5">
						<Label htmlFor="zip">ZIP Code</Label>
						<Input {...register("zip", { required: "Please enter a ZIP code" })} placeholder="ZIP Code" type="number" id="zip" autoComplete="off" />
						{errors.zip && <p className="text-red-500">{`${errors.zip.message}`}</p>}
					</div>
					{/* Country */}
					<div className="flex flex-col space-y-1.5">
						<Label htmlFor="country">Country</Label>
						<Input
							{...register("country", {
								required: "Please enter your country",
							})}
							placeholder="Country"
							type="text"
							id="country"
							autoComplete="off"
						/>
						{errors.country && <p className="text-red-500">{`${errors.country.message}`}</p>}
					</div>
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
						<Label htmlFor="address">Address</Label>
						<Textarea
							className="resize-none"
							{...register("address", {
								required: "Please enter an address",
								minLength: {
									value: 10,
									message: "Please enter a longer message (min 10 characters)",
								},
							})}
							placeholder="Type your address here..."
							id="address"
						/>
						{errors.address && <p className="text-red-500">{`${errors.address.message}`}</p>}
					</div>
				</div>
			</CardContent>
		</div>
	);
}
