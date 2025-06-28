import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;



const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);

  console.log(res);

  if (!res.ok) {
    throw new Error(`Failed to fetch product with ID ${id}`);
  }

  return res.json();
};

export default getProduct;

