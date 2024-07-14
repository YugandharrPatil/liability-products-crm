import CarInsuranceData from "@/components/crm/fetch/car-insurance-data";
import HealthInsuranceData from "@/components/crm/fetch/health-insurance-data";
import LifeInsuranceData from "@/components/crm/fetch/life-insurance-data";

export default async function CRM() {
	return (
		<>
			<h1 className="text-3xl font-bold text-center my-4">Products CRM Page</h1>
			<LifeInsuranceData />;
			<HealthInsuranceData />
			<CarInsuranceData />
		</>
	);
}
