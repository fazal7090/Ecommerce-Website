import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboards";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products=await getProducts({});
  const billboard = await getBillboard("1ceea387-c790-4935-b498-e8e262dd2620"); 

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard  data={billboard} /> 
      
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
  <ProductList title="Featured Products" items={products} />
</div>
</div>
    </Container>
  );
};

export default HomePage;
