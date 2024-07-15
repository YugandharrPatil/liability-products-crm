"use client";
import ProductDescription from "@/components/product-description";
import { PRODUCT_DESCRIPTION } from "@/static/products";

// UI
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// COMPONENTS
import ContactInfoForm from "@/components/contact-info-form";
import HealthInsuranceHealthForm from "@/components/forms/health-insurance/health-insurance-health-form";
import HealthInsurancePolicyForm from "@/components/forms/health-insurance/health-insurance-policy-form";
import PersonalInfoForm from "@/components/personal-info-form";

import { Loader2 } from "lucide-react";

// FORM
import { healthInsuranceFormSchema } from "@/components/forms/schemas";
import { Form } from "@/components/ui/form";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import { z } from "zod";

// FIREBASE
import { firestore } from "@/lib/utils/firebase/config";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection, Timestamp } from "firebase/firestore/lite";
const { healthInsuranceDescription } = PRODUCT_DESCRIPTION;

export default function HealthInsurance() {
	const methods = useForm<z.infer<typeof healthInsuranceFormSchema>>({
		resolver: zodResolver(healthInsuranceFormSchema),
		defaultValues: {
			name: "",
			gender: "male",
			married: "single",
			city: "",
			zip: "",
			country: "",
			email: "",
			address: "",
			medicalCondition: "",
			medications: "",
			surgeries: "",
			coverageType: "Individual",
			preferredNetwork: "HMO",
			deductableAmount: 5000,
			preferredHospital: "",
		},
	});
	const {
		formState: { isSubmitting, isSubmitSuccessful },
		reset,
	} = methods;

	const onSubmit = async (data: FieldValues) => {
		try {
			await addDoc(collection(firestore, "health-insurance"), {
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
					<CardTitle className="text-2xl">Apply for a Health Insurance Plan</CardTitle>
					<CardDescription>Please fill the form below</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...methods}>
						<form onSubmit={methods.handleSubmit(onSubmit)}>
							{/* SUB-FORMS */}
							<PersonalInfoForm />
							<ContactInfoForm />
							<HealthInsuranceHealthForm />
							<HealthInsurancePolicyForm />
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
