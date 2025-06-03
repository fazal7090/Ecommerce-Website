"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Modal } from "@/components/ui/model";

export default function Home() {
  return (
  <div>
     <Modal
     title="Test"
     description="Test description"
     isOpen={true}
     onClose={() => {}}
     >
      Children
     </Modal>
  </div>
  );
}
