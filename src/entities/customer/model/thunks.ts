import { createAsyncThunk } from "@reduxjs/toolkit";

import { customersAPI, ICustomer } from "@/shared/api";
import { isArray } from "@/shared/type-guard";

/**
 * Thunk
 * @returns Возвращает массив клиентов полученных из API или ошибку
 */
export const fetchAllCustomers = createAsyncThunk<
  ICustomer[],
  undefined,
  { rejectValue: string; state: RootState }
>("transactions/GET_ALL", async (_, { rejectWithValue }) => {
  try {
    const response = await customersAPI.getAll();

    if (!isArray(response.data)) { // TODO type guard server responce
      return rejectWithValue("Не корректный ответ сервера");
    }

    return response.data;
  } catch (err) {
    return rejectWithValue(
      "Произошла ошибка, попробуйте перезагрузить страницу"
    );
  }
});
