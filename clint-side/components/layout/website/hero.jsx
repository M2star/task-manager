import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <section className="my-12 md:my-16 flex justify-center">
      <div className="text-center md:max-w-4xl flex flex-col gap-7 ">
        <h1 className="md:text-6xl text-4xl font-bold ">
          Student Task Manager : Organize Your Academic Life
        </h1>
        <p className="md:text-lg text-base">
          Stay on top of your studies with our Student Task Manager. Easily
          prioritize, track, and complete your tasks. Sign up now for free!
        </p>
        <div className="mt-8 ">
          <div className="bg-card w-full mx-auto max-w-2xl rounded-full py-3 tiled-animation">
            <div className="text-lg font-bold">
              Balance your daily routine
            </div>

            <Button className="rounded-full hover:bg-violet-800 py-3 px-7 font-semibold text-lg animation-slide border border-background bg-background">
              Get Start
            </Button>
            <div className="text-lg font-bold">and Task with us.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
