import Image from "next/image";
import Wavy from "@/assets/wave.svg";
import WavyTop from "@/assets/wave-top.svg";
import Circle from "@/assets/circle.svg";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="max-w-[1440px] mx-auto p-4 min-h-[calc(100vh-68px)] flex flex-col justify-center items-center text-center gap-6">
      <figure className="absolute top-16 md:top-0 left-0 right-0 z-0">
        <Image
          src={WavyTop}
          alt="Wavy background"
          className="md:h-full w-full object-cover"
          aria-hidden="true"
        />
      </figure>

      <figure className="absolute bottom-0 left-0 right-0 z-0">
        <Image
          src={Wavy}
          alt="Wavy background"
          className="h-36 w-auto md:h-full md:w-full object-cover"
          aria-hidden="true"
        />
      </figure>
      <figure className="absolute inset-0 -z-10">
        <Image
          src={Circle}
          alt="Wavy background"
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </figure>
      <div className="max-w-[700px] z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 shadow-sm">
          <span className="text-sm font-medium">Streamline Your Workflow</span>
        </div>
        <h1 className="font-roboto text-5xl font-bold ">
          FixFlow - From{" "}
          <span className="text-neutral-700">&lsquo;Reported&rsquo;</span> to{" "}
          <span className="text-neutral-700">&lsquo;Resolved&rsquo;</span> in
          Record Time.
        </h1>
        <p className="mt-4 text-lg text-neutral-800 font-medium">
          Track, organize, and resolve support tickets seamlessly. Built for
          teams that value clarity and productivity.
        </p>
        <Link href={"/auth/signup"}>
          <Button className="mt-6 mr-4">
            Get Started <ArrowRight />
          </Button>
        </Link>
        <Button className="mt-6" variant={"outline"} asChild>
          <Link href={"/auth/login"}>Log In</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
