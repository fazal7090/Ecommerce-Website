import { getGraphRevenue } from "@/actions/get-graph-revenue";
import { getSalesCount } from "@/actions/get-sales-count";
import { getStockCount } from "@/actions/get-stock-count";
import { getTotalRevenue } from "@/actions/get-total-revenue";
import { Overview } from "@/components/overview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { formatter } from "@/lib/utils";
import { CreditCardIcon, DollarSign, Package } from "lucide-react";
// import prismadb from "@/lib/prismadb"; // (currently commented out)

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {

  const totalRevenue = await getTotalRevenue(params.storeId);
const salesCount = await getSalesCount(params.storeId);
const stockCount = await getStockCount(params.storeId);
const graphRevenue = await getGraphRevenue(params.storeId);



  return (
    <div className="grid gap-4 grid-cols-3">
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium">
          Total Revenue
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
  
      <CardContent>
        <div className="text-2xl font-bold">
          {formatter.format(totalRevenue)}
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium">
          Sales
        </CardTitle>
        <CreditCardIcon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
  
      <CardContent>
        <div className="text-2xl font-bold">
          {formatter.format(salesCount)}
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium">
          Product in Stock
        </CardTitle>
        <Package className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
  
      <CardContent>
        <div className="text-2xl font-bold">
          {formatter.format(stockCount)}
        </div>
      </CardContent>
    </Card>

    <Card className="col-span-4">
  <CardHeader>
    <CardTitle>Overview</CardTitle>
  </CardHeader>
  <CardContent className="pl-2">
    <Overview data={graphRevenue} />
  </CardContent>
</Card>

  </div>
  
  );
};

export default DashboardPage;



  