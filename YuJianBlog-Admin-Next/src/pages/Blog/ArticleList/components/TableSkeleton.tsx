import { Skeleton } from "@mantine/core";
import { newArray } from "../../../../utils";
import { TableSkeletonProps } from "../type";

const TableSkeleton = ({ row, col }: TableSkeletonProps) => {
  const JSXElement = newArray(row).map((mapItem2: any, index) => (
    <tr key={index}>
      {newArray(col).map((mapItem2: any, index2) => (
        <td key={index2}>
          <Skeleton height={8} radius="xl" />
        </td>
      ))}
    </tr>
  ));

  return <>{JSXElement}</>;
};

export default TableSkeleton;
