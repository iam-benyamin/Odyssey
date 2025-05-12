// app/components/Menu.tsx

interface MenuItem {
  name: string;
  price: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const menuData: MenuSection[] = [
  {
    title: "نوشیدنی‌های گرم",
    items: [
      { name: "هات نوتلا", price: "100,000" },
      { name: "هات چاکلت", price: "80,000" },
      { name: "کافه گلاسه", price: "85,000" },
      { name: "وايت چاکلت", price: "85,000" },
      { name: "وايت کارامل", price: "85,000" },
      { name: "شیر عسل", price: "70,000" },
    ],
  },
  {
    title: "قهوه",
    items: [
      { name: "اسپرسو", price: "45,000" },
      { name: "دوپیو", price: "60,000" },
      { name: "آمریکانو", price: "60,000" },
      { name: "لاته", price: "80,000" },
      { name: "کاپوچینو", price: "80,000" },
      { name: "ماکیاتو", price: "80,000" },
      { name: "کارامل ماکیاتو", price: "85,000" },
      { name: "موکا", price: "85,000" },
      { name: "آفوگاتو", price: "70,000" },
      { name: "آیس آمریکانو", price: "70,000" },
      { name: "آیس لاته", price: "85,000" },
    ],
  },
  {
    title: "شیک",
    items: [
      { name: "شیک شکلات", price: "110,000" },
      { name: "شیک موز", price: "110,000" },
      { name: "شیک وانیل", price: "110,000" },
      { name: "شیک کارامل", price: "120,000" },
      { name: "شیک بیسکوئیت", price: "120,000" },
      { name: "شیک نوتلا", price: "120,000" },
      { name: "شیک اورئو", price: "120,000" },
    ],
  },
  {
    title: "نوشیدنی خنک",
    items: [
      { name: "موهیتو", price: "110,000" },
      { name: "لیموناد", price: "110,000" },
      { name: "بلو لیموناد", price: "110,000" },
      { name: "آیس تی هلو", price: "90,000" },
      { name: "آیس تی لیمو", price: "90,000" },
      { name: "ردموهیتو", price: "110,000" },
      { name: "بلو موهیتو", price: "110,000" },
    ],
  },
  {
    title: "دمنوش",
    items: [
      { name: "دمنوش میوه ای", price: "90,000" },
      { name: "دمنوش به لیمو", price: "80,000" },
      { name: "دمنوش زنجبیل", price: "80,000" },
      { name: "دمنوش بابونه", price: "80,000" },
      { name: "دمنوش چای سبز", price: "80,000" },
      { name: "دمنوش گل گاوزبان", price: "90,000" },
    ],
  },
  {
    title: "چای",
    items: [
      { name: "چای سیاه", price: "60,000" },
      { name: "چای سبز", price: "60,000" },
    ],
  },
  {
    title: "کیک",
    items: [
      { name: "کیک شکلات", price: "110,000" },
      { name: "چیزکیک توت فرنگی", price: "120,000" },
      { name: "چیزکیک نوتلا", price: "130,000" },
      { name: "کیک ردولوت", price: "120,000" },
      { name: "کیک کارامل", price: "120,000" },
      { name: "کیک هویج", price: "110,000" },
    ],
  },
];

export default function Menu() {
  return (
    <div className="bg-gradient-to-b from-[#ae8b70] to-[#b6a163] min-h-screen my-4 pt-20 p-6 border-[#92776b] border-t-8  rounded-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {menuData.map((section, index) => (
          <div key={index}>
            <h2 className="text-5xl pb-2 mb-3">
              {section.title}
            </h2>
            <ul className="space-y-2 text-sm">
              {section.items.map((item, i) => (
                <li key={i} className="flex justify-between gap-1 text-center">
                  <span className="text-lg bg-[#38383a] text-white py-2 px-4 rounded w-1/2">{item.name}</span>
                  <span className="text-lg bg-[#eeeeee] text-black py-2 px-4 rounded w-1/2">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
