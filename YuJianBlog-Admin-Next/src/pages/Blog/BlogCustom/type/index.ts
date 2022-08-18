import { UseFormReturnType } from "@mantine/form/lib/use-form";
import { UseMutateAsyncFunction } from "react-query";

export interface BlogCustom {
  id: number;
  slogan: string;
  footer: string;
}

export interface BlogCustomIocPropsType {
  mutateAsync: UseMutateAsyncFunction<{}, unknown, BlogCustom, unknown>
  customForm: UseFormReturnType<BlogCustom>
  children: JSX.Element
}