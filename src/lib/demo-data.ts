import type { Category, Item, Settings } from "./types";

export const DEMO_CATEGORIES: Category[] = [
  { id: 1, name: "Выпечка", sort: 0 },
  { id: 2, name: "Горячие блюда", sort: 1 },
  { id: 3, name: "Сладости", sort: 2 },
  { id: 4, name: "Напитки", sort: 3 },
];

export const DEMO_ITEMS: Item[] = [
  { id: 1, category_id: 1, name: "Чуду с мясом", description: "Тонкое чуду с сочной мясной начинкой", price: 150, image: "", available: 1, sort: 0 },
  { id: 2, category_id: 1, name: "Чуду с зеленью", description: "С творогом и свежей зеленью", price: 130, image: "", available: 1, sort: 1 },
  { id: 3, category_id: 1, name: "Лепёшка тандырная", description: "Горячая, прямо из печи", price: 60, image: "", available: 1, sort: 2 },
  { id: 4, category_id: 1, name: "Пирожок с картошкой", description: "Домашний, печёный", price: 50, image: "", available: 1, sort: 3 },
  { id: 5, category_id: 2, name: "Хинкал аварский", description: "С мясом, чесночным соусом и бульоном", price: 320, image: "", available: 1, sort: 0 },
  { id: 6, category_id: 2, name: "Курзе с мясом", description: "Порция с домашним соусом", price: 280, image: "", available: 1, sort: 1 },
  { id: 7, category_id: 2, name: "Плов с говядиной", description: "Рассыпчатый, с морковью и специями", price: 250, image: "", available: 1, sort: 2 },
  { id: 8, category_id: 3, name: "Пахлава", description: "Медовая, с грецким орехом", price: 120, image: "", available: 1, sort: 0 },
  { id: 9, category_id: 3, name: "Чак-чак", description: "Хрустящий, в меду", price: 100, image: "", available: 1, sort: 1 },
  { id: 10, category_id: 3, name: "Эклер", description: "С заварным кремом", price: 90, image: "", available: 1, sort: 2 },
  { id: 11, category_id: 4, name: "Чай чёрный", description: "Заварной, 0,4 л", price: 50, image: "", available: 1, sort: 0 },
  { id: 12, category_id: 4, name: "Компот домашний", description: "Из сезонных фруктов, 0,4 л", price: 60, image: "", available: 1, sort: 1 },
];

export const DEMO_SETTINGS: Settings = {
  manager_phone: "79658638835",
  site_phone: "+7 965 863-88-35",
  points: [
    {
      name: "Гранат · демо-точка",
      address: "Каспийск · демонстрационный адрес",
      hours: "08:00–22:00",
    },
  ],
  instagram: "",
  telegram: "",
};
