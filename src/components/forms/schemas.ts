import { z } from "zod";

// PERSONAL DETAILS
const personalDetailsSchema = {
	name: z.string().min(1, { message: "Name is required" }),
	gender: z.enum(["male", "female", "other"], {
		required_error: "Please select a gender",
	}),
	married: z.enum(["married", "single"], {
		required_error: "Please select an option",
	}),
};

// CONTACT DETAILS
const contactDetailsSchema = {
	city: z.string().min(1, { message: "City is required" }),
	zip: z.string().regex(/^\d{6}$/, { message: "ZIP Code must be exactly 5 digits" }),
	country: z.string().min(1, { message: "Country is required" }),
	email: z.string().email().min(1, { message: "Email is required" }),
	address: z.string().min(1, { message: "Address is required" }).min(20, { message: "Address should be longer than 20 characters" }),
};

// LIFE INSURANCE
const lifeInsurancePolicyDetailsSchema = {
	policyType: z.enum(["Term Life", "Whole Life", "Universal Life"], {
		required_error: "Please select a policy type",
	}),
	coverageAmount: z.coerce.number().gte(2000, { message: "Coverage amount should be more than 2000" }).lte(10000, { message: "Coverage amount should not exceed 10000" }),
};

const lifeInsuranceHealthDetailsSchema = {
	smoke: z.boolean().default(false).optional(),
	drink: z.boolean().default(false).optional(),
	medicalCondition: z.string().optional(),
	medications: z.string().optional(),
};

// HEALTH INSURANCE
const healthInsuraceHealthDetailsSchema = {
	medicalCondition: z.string().optional(),
	medications: z.string().optional(),
	surgeries: z.string().optional(),
};

const healthInsurancePolicyDetailsSchema = {
	coverageType: z.enum(["Individual", "Family"], {
		required_error: "Please select a coverage type",
	}),
	preferredNetwork: z.enum(["HMO", "PPO", "EPO"], {
		required_error: "Please select a preferred network",
	}),
	deductableAmount: z.coerce.number().gte(2000, { message: "Deductable amount should be more than 2000" }).lte(10000, { message: "Coverage amount should not exceed 10000" }),
	preferredHospital: z.string(),
};

// CAR INSURANCE
const carInsuranceVehicleDetailsSchema = {
	vehicleMake: z.string(),
	vehicleModel: z.string(),
	// yearOfManufacture: z.string()
	vehicleIdentificationNumber: z.coerce.number(),
	mileage: z.coerce.number(),
};
const carInsuraceDrivingDetailsSchema = {
	drivingHistory: z.string(), // accidents/violation is any
	usage: z.enum(["Personal", "Business"], {
		required_error: "Please select a usage",
	}),
	driverInfo: z.string(),
	annualMileage: z.coerce.number(),
};
const carInsurancePolicyDetailsSchema = {
	coverageType: z.enum(["Liability", "Collision", "Comprehensive"], {}),
	deductableAmount: z.coerce.number(),
	additionalCoverage: z.enum(["Rental Reimbursement", "Roadside Assistance"], {}).optional(),
	paymentFrequency: z.enum(["monthly", "quarterly", "annually"], {
		required_error: "Please select a frequency",
	}),
};

// EXPORTS
export const lifeInsuranceFormSchema = z.object({
	...personalDetailsSchema,
	...contactDetailsSchema,
	...lifeInsurancePolicyDetailsSchema,
	...lifeInsuranceHealthDetailsSchema,
});

export const healthInsuranceFormSchema = z.object({
	...personalDetailsSchema,
	...contactDetailsSchema,
	...healthInsurancePolicyDetailsSchema,
	...healthInsuraceHealthDetailsSchema,
});

export const carInsuranceFormSchema = z.object({
	...personalDetailsSchema,
	...contactDetailsSchema,
	...carInsuranceVehicleDetailsSchema,
	...carInsuraceDrivingDetailsSchema,
	...carInsurancePolicyDetailsSchema,
});
