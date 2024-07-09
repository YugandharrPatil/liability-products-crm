"use client";
import ProductDescription from "@/components/product-description";
import { PRODUCT_DESCRIPTION } from "@/static/products";

// UI
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// COMPONENTS
import PersonalInfoForm from "@/components/personal-info-form";

import { Loader2 } from "lucide-react";
// hook form
import type { FieldValues } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";

// FIREBASE
import ContactInfoForm from "@/components/contact-info-form";
import LifeInsuranceForm from "@/components/forms/life-insurance-form";
import { firestore } from "@/lib/utils/firebase/config";
import { addDoc, collection, Timestamp } from "firebase/firestore/lite";

const { lifeInsuranceDescription } = PRODUCT_DESCRIPTION;

export default function LifeInsurance() {
	const methods = useForm();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		reset,
	} = methods;

	const onSubmit = async (data: any) => {
		console.log(data);
		try {
			await addDoc(collection(firestore, "life-insurance"), {
				data,
				sentAt: Timestamp.now().toDate(),
			});
			console.log(data);
		} catch (err) {
			console.error(err);
		} finally {
			reset();
		}

		reset();
	};

	return (
		<main>
			<ProductDescription description={lifeInsuranceDescription} />
			{/* FORM */}
			<main className="container">
				<h1 className="heading">Life Insurance</h1>
				<Card className="mx-auto mb-10 max-w-lg">
					<CardHeader className="text-center">
						<CardTitle className="text-2xl">Apply for a Life Insurance Plan</CardTitle>
						<CardDescription>Please fill the form below</CardDescription>
					</CardHeader>
					<FormProvider {...methods}>
						<form onSubmit={handleSubmit(onSubmit)}>
							{/* SUB-FORMS */}
							<PersonalInfoForm />
							<ContactInfoForm />
							{/* <LifeInsuranceForm /> */}
							<CardFooter>
								<Button type="submit" className="w-full" disabled={isSubmitting}>
									{isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
									{isSubmitting ? "Submitting" : "Submit"}
								</Button>
							</CardFooter>
							{isSubmitSuccessful && <p className="mb-3 text-center text-green-500">Submitted Successfully</p>}
						</form>
					</FormProvider>
				</Card>
			</main>
		</main>
	);
}
