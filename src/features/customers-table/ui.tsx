import { memo, useCallback } from "react";

import { Table, Tbody, Thead } from "@/shared/ui/table-component";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { ICustomer } from "@/shared/api";
import { scheme } from "@/entities/customer";

export const CustomersTable: React.FC = () => {
  // const dispatch = useAppDispatch();
  const customers = useAppSelector((state) => state.customer.data);

  return (
    <Table colorScheme="zebra">
      <Thead scheme={scheme} />
      <Tbody items={customers} scheme={scheme} />
    </Table>
  );
};
