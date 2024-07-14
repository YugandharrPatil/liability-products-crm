"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "./ui/input";

export default function TestChild() {
	const { register } = useFormContext();
	return <Input {...register("test")} />;
}
