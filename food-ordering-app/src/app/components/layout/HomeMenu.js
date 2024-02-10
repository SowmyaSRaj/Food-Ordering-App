import Image from "next/image";

export default function HomeMenu() {
  return (
    <section>
      <div className="text-center">
        <div className="relative">
          <div className="h-48 w-48 absolute left-0">
            <Image
              src={"/sallad1.png"}
              layout={"fill"}
              objectFit={"contain"}
              alt={"sallad"}
            />
          </div>
          <div className="h-48 w-48 absolute right-0">
            <Image
              src={"/sallad2.png"}
              layout={"fill"}
              objectFit={"contain"}
              alt={"sallad"}
            />
          </div>
        </div>
        <h3 className="uppercase text-gray-500 font-semibold">Check Out</h3>
        <h2 className="text-primary font-bold text-4xl">Menu</h2>
      </div>
    </section>
  );
}
