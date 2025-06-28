"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { Color, Size } from "@/types";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ 
  data, 
  name, 
  valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
  
    const query = {
      ...current,
      [valueKey]: id
    };
  
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }
  
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query
      },
      { skipNull: true }
    );
  
    router.push(url);
  };
  

  // ← This return must be here, not inside onClick!
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
      {data.map((filter) => {
  const isSelected = selectedValue === filter.id;
  console.log("filter", filter.id, "selectedValue", selectedValue, "→", isSelected);

  return (
    <button
    key={filter.id}
    onClick={() => onClick(filter.id)}
    style={{
      backgroundColor: isSelected ? "#000000" : "#ffffff",
      color:           isSelected ? "#ffffff" : "#000000",
      border:          isSelected ? "1px solid transparent" : "1px solid #d1d5db",
      padding:         "0.5rem 1rem",
      borderRadius:    "0.375rem",
    }}
  >
    {filter.name}
  </button>
  );
})}

      </div>
    </div>
  );

};

export default Filter;
