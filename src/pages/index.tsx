import { useEffect } from "react";
import { Roboto } from "next/font/google";

import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { PageLayout } from "@/shared/ui/page-layout";
import { Section } from "@/shared/ui/section";
import { Layout } from "@/shared/ui/layout";
import { ICustomer } from "@/shared/api";
import { fetchAllCustomers } from "@/entities/customer";
import { CustomersTable } from "@/features/customers-table";

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
        <Section>
          <Layout>
            {/* <CustomerControls /> */}

            <CustomersTable />
          </Layout>
        </Section>
      </main>
    </PageLayout>
  );
};

export default Main;
