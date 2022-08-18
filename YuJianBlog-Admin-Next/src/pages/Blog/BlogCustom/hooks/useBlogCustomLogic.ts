import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { BlogCustom } from "../type";
import useCustomEditAsync from "./useCustomEditAsync";
import useCustomGetAsync from "./useCustomGetAsync";

const initialValues: BlogCustom = {
  id: 0,
  slogan: "",
  footer: ""
};

const useBlogCustomLogic = () => {
  const { data: customData, isLoading: getCustomLoading } = useCustomGetAsync();
  const { mutateAsync: customMutateAsync, isLoading: editCustomLoading } = useCustomEditAsync();
  const customForm = useForm({ initialValues });

  useEffect(() => {
    if (customData) customForm.setValues(customData[0])
  }, [customData])

  return {
    customMutateAsync,
    isLoading: getCustomLoading || editCustomLoading,
    customForm
  };
};

export default useBlogCustomLogic;
