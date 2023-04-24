import { typedMemo } from "@/shared/hocs";
import { Popup } from "@/shared/ui/popup";

import { AddCustomerForm } from "./add-customer-form/ui";

interface IProps {
  onClose: () => void;
}

export const AddCustomerPopup: React.FC<IProps> = typedMemo(({ onClose }) => {
  return (
    <Popup title="Создание Клиента" contentWidth={700} onClose={onClose}>
      <AddCustomerForm />
    </Popup>
  );
});
