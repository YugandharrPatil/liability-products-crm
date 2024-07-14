
import { z } from "zod";

const personalDetailsSchema = {
	// PERSONAL DETAILS
	name: z.string().min(1, { message: "Name is required" }),
	gender: z.enum(["male", "female", "other"], {
		required_error: "Please select a gender",
	}),
}

const contactDetailsSchema = {
	// CONTACT DETAILS
	city: z.string().min(1, { message: "City is required" }),
zip: z.string().regex(/^\d{6}$/, { message: "ZIP Code must be exactly 5 digits" }),
	country: z.string().min(1, { message: "Country is required" }),
	email: z.string().email().min(1, { message: "Email is required" }),
	address: z.string().min(1, { message: "Address is required" }).min(20, { message: "Address should be longer than 20 characters" }),
}

const lifeInsurancePolicyDetailsSchema = {
// POLICY DETAILS
	policyType: z.enum(["Term Life", "Whole Life", "Universal Life"], {
		required_error: "Please select a policy type",
	}),
	coverageAmount: z.coerce.number().gte(2000, { message: "Coverage amount should be more than 2000" }).lte(10000, {message: "Coverage amount should not exceed 10000"}),

}

const lifeInsuranceHealthDetailsSchema = {
	// HEALTH DETAILS
	smoke: z.boolean().default(false).optional(),
	drink: z.boolean().default(false).optional(),
	medicalCondition: z.string(), medications: z.string(),
}

export const lifeInsuranceFormSchema = z.object({
	...personalDetailsSchema, 
	...contactDetailsSchema,
  ...lifeInsurancePolicyDetailsSchema,
	...lifeInsuranceHealthDetailsSchema
});


export const healthInsuranceFormSchema = z.object({
	...personalDetailsSchema, 
	...contactDetailsSchema,
  ...lifeInsurancePolicyDetailsSchema,
	...lifeInsuranceHealthDetailsSchema
});