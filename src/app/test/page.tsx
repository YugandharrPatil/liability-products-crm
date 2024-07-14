"use client";
import TestChild from "@/components/test";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { firestore } from "@/lib/utils/firebase/config";
import { zodResolver } from "@hookform/resolvers/zod";
import { Timestamp, addDoc, collection } from "firebase/firestore/lite";
import { Loader2 } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z
	.object({
		username: z.string().min(2, { message: "username has to be at least 2 characters" }).max(50, { message: "username has to be at most 50 characters" }),
		password: z.string().min(2, { message: "please enter a longer password" }),
	})
	.required();

export default function Test() {
	// const form = useForm<z.infer<typeof formSchema>>({
	// 	resolver: zodResolver(formSchema),
	// 	defaultValues: { username: "", password: "" },
	// });

	const form = useForm();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		reset,
	} = form;

	// async function onSubmit(data: z.infer<typeof formSchema>) {

	async function onSubmit(data: any) {
		try {
			await addDoc(collection(firestore, "test"), {
				data,
				sentAt: Timestamp.now().toDate(),
			});
			console.log(data);
		} catch (err) {
			console.error(err);
		} finally {
			reset();
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<TestChild />y
				{/* <FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input type="password" placeholder="Please enter your password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>  */}
				{/* <Button type="submit">Submit</Button> */}
				<Button type="submit" disabled={isSubmitting}>
					{isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
					{isSubmitting ? "Submitting" : "Submit"}
				</Button>
				{isSubmitSuccessful && <p className="mb-3 text-center text-green-500">Submitted Successfully</p>}
			</form>
		</Form>
	);
}
