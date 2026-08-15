import { Clock, CookingPot, Croissant, MapPin, Phone, UserCheck, ShoppingBasket } from "lucide-react";
import { DEMO_CATEGORIES, DEMO_ITEMS, DEMO_SETTINGS } from "@/lib/demo-data";
import { CartDrawer, CartProvider } from "@/components/cart";
import { Header } from "@/components/Header";
import { MenuSection } from "@/components/MenuSection";
import { Logo } from "@/components/Logo";
import { InstagramIcon, TelegramIcon, WhatsAppIcon } from "@/components/icons";

function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern id="orn" width="120" height="120" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M60 14 L106 60 L60 106 L14 60 Z" />
            <path d="M60 32 L88 60 L60 88 L32 60 Z" />
            <circle cx="60" cy="60" r="7" />
            <path d="M60 0 L60 8 M60 112 L60 120 M0 60 L8 60 M112 60 L120 60" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#orn)" />
    </svg>
  );
}

export default function Home() {
  const categories = DEMO_CATEGORIES;
  const items = DEMO_ITEMS;
  const settings = DEMO_SETTINGS;
  const mainPoint = settings.points[0];

  return (
    <CartProvider>
      <div id="top" className="flex min-h-screen flex-col">
        <div className="bg-choco-900 px-4 py-2 text-center text-[11px] font-black uppercase tracking-[0.16em] text-cream-100 sm:text-xs">
          Демонстрационный проект Veatum · данные и цены приведены для примера
        </div>
        <Header phone={settings.site_phone} />

        {/* HERO */}
        <section className="relative overflow-hidden bg-cream-200">
          <Ornament className="pointer-events-none absolute inset-0 h-full w-full text-brand-600/[0.07]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="text-center lg:text-left">
              <p className="mb-4 inline-flex rounded-full bg-brand-600/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-brand-700">
                Каспийск · кулинария
              </p>
              <h1 className="font-script text-4xl leading-tight text-brand-700 sm:text-6xl sm:leading-tight">
                Вкус дома, испечённый с душой
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-choco-800/75 sm:text-lg lg:mx-0">
                Свежая выпечка, горячие блюда и сладости по домашним рецептам — каждый день.
                Комплексные завтраки с 8:00.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <a
                  href="#menu"
                  className="flex min-h-13 items-center justify-center rounded-full bg-brand-600 px-7 py-3 text-sm font-bold text-cream-50 transition hover:bg-brand-700"
                >
                  Смотреть меню
                </a>
                <a
                  href="#how"
                  className="flex min-h-13 items-center justify-center rounded-full border-2 border-brand-600 px-7 py-3 text-sm font-bold text-brand-700 transition hover:bg-brand-600 hover:text-cream-50"
                >
                  Как заказать
                </a>
              </div>
            </div>
            <div className="relative h-[330px] overflow-hidden rounded-[2rem] border-4 border-cream-50 shadow-2xl shadow-brand-900/15 sm:h-[430px] lg:h-[520px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/granat-demo/granat-hero.jpg"
                alt="Выпечка и блюда домашней кухни"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-cream-50/90 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-brand-700 backdrop-blur">
                Фото создано для демо
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-cream-300 bg-cream-50">
          <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-cream-300">
            {[
              [mainPoint?.hours ?? "08:00–22:00", "работаем ежедневно"],
              [`${items.length}+`, "позиций в меню"],
              ["с 8:00", "комплексные завтраки"],
            ].map(([v, l]) => (
              <div key={l} className="px-3 py-6 text-center">
                <p className="text-xl font-black text-brand-700 sm:text-2xl">{v}</p>
                <p className="mt-1 text-xs font-semibold text-choco-800/60 sm:text-sm">{l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16">
          <p className="text-center text-xs font-black uppercase tracking-[0.25em] text-gold-600">
            О нас
          </p>
          <h2 className="font-script mt-3 text-center text-3xl text-brand-700 sm:text-4xl">
            Готовим как для своих
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              [Croissant, "Печём каждый день", "Выпечка выходит из печи с самого утра — к открытию всё свежее."],
              [CookingPot, "Домашние рецепты", "Чуду, хинкал, курзе и сладости — так, как готовят дома в Дагестане."],
              [Clock, "Завтраки с 8:00", "Комплексные завтраки каждый день — забегайте перед работой."],
            ].map(([Icon, title, text]) => {
              const I = Icon as typeof Croissant;
              return (
                <div
                  key={title as string}
                  className="rounded-2xl border border-cream-300/80 bg-cream-50 p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-brand-600/10 text-brand-700">
                    <I className="size-6" />
                  </div>
                  <p className="font-black">{title as string}</p>
                  <p className="mt-2 text-sm leading-relaxed text-choco-800/65">{text as string}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* POINTS */}
        <section className="bg-brand-700">
          <div className="mx-auto w-full max-w-6xl px-4 py-14">
            <p className="text-center text-xs font-black uppercase tracking-[0.25em] text-gold-300">
              Наши точки
            </p>
            <h2 className="font-script mt-3 text-center text-3xl text-cream-100 sm:text-4xl">
              Где нас найти
            </h2>
            <div className="mx-auto mt-9 grid max-w-3xl gap-4 sm:grid-cols-2">
              {settings.points.map((p) => (
                <div key={p.name + p.address} className="rounded-2xl bg-brand-800/60 p-6">
                  <p className="flex items-center gap-2 font-black text-cream-50">
                    <MapPin className="size-4 text-gold-300" />
                    {p.name}
                  </p>
                  <p className="mt-2 text-sm text-cream-200/90">{p.address}</p>
                  <p className="mt-1 text-sm font-semibold text-gold-300">{p.hours}</p>
                </div>
              ))}
              <div className="flex flex-col justify-center rounded-2xl border-2 border-dashed border-brand-500/60 p-6">
                <p className="flex items-center gap-2 font-black text-cream-50">
                  <Phone className="size-4 text-gold-300" />
                  {settings.site_phone}
                </p>
                <p className="mt-2 text-sm text-cream-200/80">
                  Позвоните или напишите в WhatsApp — подскажем и примем заказ.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MENU */}
        <section id="menu" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16">
          <p className="text-center text-xs font-black uppercase tracking-[0.25em] text-gold-600">
            Меню
          </p>
          <h2 className="font-script mt-3 text-center text-3xl text-brand-700 sm:text-4xl">
            Выбирайте и добавляйте в заказ
          </h2>
          <div className="mt-10">
            <MenuSection categories={categories} items={items} />
          </div>
        </section>

        {/* HOW TO ORDER */}
        <section id="how" className="scroll-mt-20 bg-cream-200">
          <div className="mx-auto w-full max-w-6xl px-4 py-16">
            <p className="text-center text-xs font-black uppercase tracking-[0.25em] text-gold-600">
              Как заказать
            </p>
            <h2 className="font-script mt-3 text-center text-3xl text-brand-700 sm:text-4xl">
              Просто и без предоплаты онлайн
            </h2>
            <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
              {[
              [ShoppingBasket, "1. Соберите заказ", "Добавьте блюда в корзину — всё считается автоматически."],
              [UserCheck, "2. Проверьте состав", "Выберите точку и при необходимости оставьте комментарий."],
              [WhatsAppIcon, "3. Отправьте в WhatsApp", "Готовый список откроется в чате с менеджером."],
              ].map(([Icon, title, text]) => {
                const I = Icon as typeof ShoppingBasket;
                return (
                  <div key={title as string} className="text-center">
                    <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-brand-600 text-cream-50">
                      <I className="size-6" />
                    </div>
                    <p className="font-black">{title as string}</p>
                    <p className="mt-2 text-sm leading-relaxed text-choco-800/65">
                      {text as string}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contacts" className="scroll-mt-20 bg-choco-900 text-cream-200">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-12 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col items-center gap-3 sm:items-start">
              <Logo className="h-24 w-24" outlined />
              <p className="text-sm text-cream-200/60">Кулинария «Гранат» · Каспийск</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-gold-300">
                Контакты
              </p>
              <a
                href={`tel:${settings.site_phone.replace(/[^\d+]/g, "")}`}
                className="block text-lg font-black text-cream-50 hover:text-gold-300"
              >
                {settings.site_phone}
              </a>
              {settings.points.map((p) => (
                <p key={p.address} className="mt-1.5 text-sm text-cream-200/70">
                  {p.address} · {p.hours}
                </p>
              ))}
            </div>
            <div className="flex flex-col items-center gap-3 sm:items-end">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-300">
                Мы на связи
              </p>
              <div className="flex gap-3">
                <a
                  href={`https://wa.me/${settings.manager_phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex size-10 items-center justify-center rounded-full bg-brand-700 text-cream-100 transition hover:bg-brand-600"
                >
                  <WhatsAppIcon className="size-5" />
                </a>
                {settings.instagram && (
                  <a
                    href={settings.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex size-10 items-center justify-center rounded-full bg-brand-700 text-cream-100 transition hover:bg-brand-600"
                  >
                    <InstagramIcon className="size-5" />
                  </a>
                )}
                {settings.telegram && (
                  <a
                    href={settings.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className="flex size-10 items-center justify-center rounded-full bg-brand-700 text-cream-100 transition hover:bg-brand-600"
                  >
                    <TelegramIcon className="size-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="border-t border-cream-200/10 py-4 text-center text-xs text-cream-200/40">
            © {new Date().getFullYear()} Гранат · демонстрационный проект Veatum
          </div>
        </footer>

        <CartDrawer points={settings.points} managerPhone={settings.manager_phone} />
      </div>
    </CartProvider>
  );
}
