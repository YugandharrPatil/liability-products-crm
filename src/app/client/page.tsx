import { Button } from "@/components/ui/button";
import Link from "next/link";

const products = [
	{
		id: 1,
		name: "Life Insurance",
		description: "Secure their future today, so they can live worry-free tomorrow.",
		link: "/client/life-insurance",
	},
	{
		id: 2,
		name: "Health Insurance",
		description: "Your health, our priority—secure your future with peace of mind today.",
		link: "/client/health-insurance",
	},
	{
		id: 3,
		name: "Car Insurance",
		description: "Drive with confidence—protect your journey with our unbeatable car insurance!",
		link: "/client/car-insurance",
	},
];

export default function ClientPage() {
	return (
		<main className="container">
			<h1 className="text-3xl text-center mt-6">Safeguard your well-being—apply for comprehensive insurance coverage today!</h1>
			<div className="flex justify-center flex-wrap gap-4 mx-auto w-fit mt-10">
				{products.map((product) => (
					<div key={product.id} className="flex-1 border rounded-md border-input bg-background hover:bg-accent hover:text-accent-foreground cursor-pointer p-4 border-black">
						<h3 className="font-bold text-lg">{product.name}</h3>
						<p className="mb-2">{product.description}</p>
						<Button asChild>
							<Link href={product.link}>Apply Now!</Link>
						</Button>
					</div>
				))}
			</div>
		</main>
	);
}
