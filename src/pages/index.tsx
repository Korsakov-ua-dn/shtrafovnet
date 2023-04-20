import { useEffect } from "react";
import { Roboto } from "next/font/google";

import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { PageLayout } from "@/shared/ui/page-layout";
import { Layout } from "@/shared/ui/layout";
import { ICustomer } from "@/shared/api";
import { fetchAllCustomers } from "@/entities/customer";

// const inter = Roboto({ subsets: ["cyrillic"], weight: ["400"] });
// className={inter.className}

const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  const select = useAppSelector((state) => ({
    customers: state.customer.data,
    loading: state.customer.loading,
    error: state.customer.error,
  }));

  useEffect(() => {
    dispatch(fetchAllCustomers());
  }, [dispatch]);

  if (select.loading) {
    return <Layout>Загрузка данных о клиентах...</Layout>;
  }

  if (select.error) {
    return <Layout>{select.error}</Layout>;
  }

  if (!select.customers.length) {
    return <Layout>Список клиентов пуст</Layout>;
  }

  return (
    <PageLayout title="Клиенты">
      <main>
        <Layout>
          {/* <CustomerControls /> */}

          <h1>Table</h1>

          <ul>
            {select.customers.map((c: ICustomer) => (
              <li key={c.id}>{c.name}</li>
            ))}
          </ul>
        </Layout>
      </main>
    </PageLayout>
  );
};

export default Main;
