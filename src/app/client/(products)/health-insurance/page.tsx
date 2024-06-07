import ProductDescription from "@/components/product-description";
import { PRODUCT_DESCRIPTION } from "@/static/products";

const { healthInsuranceDescription } = PRODUCT_DESCRIPTION;

export default function HealthInsurance() {
	return (
		<main>
			<ProductDescription description={healthInsuranceDescription} />
			{/* form */}
		</main>
	);
}
