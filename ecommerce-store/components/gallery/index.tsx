"use client";

import Image from "next/image";
import {
  TabGroup,
  TabList,
  TabPanels,
  TabPanel
} from "@headlessui/react";


import { Image as ImageType } from "@/types";
import GalleryTab from "./gallary-tab";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({
  images
}) => {
  return (
    <TabGroup as="div" className="flex flex-col">
    <div className="order-1">
      <TabPanels className="aspect-square w-full">
        {images.map((image) => (
          <TabPanel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                fill
                src={image.url}
                alt="Image"
                className="object-cover object-center"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </div>
  
    <div className="order-2 mt-6">
      <TabList className="grid grid-cols-4 gap-6">
        {images.map((image) => (
          <GalleryTab key={image.id} image={image} />
        ))}
      </TabList>
    </div>
  </TabGroup>
  
  );
};

export default Gallery;

  