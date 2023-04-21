import Button from "@mui/material/Button";

import { typedMemo } from "@/shared/hocs";
import { Popup } from "@/shared/ui/popup";
import { Form } from "@/shared/ui/form";

import "./style.scss";

interface IProps {
  onClose: () => void;
}

export const AddCustomer: React.FC<IProps> = typedMemo(({ onClose }) => {
  return (
    <Popup title="Создание Клиента" onClose={onClose}>
      <Form onSubmit={() => {}} className="AddCustomer">
        sdfsf
        <Button type="submit" variant="contained">
          Добавить клиента
        </Button>
      </Form>
    </Popup>
  );
});
