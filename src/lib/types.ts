export type Category = {
  id: number;
  name: string;
  sort: number;
};

export type Item = {
  id: number;
  category_id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  available: number;
  sort: number;
};

export type OrderLine = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

export type Order = {
  id: number;
  created_at: string;
  name: string;
  phone: string;
  comment: string;
  point: string;
  items_json: string;
  total: number;
  status: "new" | "confirmed" | "paid" | "done" | "cancelled";
};

export type Point = {
  name: string;
  address: string;
  hours: string;
};

export type Settings = {
  manager_phone: string; // digits only, for wa.me
  site_phone: string; // human-readable
  points: Point[];
  instagram: string;
  telegram: string;
};
