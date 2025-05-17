import toPersianNumber from "@/app/utils/formatNumbers";

interface MenuItem {
  name: string;
  price: number;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const menuData: MenuSection[] = [
  {
    title: "نوشیدنی‌ های گرم",
    items: [
      { name: "هات نوتلا", price: 100000 },
      { name: "هات چاکلت", price: 80000 },
      { name: "نسکافه", price: 85000 },
      { name: "ماسالا", price: 100000 },
      { name: "وايت چاکلت", price: 75000 },
      { name: "هات لوتوس", price: 115000 },
      { name: "شیر عسل", price: 70000 },
    ],
  },
  {
    title: "قهوه",
    items: [
      { name: "اسپرسو", price: 45000 },
      { name: "فرانسه", price: 120000 },
      { name: "ترک", price: 65000 },
      { name: "آمریکانو", price: 50000 },
      { name: "آفوگاتو", price: 90000 },
      { name: "آیس کارامل ماکیاتو", price: 100000 },
      { name: "آیس موکا", price: 100000 },
      { name: "آیس وانیل", price: 100000 },
      { name: "آیس هیزل نات", price: 100000 },
      { name: "کاپوچینو", price: 85000 },
      { name: "لاته", price: 90000 },
    ],
  },
  {
    title: "شیک",
    items: [
      { name: "توت فرنگی ", price: 105000 },
      { name: " موز", price: 105000 },
      { name: "شکلات", price: 110000 },
      { name: "وانیل", price: 105000 },
      { name: "طالبی", price: 105000 },
      { name: "بادام زمینی", price: 130000 },
      { name: "لوتوس", price: 140000 },
      { name: "نوتیلا", price: 130000 },
      { name: "سیب ترش", price: 110000 },
      { name: "کارامل", price: 110000 },
      { name: "نسکافه", price: 110000 },
      { name: "قیهوه", price: 125000 },
      { name: "شاتوت", price: 110000 },
    ],
  },
  {
    title: "نوشیدنی خنک",
    items: [
      { name: "موهیتو", price: 80000 },
      { name: "لیموناد", price: 70000 },
      { name: "رد موهیتو", price: 85000 },
      { name: "بلو کاراسائو", price: 75000 },
      { name: "پیناکولادا", price: 80000 },
      { name: "اناناس", price: 70000 },
      { name: "پرتقال", price: 70000 },
      { name: "اسموتی", price: 130000 },
      { name: "کرن بری", price: 80000 },
    ],
  },
  {
    title: "دمنوش",
    items: [
      { name: "دمنوش میوه ای", price: 70000 },
      { name: "دمنوش مخصوص", price: 80000 },
      { name: "دمنوش به‌لیمو", price: 50000 },
      { name: "دمنوش گل کاوزبان", price: 55000 },
      { name: "دمنوش سیب دارچین", price: 65000 },
      { name: "دمنوش به", price: 60000 },
      { name: "دمنوش ترش", price: 55000 },
    ],
  },
  {
    title: "چای",
    items: [
      { name: "چای سیاه", price: 15000 },
      { name: "چای سبز", price: 60000 },
    ],
  },
  {
    title: "کیک",
    items: [
      { name: "کیک شکلات", price: 80000 },
      { name: "کیک وانیل", price: 80000 },
      { name: "کیک بستنی", price: 115000 },
      { name: "ژله بستنی", price: 100000 },
    ],
  },
];

export default function Menu() {
  return (
    <div className="bg-gradient-to-b from-[#ae8b70] to-[#b6a163] min-h-screen pt-20 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {menuData.map((section, index) => (
          <div key={index}>
            <h2 className="text-4xl pb-2 mb-3">{section.title}</h2>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between gap-1 text-center text-base"
                >
                  <span className="bg-[#38383a] text-white py-2 px-3 rounded w-1/2">
                    {item.name}
                  </span>
                  <span className="bg-[#eeeeee] text-black py-2 px-3 rounded w-1/2">
                    {toPersianNumber(item.price)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
