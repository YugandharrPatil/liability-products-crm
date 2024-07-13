"use client";

// UI COMPONENTS
import { Card, CardContent } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";
// HOOKS
import { useFormContext } from "react-hook-form";

export default function LifeInsuranceForm() {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	return (
		<>
			<h1 className="text-center font-bold text-xl">Policy Details</h1>
			<CardContent>
				<div className="grid w-full items-center gap-4">
					{/* Policy Type */}
					<div>
						<Label htmlFor="policyType">Policy Type</Label>
						<div className="flex flex-col space-y-1.5">
							<RadioGroup id="policyType" defaultValue="term-life">
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="term-life" id="r1" {...register("policyType")} />
									<Label htmlFor="r1">Term Life</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="whole-life" id="r2" {...register("policyType")} />
									<Label htmlFor="r2">Whole Life</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="universal-life" id="r3" {...register("policyType")} />
									<Label htmlFor="r3">Universal Life</Label>
								</div>
							</RadioGroup>
							{errors.policyType && <p className="text-red-500">{`${errors.policyType.message}`}</p>}
						</div>
					</div>
					<div>
						<Label htmlFor="policyTerm">Policy Term</Label>
						<div className="flex flex-col space-y-1.5">
							<RadioGroup id="policyTerm" defaultValue="5">
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="5" id="r1" {...register("policyTerm")} />
									<Label htmlFor="r1">5</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="10" id="r2" {...register("policyTerm")} />
									<Label htmlFor="r2">10</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="20" id="r3" {...register("policyTerm")} />
									<Label htmlFor="r3">20</Label>
								</div>
							</RadioGroup>
							{errors.policyTerm && <p className="text-red-500">{`${errors.policyTerm.message}`}</p>}
						</div>
					</div>
					{/* coverage amount */}
					<div className="flex flex-col space-y-1.5">
						<Label htmlFor="coverageAmount">Coverage Amount &#8377;</Label>
						<Input {...register("coverageAmount", { required: "Please enter your coverage amount" })} type="number" placeholder="Amount" id="" autoComplete="off" />
						{errors.coverageAmount && <p className="text-red-500">{`${errors.coverageAmount.message}`}</p>}
					</div>

					<h1 className="text-center font-bold text-xl">Health Information</h1>
					<div>
						<div className="flex items-center space-x-2">
							<Checkbox id="smoke" value="smokes" {...register("smoke")} />
							<label htmlFor="smoke" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
								Smoke?
							</label>
							<Checkbox id="drink" value="drinks" {...register("drink")} />
							<label htmlFor="drink" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
								Drink?
							</label>
						</div>
					</div>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="medicalCondition">Pre-existing medical condition</Label>
							<Input {...register("medicalCondition", { required: "Please enter a medical condition if any" })} placeholder="Medical Condition" type="text" id="medical-condition" autoComplete="off" />
							{errors.medicalCondition && <p className="text-red-500">{`${errors.medicalCondition.message}`}</p>}
						</div>

						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="medications">Medications (if any)</Label>
							<Input {...register("medications", { required: "Please enter medications if any" })} placeholder="Medications" type="text" name="medications" id="medications" autoComplete="off" />
							{errors.medications && <p className="text-red-500">{`${errors.medications.message}`}</p>}
						</div>
					</div>
				</div>
			</CardContent>
		</>
	);
}
