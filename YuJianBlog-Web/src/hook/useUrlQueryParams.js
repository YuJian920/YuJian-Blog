import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { subset } from "../utils";

const useUrlQueryParmams = (keys) => {
  const [searchParmas] = useSearchParams;
  const [stateKeys] = useState(keys);

  return useMemo(() => {
    subset(Object.fromEntries(searchParmas), stateKeys);
  }, [searchParmas, stateKeys]);
};

export default useUrlQueryParmams;
