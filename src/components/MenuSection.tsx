"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { Category, Item } from "@/lib/types";
import { useCart } from "./cart";
import { PomIcon } from "./Logo";

export function MenuSection({ categories, items }: { categories: Category[]; items: Item[] }) {
  const withItems = categories.filter((c) => items.some((i) => i.category_id === c.id));
  const [active, setActive] = useState<number>(withItems[0]?.id ?? 0);
  const shown = items.filter((i) => i.category_id === active);

  return (
    <div>
      <div className="mb-7 flex flex-wrap justify-center gap-2">
        {withItems.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition cursor-pointer ${
              active === c.id
                ? "bg-brand-600 text-cream-50"
                : "bg-cream-50 text-choco-800/80 hover:bg-brand-50 hover:text-brand-700"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {shown.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function ItemCard({ item }: { item: Item }) {
  const { add, dec, qtyOf } = useCart();
  const qty = qtyOf(item.id);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-cream-300/80 bg-cream-50 transition hover:shadow-lg hover:shadow-brand-900/5">
      <div className="flex h-36 items-center justify-center overflow-hidden bg-cream-200 sm:h-40">
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
        ) : (
          <PomIcon className="h-16 w-16 text-brand-200" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-3.5">
        <p className="text-sm font-black leading-snug">{item.name}</p>
        {item.description && (
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-choco-800/60">
            {item.description}
          </p>
        )}
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-base font-black text-brand-700">{item.price} ₽</span>
          {qty === 0 ? (
            <button
              onClick={() => add({ id: item.id, name: item.name, price: item.price })}
              className="flex size-8 items-center justify-center rounded-full bg-brand-600 text-cream-50 transition hover:bg-brand-700 cursor-pointer"
              aria-label={`Добавить: ${item.name}`}
            >
              <Plus className="size-4" />
            </button>
          ) : (
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => dec(item.id)}
                className="flex size-7 items-center justify-center rounded-full border border-brand-300 text-brand-700 hover:bg-brand-50 cursor-pointer"
                aria-label="Убавить"
              >
                <Minus className="size-3.5" />
              </button>
              <span className="w-5 text-center text-sm font-black">{qty}</span>
              <button
                onClick={() => add({ id: item.id, name: item.name, price: item.price })}
                className="flex size-7 items-center justify-center rounded-full bg-brand-600 text-cream-50 hover:bg-brand-700 cursor-pointer"
                aria-label="Прибавить"
              >
                <Plus className="size-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
