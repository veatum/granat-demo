"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Minus, Plus, ShoppingBasket, Trash2, X } from "lucide-react";
import { WhatsAppIcon } from "./icons";
import type { Point } from "@/lib/types";

export type CartLine = { id: number; name: string; price: number; qty: number };

type CartCtx = {
  lines: CartLine[];
  add: (line: Omit<CartLine, "qty">) => void;
  dec: (id: number) => void;
  remove: (id: number) => void;
  clear: () => void;
  qtyOf: (id: number) => number;
  total: number;
  count: number;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart outside CartProvider");
  return ctx;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  const api = useMemo<CartCtx>(() => {
    const total = lines.reduce((sum, line) => sum + line.price * line.qty, 0);
    const count = lines.reduce((sum, line) => sum + line.qty, 0);

    return {
      lines,
      total,
      count,
      open,
      setOpen,
      qtyOf: (id) => lines.find((line) => line.id === id)?.qty ?? 0,
      add: (line) =>
        setLines((current) => {
          const existing = current.find((item) => item.id === line.id);
          if (existing) {
            return current.map((item) =>
              item.id === line.id ? { ...item, qty: item.qty + 1 } : item
            );
          }
          return [...current, { ...line, qty: 1 }];
        }),
      dec: (id) =>
        setLines((current) =>
          current
            .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
            .filter((item) => item.qty > 0)
        ),
      remove: (id) => setLines((current) => current.filter((item) => item.id !== id)),
      clear: () => setLines([]),
    };
  }, [lines, open]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function CartButton() {
  const { count, setOpen } = useCart();

  return (
    <button
      onClick={() => setOpen(true)}
      className="relative flex min-h-11 items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-bold text-cream-50 transition hover:bg-brand-700 cursor-pointer"
      aria-label="Открыть заказ"
    >
      <ShoppingBasket className="size-4" />
      <span className="hidden sm:inline">Заказ</span>
      {count > 0 && (
        <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-gold-400 text-[11px] font-black text-choco-900">
          {count}
        </span>
      )}
    </button>
  );
}

function buildWhatsAppLink(
  managerPhone: string,
  lines: CartLine[],
  total: number,
  point: string,
  comment: string
) {
  const orderLines = lines.map(
    (line, index) => `${index + 1}. ${line.name} — ${line.qty} × ${line.price} ₽`
  );
  const message = [
    "Здравствуйте! Тестирую демо сайта «Гранат».",
    "",
    "Состав заказа:",
    ...orderLines,
    "",
    `Итого: ${total} ₽`,
    point ? `Точка: ${point}` : "",
    comment ? `Комментарий: ${comment}` : "",
    "",
    "Это демонстрационный заказ с сайта Veatum.",
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${managerPhone}?text=${encodeURIComponent(message)}`;
}

export function CartDrawer({
  points,
  managerPhone,
}: {
  points: Point[];
  managerPhone: string;
}) {
  const { lines, add, dec, remove, clear, total, open, setOpen } = useCart();
  const [point, setPoint] = useState(points[0]?.name ?? "");
  const [comment, setComment] = useState("");
  const waLink = buildWhatsAppLink(managerPhone, lines, total, point, comment);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-choco-900/55"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream-50 shadow-2xl"
        aria-label="Корзина"
      >
        <div className="flex items-center justify-between border-b border-cream-300 px-5 py-4">
          <div>
            <p className="text-lg font-black text-brand-700">Ваш заказ</p>
            <p className="text-xs text-choco-800/55">Данные не сохраняются</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="flex size-11 items-center justify-center rounded-full text-choco-800 hover:bg-cream-200 cursor-pointer"
            aria-label="Закрыть"
          >
            <X className="size-5" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center text-choco-800/60">
            <ShoppingBasket className="size-10" />
            <p className="font-semibold">Пока пусто — добавьте что-нибудь из меню</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {lines.map((line) => (
                <div key={line.id} className="mb-4 flex items-center gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold">{line.name}</p>
                    <p className="text-xs text-choco-800/60">{line.price} ₽</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => dec(line.id)}
                      className="flex size-8 items-center justify-center rounded-full border border-brand-200 text-brand-700 hover:bg-brand-50 cursor-pointer"
                      aria-label={`Убавить ${line.name}`}
                    >
                      <Minus className="size-3.5" />
                    </button>
                    <span className="w-6 text-center text-sm font-bold">{line.qty}</span>
                    <button
                      onClick={() => add({ id: line.id, name: line.name, price: line.price })}
                      className="flex size-8 items-center justify-center rounded-full border border-brand-200 text-brand-700 hover:bg-brand-50 cursor-pointer"
                      aria-label={`Прибавить ${line.name}`}
                    >
                      <Plus className="size-3.5" />
                    </button>
                  </div>
                  <p className="w-16 text-right text-sm font-black">{line.price * line.qty} ₽</p>
                  <button
                    onClick={() => remove(line.id)}
                    className="flex size-8 items-center justify-center text-choco-800/40 hover:text-brand-600 cursor-pointer"
                    aria-label={`Удалить ${line.name}`}
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-cream-300 px-5 py-4">
              <div className="mb-4 flex items-center justify-between text-lg font-black">
                <span>Итого</span>
                <span className="text-brand-700">{total} ₽</span>
              </div>
              <div className="flex flex-col gap-3">
                {points.length > 1 && (
                  <select
                    value={point}
                    onChange={(event) => setPoint(event.target.value)}
                    className="min-h-13 rounded-xl border border-cream-300 bg-white px-4 py-3 text-base outline-none focus:border-brand-400"
                  >
                    {points.map((item) => (
                      <option key={item.name} value={item.name}>
                        {item.name} — {item.address}
                      </option>
                    ))}
                  </select>
                )}
                <textarea
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                  placeholder="Комментарий к заказу (необязательно)"
                  rows={2}
                  className="resize-none rounded-xl border border-cream-300 bg-white px-4 py-3 text-base outline-none focus:border-brand-400"
                />
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-13 items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3 text-center text-sm font-bold text-cream-50 transition hover:bg-brand-700"
                >
                  <WhatsAppIcon className="size-4" />
                  Отправить состав в WhatsApp
                </a>
                <button
                  onClick={clear}
                  className="min-h-11 text-sm font-semibold text-choco-800/55 hover:text-brand-700 cursor-pointer"
                >
                  Очистить корзину
                </button>
                <p className="text-center text-xs leading-relaxed text-choco-800/50">
                  Это демоверсия: заказ не сохраняется и не поступает в кулинарию.
                </p>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
