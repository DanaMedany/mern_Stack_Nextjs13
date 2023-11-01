import Image from "next/image";

const Section = () => {
  return (
    <section className="w-full min-h-[40vh] px-[50px] py-[140px] mx-auto">
      <div className="flex justify-between items-center flex-col-reverse lg:flex-row relative">
        <div className="flex-[0.85] text-[rgba(255,255,255,0.5)] max-w-[440px] pl-4 md:pl-0 ">
          <h1 className="font-bold text-[28px] lg:text-[40px] md:leading-[1.2] pt-5 md:pt-0 uppercase">
            the journey of NEXT.js
          </h1>
          <p className="pt-5 font-normal text-[18px]">
            There are many Next.js benefits that can work wonderfully in your
            favor
          </p>
          <button className="bg-[rgba(255,255,255,0.5)] mt-5 p-2 rounded-[8px] text-black font-bold uppercase hover:scale-[1.2] transition-all duration-[250ms]">
            Getting Started
          </button>
        </div>
        <div className="absolute bottom-7 right-2">
          <Image
            src="/team-developer.png"
            alt="nextjs-photo"
            priority={false}
            width={400}
            height={400}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
