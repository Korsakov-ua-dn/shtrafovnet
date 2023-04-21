import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

// import { useAppSelector } from '@/shared/hooks';
import { typedMemo } from "@/shared/hocs";
import { Subtitle } from "@/shared/ui/subtitle";
import { useAddCustomer } from "@/features/popup";

import { ComponentLayout } from "./component-layout";

export const CustomersControls: React.FC = typedMemo(() => {
  const addCustomer = useAddCustomer();

  return (
    <ComponentLayout>
      <Subtitle>Клиенты</Subtitle>

      <Button onClick={addCustomer} variant="contained" startIcon={<AddIcon />}>
        Добавить клиента
      </Button>
      {/* <SearchPanel scheme={scheme} /> */}
    </ComponentLayout>
  );
});
