import { Table, Tbody, Thead } from "@/shared/ui/table-component";
import { useAppSelector } from "@/shared/hooks";
import { getCustomersBySearch, scheme } from "@/entities/customer";

export const CustomersTable: React.FC = () => {
  const customersToRender = useAppSelector(getCustomersBySearch);

  return (
    <Table colorScheme="zebra">
      <Thead scheme={scheme} />
      <Tbody items={customersToRender} scheme={scheme} />
    </Table>
  );
};
