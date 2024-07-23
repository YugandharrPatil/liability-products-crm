import CarInsuranceData from "@/components/crm/fetch/car-insurance-data";
import HealthInsuranceData from "@/components/crm/fetch/health-insurance-data";
import LifeInsuranceData from "@/components/crm/fetch/life-insurance-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function CRM() {
	return (
		<Tabs className="text-center mt-6">
			<h1 className="text-3xl font-bold text-center my-4">Products CRM Page</h1>
			<TabsList className="mb-4">
				<TabsTrigger value="life-insurance">Life Insurance</TabsTrigger>
				<TabsTrigger value="health-insurance">Health Insurance</TabsTrigger>
				<TabsTrigger value="car-insurance">Car Insurance</TabsTrigger>
			</TabsList>
			<TabsContent value="life-insurance">
				<LifeInsuranceData />
			</TabsContent>
			<TabsContent value="health-insurance">
				<HealthInsuranceData />
			</TabsContent>
			<TabsContent value="car-insurance">
				<CarInsuranceData />
			</TabsContent>
		</Tabs>
	);
}
