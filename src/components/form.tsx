"use client";
// ui components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Loader2 } from "lucide-react";
// hook form
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";

// import addMessage from "../actions/form-action";

// FIREBASE
// import { firestore } from "@/lib/utils/firebase/config";
// import { addDoc, collection, Timestamp } from "firebase/firestore/lite";

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		reset,
	} = useForm();

	const onSubmit = async (data: any) => {
		console.log(data);
		try {
			// await addDoc(collection(firestore, "messages"), {
			//   data,
			//   sentAt: Timestamp.now().toDate(),
			// });
		} catch (err) {
			console.error(err);
		} finally {
			reset();
		}

		reset();
	};

	return (
		<main className="container">
			<h1 className="heading">Connect with Me!</h1>
			<Card className="mx-auto mb-10 max-w-lg">
				{/*  sm:w-9/12 xl:w-5/12 2xl:w-5/12 */}
				<CardHeader className="text-center">
					<CardTitle className="text-2xl">Write me a message!</CardTitle>
					<CardDescription>
						Have a project in mind? Something I can help with? <br /> Totally open to hearing from you!
					</CardDescription>
				</CardHeader>
				<form onSubmit={handleSubmit(onSubmit)}>
					<CardContent>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Name</Label>
								<Input {...register("name", { required: "Please enter your name" })} placeholder="Please enter your name" name="name" id="name" autoComplete="off" />
								{errors.name && <p className="text-red-500">{`${errors.name.message}`}</p>}
							</div>
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
					<CardFooter>
						<Button type="submit" className="w-full" disabled={isSubmitting}>
							{isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
							{isSubmitting ? "Submitting" : "Send Message"}
						</Button>
					</CardFooter>
					{isSubmitSuccessful && <p className="mb-3 text-center text-green-500">Submitted Successfully</p>}
				</form>
			</Card>
		</main>
	);
}
