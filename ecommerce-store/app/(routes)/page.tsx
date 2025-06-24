import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboards";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("1ceea387-c790-4935-b498-e8e262dd2620"); 

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard  data={billboard} /> {/* ❌ Billboard not imported & no props passed */}
      </div>
    </Container>
  );
};

export default HomePage;
