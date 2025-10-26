import Hero from "@/components/homepage/hero";
import { features } from "@/lib/data";
import Footer from "@/components/homepage/footer";
import Stats from "@/components/homepage/stats";

const HomePage = () => {
  return (
    <>
      <Hero />

      <main className="max-w-[1440px] mx-auto p-4 py-12 flex flex-col gap-3 text-center relative">
        <div className="w-40 h-40 rounded-full bg-[#f2f2f2] absolute -z-10 left-0 top-10" />
        <div className="w-40 h-40 rounded-full bg-[#f2f2f2] absolute -z-10 right-0 -bottom-10" />
        <h2 className="text-3xl font-semibold font-roboto">
          What <span className="text-neutral-700">We</span> Offer
        </h2>
        <p className="text-lg text-neutral-800 font-medium mb-4">
          Things we offer to make your support pipeline frictionless
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 z-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-5 border rounded-lg bg-white shadow-lg flex flex-col gap-3 items-center hover:scale-105 transition-transform duration-400"
            >
              <feature.icon size={24} className="text-center" />
              <h3 className="font-medium text-lg font-roboto">
                {feature.title}
              </h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </main>

      <Stats />

      <Footer />
    </>
  );
};

export default HomePage;
