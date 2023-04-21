import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
// import { useAppSelector } from '@/shared/hooks';
import { typedMemo } from "@/shared/hocs";
import { Subtitle } from "@/shared/ui/subtitle";

import { ComponentLayout } from "./component-layout";

export const CustomersControls: React.FC = typedMemo(() => {
  return (
    <ComponentLayout>
      <Subtitle>Клиенты</Subtitle>

      <Button variant="contained" startIcon={<AddIcon />}>
        Добавить клиента
      </Button>
      {/* <SearchPanel scheme={scheme} /> */}
    </ComponentLayout>
  );
});
