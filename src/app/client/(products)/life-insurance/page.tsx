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
import { Form } from "@/components/ui/form";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";

// FIREBASE
import ContactInfoForm from "@/components/contact-info-form";
import LifeInsuranceHealthForm from "@/components/forms/life-insurance-health-form";
import LifeInsurancePolicyForm from "@/components/forms/life-insurance-policy-form";
import { firestore } from "@/lib/utils/firebase/config";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection, Timestamp } from "firebase/firestore/lite";
import { z } from "zod";
const { lifeInsuranceDescription } = PRODUCT_DESCRIPTION;

const formSchema = z.object({
	// PERSONAL DETAILS
	name: z.string().min(1, { message: "Name is required" }),
	gender: z.enum(["male", "female", "other"], {
		required_error: "Please select a gender",
	}),
	// CONTACT DETAILS
	city: z.string().min(1, { message: "City is required" }),
	zip: z.string().min(1, { message: "ZIP Code is required" }),

	country: z.string().min(1, { message: "Country is required" }),
	email: z.string().email().min(1, { message: "Email is required" }),
	address: z.string().min(1, { message: "Address is required" }).min(20, { message: "Address should be longer than 20 characters" }),

// POLICY DETAILS
	policyType: z.enum(["Term Life", "Whole Life", "Universal Life"], {
		required_error: "Please select a policy type",
	}),
	coverageAmount: z.string().min(1, { message: "Coverage amount should be more than 2000" }),

	// HEALTH DETAILS
	smoke: z.boolean().default(false).optional(),
	drink: z.boolean().default(false).optional(),
	medicalCondition: z.string(), medications: z.string(),
});

export default function LifeInsurance() {
	const methods = useForm<z.infer<typeof formSchema>>({ resolver: zodResolver(formSchema), defaultValues: { name: "", gender: "male", city: "", zip: "", country: "", email: "", address: "", policyType: "Term Life", coverageAmount: "", smoke: false, drink: false, medicalCondition: "", medications: "" } });
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		reset,
	} = methods;

	const onSubmit = async (data: any) => {
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
								{isSubmitSuccessful && <p className="mb-3 text-center text-green-500">Submitted Successfully</p>}
							</form>
						</Form>
					</CardContent>
				</Card>
			</main>
		</main>
	);
}
