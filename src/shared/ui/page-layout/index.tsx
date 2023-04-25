import Head from "next/head";

import { PopupsManager } from "@/features/popup";

interface IProps {
  children: string | React.ReactNode | React.ReactNode[];
  title?: string;
  description?: string;
  keywords?: string;
}

/**
 * Добавление title и meta на страницу
 */
export const PageLayout: React.FC<IProps> = ({
  children,
  title,
  description,
  keywords,
}) => {
  return (
    <>
      <Head>
        <title>{title || "Тестовое задание"}</title>
        <meta
          name="description"
          content={
            description || "Тестовое задание на позицию Frontend разработчика"
          }
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="keywords" content={keywords || "frontend"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {children}

      <PopupsManager />
    </>
  );
};
