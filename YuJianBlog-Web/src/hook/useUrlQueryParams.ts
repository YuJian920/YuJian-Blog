import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { subset } from "../utils";

const useUrlQueryParmams = <K extends string>(keys: K[]) => {
  const [searchParmas] = useSearchParams();
  const [stateKeys] = useState(keys);

  return useMemo(() => {
    subset(Object.fromEntries(searchParmas), stateKeys) as {
      [key in K]: string;
    };
  }, [searchParmas, stateKeys]);
};

export default useUrlQueryParmams;
