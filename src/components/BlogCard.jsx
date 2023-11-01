import Image from "next/image";

const BlogCard = ({ image, alt, title, description }) => {
  return (
    <div className="bg-[#3333338c] p-4 w-[350px] h-[400px] cursor-pointer">
      <div className="">
        <Image src={image} alt={alt} width={350} height={300} />
      </div>
      <div className="text-white mt-3 leading-6">
        <h1 className="font-sem text-[18px] md:text-[22px]">{title}</h1>
        <p className="mt-4 font-normal text-[15px] md:text-[18px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
