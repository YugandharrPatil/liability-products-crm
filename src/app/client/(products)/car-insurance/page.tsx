import ProductDescription from "@/components/product-description";
import { PRODUCT_DESCRIPTION } from "@/static/products";

const { carInsuranceDescription } = PRODUCT_DESCRIPTION;

export default function LifeInsurance() {
	return (
		<main>
			<ProductDescription description={carInsuranceDescription} />
			{/* form */}
		</main>
	);
}
