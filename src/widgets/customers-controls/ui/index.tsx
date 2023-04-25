import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import { typedMemo } from "@/shared/hocs";
import { Subtitle } from "@/shared/ui/subtitle";
import { CustomersSearch } from "@/features/customer-search";
import { useAddCustomer } from "@/features/popup";

import { ComponentLayout } from "./component-layout";

export const CustomersControls: React.FC = typedMemo(() => {
  const addCustomer = useAddCustomer();

  return (
    <ComponentLayout>
      <Subtitle style={{ width: "100%" }}>Клиенты</Subtitle>

      <CustomersSearch />

      <Button
        onClick={addCustomer}
        variant="contained"
        startIcon={<AddIcon />}
        style={{ minWidth: 220, height: 40 }}
      >
        Добавить клиента
      </Button>
    </ComponentLayout>
  );
});
