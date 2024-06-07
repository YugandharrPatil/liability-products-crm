import Link from "next/link";

const products = [
	{
		id: 1,
		name: "Life Insurance",
		description: "sample description",
		link: "/client/life-insurance",
	},
	{
		id: 2,
		name: "Health Insurance",
		description: "sample description",
		link: "/client/health-insurance",
	},
	{
		id: 3,
		name: "Car Insurance",
		description: "sample description",
		link: "/client/car-insurance",
	},
	{
		id: 4,
		name: "Test Insurance",
		description: "sample description",
		link: "/client/sex-insurance",
	},
];

export default function ClientPage() {
	return (
		<main className="container text-center">
			<h1 className="text-3xl mt-6">Liability Products Subscription Page</h1>
			<div className="flex justify-center flex-wrap gap-4 mx-auto w-fit mt-10">
				{products.map((product) => (
					<Link key={product.id} href={product.link} className="border rounded-md border-input bg-background hover:bg-accent hover:text-accent-foreground cursor-pointer p-4 border-black">
						<h3 className="font-bold text-left">{product.name}</h3>
						<p>{product.description}</p>
					</Link>
				))}
			</div>
		</main>
	);
}
