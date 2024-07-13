import CarInsuranceData from "@/components/crm/fetch/car-insurance-data";
import LifeInsuranceData from "@/components/crm/fetch/life-insurance-data";

export default function CRM() {
	return (
		<>
			<LifeInsuranceData />
			<CarInsuranceData />
		</>
	);
}
