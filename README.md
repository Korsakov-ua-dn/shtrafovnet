# "Next(TS) - Тестовое задание (Сложная форма, работа с данными)"

## Функционал:
  - таблица клиентов с поиском по имени;
  - копи-паст id клиента по клику;
  - менеджер модальных окон;
  - форма добавления клиента с возможностью динамически добавлять поля;
  - схема валидации данных;

### Скриншоты приложения:

 1. Табличный компонент -

  ![Screenshot of table component](/../screenshot/screenshots/table.png?raw=true "Табличный компонент")

 2. Табличный компонент с введенным значением в поиск -

  ![Screenshot of table component filtered by search](/../screenshot/screenshots/table_search.png?raw=true "Табличный компонент отфильтрованный по поиску")

 3. Скриншот модального она с формой добавления нового клиента -

  ![Screenshot of popup](/../screenshot/screenshots/popup.png?raw=true "Модальное окно")

### Ссылка на приложение развернутое на хостинге vercel:
https://shtrafovnet-tau.vercel.app

## Технологический стек:

Feature Sliced Design, NextJS, TypeScript, Redux Toolkit, Reselect, Axios, miragejs, react-hook-form, yup, Material UI, SCSS.

## Требования

- Node.js >= 16

## Установка

`npm install`

## Запуск для разработки

В режиме разработки (development) приложение запускается командой:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Сборка для продакшена

Для публикации проекта на сервере сначала выполняется сборка приложения командой:

`npm run build`
