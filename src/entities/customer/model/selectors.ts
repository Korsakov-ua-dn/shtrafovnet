import { createSelector } from "@reduxjs/toolkit";

const getAllCustomers = (state: RootState) => state.customer.data;
const getSearchValue = (state: RootState) => state["customer-search"].value;
/**
 * Селектор выбора клиентов
 * @returns Возвращает отфильтрованный по имени массив клиентов согласно параметров поиска
 */
export const getCustomersBySearch = createSelector(
  [getAllCustomers, getSearchValue],
  (allCustomers, searchValue) => {
    if (searchValue) {
      // Поиск не чувствительный к регистру
      const regex = new RegExp(`${searchValue}`, "i");

      return allCustomers.filter((item) => {
        return regex.test(item["name"].toString());
      });
    } else return allCustomers;
  }
);
