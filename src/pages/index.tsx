import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { PageLayout } from "@/shared/ui/page-layout";
import { Section } from "@/shared/ui/section";
import { Layout } from "@/shared/ui/layout";
import { fetchAllCustomers } from "@/entities/customer";
import { CustomersTable } from "@/features/customers-table";
import { CustomersControls } from "@/widgets/customers-controls";

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
    return (
      <Layout>
        <Section>Загрузка данных о клиентах...</Section>
      </Layout>
    );
  }

  if (select.error) {
    return (
      <Layout>
        <Section>{select.error}</Section>
      </Layout>
    );
  }

  if (!select.customers.length) {
    return (
      <Layout>
        <Section>Список клиентов пуст</Section>
      </Layout>
    );
  }

  return (
    <PageLayout title="Клиенты">
      <main>
        <Section>
          <Layout>
            <CustomersControls />

            <CustomersTable />
          </Layout>
        </Section>
      </main>
    </PageLayout>
  );
};

export default Main;
