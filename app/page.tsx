import Image from "next/image";
import Menu from "@/app/components/menu";
import logo from "@/public/20250430_222110.jpg";

export default function Home() {
  return (
    <div className="bg-[#3d434f]">
      {/* <div className="text-[#d3bf7d] flex justify-center gap-2 py-8">
        <Image src={logo} width={50} height={50} alt="لوگوی کافه اودیسه"/>
        <p className="text-4xl">کافه اودیسه</p>
      </div> */}
      <Menu />
    </div>
  );
}
