import { formatNumber } from '@/shared/lib';

/**
 * Предоставляет доступ по ключу к функциям форматирования данных
 */
export const dataTransferObject = {
  date: (data: string): string => {
    const date = new Date(data);
    return date
      .toLocaleString([], {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      })
      .replace(',', '');
  },
  deferral_days: (data: number) => `${formatNumber(data)} ${days[form(data)]}`,
};

const days = {
  zero: "дней",
  one: "день",
  two: "дня",
  few: "дней",
  many: "дней",
  other: "дней", 
};

function form(number: number) {
  return new Intl.PluralRules("ru-RU").select(number)
}
