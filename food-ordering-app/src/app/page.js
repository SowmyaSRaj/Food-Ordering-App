import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeader from "./components/layout/SectionHeader";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className="text-gray-500 max-w-xl mx-auto mt-4  flex flex-col gap-4">
          <p >
            At Our Pizza World, we're passionate about crafting the perfect pie
            using only the freshest ingredients. With every slice, we aim to
            create moments of joy and connection for our customers. Join us and
            experience the delicious difference that sets us apart.
          </p>
          <p >
            Our commitment to excellence extends beyond our kitchen; it's
            ingrained in every aspect of our service.From the first bite to the
            last, we strive to exceed your expectations and leave you craving
            more. Come taste the difference at Our Pizza World, where every
            slice tells a story of quality and flavor.
          </p>
        </div>
      </section>

      <section className="text-center my-8">
        <SectionHeader subHeader={"Don\'t hesitate"}
          mainHeader={"Contact Us"} />
        <div className=" mt-8">
        <a className="text-4xl underline text-gray-500" href="tel: +91-9191919191">+91-9191919191</a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2023 All rights reserved
      </footer>
    </>
  );
}
