import { typedMemo } from "@/shared/hocs";
import { useAppDispatch } from "@/shared/hooks";
import { Popup } from "@/shared/ui/popup";
import { addCustomer } from "@/entities/customer";

import { prepareData } from "../../lib/prepare-add-customer-data";

import { AddCustomerForm, FormData } from "./add-customer-form";
interface IProps {
  onClose: () => void;
}

export const AddCustomerPopup: React.FC<IProps> = typedMemo(({ onClose }) => {
  const dispatch = useAppDispatch();

  const onSubmit = (data: FormData) => {
    const payload = prepareData(data);
    dispatch(addCustomer(payload))
    onClose();
  }

  return (
    <Popup title="Создание Клиента" contentWidth={700} onClose={onClose}>
      <AddCustomerForm onSubmit={onSubmit}/>
    </Popup>
  );
});
