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
						<Input {...register("city", { required: "Please enter a City" })} placeholder="City" id="name" autoComplete="off" />
						{errors.city && <p className="text-red-500">{`${errors.city.message}`}</p>}
					</div>
					{/* ZIP Code*/}
					{/* <div className="flex flex-col space-y-1.5">
						<Label htmlFor="zip">ZIP Code</Label>
						<Input {...register("ZIP", { required: "Please enter a ZIP code" })} placeholder="ZIP Code" type="number" name="zip" id="zip" autoComplete="off" />
						{errors.zip && <p className="text-red-500">{`${errors.zip.message}`}</p>}
					</div> */}
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
				</div>
			</CardContent>
		</div>
	);
}
