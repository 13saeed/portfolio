"use client"
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import simple1 from "@/app/image/simple1.jpg";
import simple from "@/app/image/simple.jpg";
import car from "@/app/image/car.jpg";
import car3 from "@/app/image/car3.jpg";
import car4 from "@/app/image/car4.jpg";
import car5 from "@/app/image/car5.jpg";
import { useTheme } from "@/app/component/changeTheme";
export const CardItems = [
  {
    imageUrl: "https://13saeed.github.io/phone-shop/",
    picture: simple1,
    title: "OnlineShop",
    description: " React & Tailwindcss $ Daisy ui",
    github: "https://github.com/13saeed/phone-shop",
  },
  {
    imageUrl: "https://github.com/13saeed/Resturant",
    picture: simple,
    title: "Restaurant menu",
    description: "Tailwindcss & Asp.net core",
    github: "https://github.com/13saeed/Resturant",
  },
  {
    imageUrl: "https://github.com/13saeed/Rhttp://wallup.net/wp-content/uploads/2016/01/240217-car-Lamborghini_Aventador-Lamborghini-Dubai.jpg",
    picture: car,
    title: "car",
    description: "car",
    github: "./",
  },
  {
    imageUrl: "https://github.com/13saeed/Rhttp://wallup.net/wp-content/uploads/2016/01/240217-car-Lamborghini_Aventador-Lamborghini-Dubai.jpg",
    picture: car3,
    title: "car",
    description: "car",
    github: "./",
  },
  {
    imageUrl: "https://github.com/13saeed/Rhttp://wallup.net/wp-content/uploads/2016/01/240217-car-Lamborghini_Aventador-Lamborghini-Dubai.jpg",
    picture: car4,
    title: "car",
    description: "car",
    github: "./",
  },
  {
    imageUrl: "https://github.com/13saeed/Rhttp://wallup.net/wp-content/uploads/2016/01/240217-car-Lamborghini_Aventador-Lamborghini-Dubai.jpg",
    picture: car5,
    title: "car",
    description: "car",
    github: "./",
  },

];

export default function Card() {
  const{theme} = useTheme()
  return CardItems.map((items, index) => (
    <div
      className={`flex items-center justify-center  w-full   ${
        index % 2 === 0 ? "flex-col @3xl:flex-row" : "flex-col @3xl:flex-row-reverse "
      } odd:self-end   mb-15 @3xs:mx-0`}
      key={index}
    >
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className={`flex mx-5 mb-4  w-[800px] h-[500px] duration-[1.3s,15s] hover:scale-105 @3xs:w-[320px] @3xs:h-[400px] @sm:w-[340px] @md:w-[380px] @md:h-[420px] @xl:w-[420px] @xl:h-[440px] @2xl:w-[480px] @2xl:h-[490px] @3xl:w-[400px] @3xl:h-[440px] @3xl:mb-0 @6xl:w-[540px] @6xl:h-[550px]  @7xl:w-[650px] @7xl:h-[600px]`}
      >
        <Link href={items.imageUrl}>
          <Image
            className="w-full h-full rounded-2xl"

            src={items.picture}
            alt="Not Image"
          ></Image>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className={`flex flex-col   mx-5  border  rounded-2xl  @3xs:w-[320px] @3xs:h-[400px] @sm:w-[340px] @md:w-[380px] @md:h-[420px] @xl:w-[420px] @xl:h-[440px] @2xl:w-[480px] @2xl:h-[490px] @3xl:w-[400px] @3xl:h-[440px] @6xl:w-[540px] @6xl:h-[550px] @7xl:w-[650px] @7xl:h-[600px] ${theme === 'dark' ? "border-slate-600" : "bg-[#f1f1f1]  border-[#f1f1f1] text-black"}`}
      >
        <h1 className="font-bold text-4xl text-center my-10 p-2 @6xl:text-5xl">{items.title}</h1>
        <p className="text-xl px-4 py-3 @6xl:text-2xl @6xl:mx-3"><b>Made:</b>{items.description}</p>
        <Link
          href={items.github}
          className="text-xl px-3 py-3 hover:text-blue-500 hover:scale-105 @6xl:text-2xl @6xl:mx-3"
        >
         <b>Github:</b>
         <p className=" text-lg @6xl:text-2xl">{items.github}</p>
        </Link>
      </motion.div>
    </div>
  ));
}
