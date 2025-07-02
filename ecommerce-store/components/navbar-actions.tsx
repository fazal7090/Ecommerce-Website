"use client";

import { ShoppingBag } from "lucide-react";
import Button from "@/components/ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {

  const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
  setIsMounted(true);
}, []);


const router=useRouter();
const cart=useCart();

if (!isMounted) {
  return null;
}


  return (
    <div className="ml-auto flex items-center gap-x-4">
  <Button 
   onClick={()=>router.push("/cart")}
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.5rem", // space between icon and number
      borderRadius: "9999px", // full rounded (like Tailwind's rounded-full)
      backgroundColor: "#000000",
      padding: "0.5rem 1rem",
    }}
   
  >
    <ShoppingBag size={20} color="white" />
    <span
      style={{
        fontSize: "0.875rem", // text-sm
        fontWeight: 500,       // font-medium
        color: "#ffffff",      // text-white
        lineHeight: 1,         // leading-none
      }}
    >
      {cart.items.length}
    </span>
  </Button>
</div>

  
  );
};

export default NavbarActions;
