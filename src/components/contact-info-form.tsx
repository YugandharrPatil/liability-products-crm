"use client";

// UI
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

// HOOKS
import { useFormContext } from "react-hook-form";

// FORM
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";

export default function ContactInfoForm() {
	const {
		control,
	} = useFormContext();
	return (
		<main>
			<h1 className="category-heading">Contact Info</h1>
			<div className="grid w-full items-center gap-4">
				{/* CITY */}
				<FormField
					control={control}
					name="city"
					render={({ field }) => (
						<FormItem>
							<FormLabel>City</FormLabel>
							<FormControl>
								<Input type="text" placeholder="City" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* ZIP */}
				<FormField
					control={control}
					name="zip"
					render={({ field }) => (
						<FormItem>
							<FormLabel>ZIP Code</FormLabel>
							<FormControl>
								<Input type="number" placeholder="ZIP Code" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* COUNTRY */}
				<FormField
					control={control}
					name="country"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Country</FormLabel>
							<FormControl>
								<Input type="text" placeholder="Country" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* EMAIL */}
				<FormField
					control={control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type="email" placeholder="Email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* ADDRESS */}
				<FormField
					control={control}
					name="address"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Address</FormLabel>
							<FormControl>
								<Textarea placeholder="Type your address here..." {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</main>
	);
}
