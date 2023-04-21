import Button from "@mui/material/Button";

import { typedMemo } from "@/shared/hocs";
import { Popup } from "@/shared/ui/popup";
import { Form } from "@/shared/ui/form-component/form";

import { AddCustomerForm } from "./add-customer-form";
// import "./style.scss";

interface IProps {
  onClose: () => void;
}

export const AddCustomerPopup: React.FC<IProps> = typedMemo(({ onClose }) => {
  return (
    <Popup title="Создание Клиента" contentWidth={700} onClose={onClose}>
      <AddCustomerForm />

      {/* <Form onSubmit={() => {}} className="AddCustomer"> */}

      {/* <Button type="submit" variant="contained">
          Добавить клиента
        </Button> */}
      {/* </Form> */}
    </Popup>
  );
});
