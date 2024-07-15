"use client";
import ProductDescription from "@/components/product-description";
import { PRODUCT_DESCRIPTION } from "@/static/products";

// UI
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// COMPONENTS
import ContactInfoForm from "@/components/contact-info-form";
import LifeInsuranceHealthForm from "@/components/forms/life-insurance/life-insurance-health-form";
import LifeInsurancePolicyForm from "@/components/forms/life-insurance/life-insurance-policy-form";
import PersonalInfoForm from "@/components/personal-info-form";

import { Loader2 } from "lucide-react";

// FORM
import { lifeInsuranceFormSchema } from "@/components/forms/schemas";
import { Form } from "@/components/ui/form";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import { z } from "zod";

// FIREBASE
import { firestore } from "@/lib/utils/firebase/config";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection, Timestamp } from "firebase/firestore/lite";
const { lifeInsuranceDescription } = PRODUCT_DESCRIPTION;

export default function LifeInsurance() {
	const methods = useForm<z.infer<typeof lifeInsuranceFormSchema>>({
		resolver: zodResolver(lifeInsuranceFormSchema),
		defaultValues: { name: "", gender: "male", city: "", zip: "", country: "", email: "", address: "", policyType: "Term Life", coverageAmount: 5000, smoke: false, drink: false, medicalCondition: "", medications: "" },
	});
	const {
		formState: { isSubmitting, isSubmitSuccessful },
		reset,
	} = methods;

	const onSubmit = async (data: FieldValues) => {
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
	};

	{
		/* <ProductDescription description={lifeInsuranceDescription} /> */
	}
	{
		/* FORM */
	}
	return (
		<main className="container mt-10">
			<Card className="mx-auto mb-10 max-w-lg">
				<CardHeader className="text-center">
					<CardTitle className="text-2xl">Apply for a Life Insurance Plan</CardTitle>
					<CardDescription>Please fill the form below</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...methods}>
						<form onSubmit={methods.handleSubmit(onSubmit)}>
							{/* SUB-FORMS */}
							<PersonalInfoForm />
							<ContactInfoForm />
							<LifeInsurancePolicyForm />
							<LifeInsuranceHealthForm />
							<Button type="submit" className="w-full mt-8" disabled={isSubmitting}>
								{isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
								{isSubmitting ? "Submitting" : "Submit"}
							</Button>
							{isSubmitSuccessful && <p className="mt-3 text-center text-green-500">Submitted Successfully</p>}
						</form>
					</Form>
				</CardContent>
			</Card>
		</main>
	);
}
