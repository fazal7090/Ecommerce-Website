"use client"
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Billboard } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";


interface OrderClientProps {
  data: OrderColumn[];
}

export const BillboardClient: React.FC<OrderClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();



  return (
    <>
     
        <Heading
          title={`Orders (${data.length})`}
          description="Orders for your store"
        />
        
      <Separator />
      <DataTable searchKey="products" columns={columns} data={data} />

    </>
  );
};

