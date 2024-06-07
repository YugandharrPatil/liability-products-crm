import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
	return (
		<main className="container text-center">
			<h1 className="text-3xl font-bold my-6">Liability Products Application and CRM</h1>
			<div className="flex gap-4 w-fit mx-auto">
				<Button asChild>
					<Link href="/client">Client</Link>
				</Button>
				<Button asChild>
					<Link href="/crm">CRM</Link>
				</Button>
			</div>
		</main>
	);
}
