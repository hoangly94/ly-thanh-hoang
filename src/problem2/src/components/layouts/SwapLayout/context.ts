import { useState } from "react";

export const useBrandLayoutContextValues = () => {
  // const [requestData, setRequestData] = useState<BrandListForm>();
  // const [total, setTotal] = useState(0);
  // const [paginationData, setPaginationData] = useState<Record<number, Brand>>(
  //   {},
  // );

  return {
    // paginationData,
    // setPaginationData,
    // requestData,
    // setRequestData,
    // total,
    // setTotal,
  };
};

export type BrandLayoutContextType = ReturnType<
  typeof useBrandLayoutContextValues
>;
