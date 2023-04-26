import { Table, Tbody, Thead } from "@/shared/ui/table-component";
import { useAppSelector } from "@/shared/hooks";
import { getCustomersBySearch, scheme } from "@/entities/customer";

export const CustomersTable: React.FC = () => {
  const customersForRender = useAppSelector(getCustomersBySearch);

  return (
    <Table colorScheme="zebra">
      <Thead scheme={scheme} />
      <Tbody items={customersForRender} scheme={scheme} />
    </Table>
  );
};
