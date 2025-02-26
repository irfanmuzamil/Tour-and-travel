import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/neelum-valley.jpg";
import Img2 from "../../assets/places/Minar-e-Pakistan.jpg";
import Img3 from "../../assets/places/chitral-valley.jpg";
import Img4 from "../../assets/places/faisal-Masjid.jpeg";
import Img5 from "../../assets/places/Lahore-badshahi.jpeg";
import Img6 from "../../assets/places/skardu-value.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Neelum Valley",
    location: "Kashmir",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 15500,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Minar-e-Pakistan",
    location: "Lahore",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit..",
    price: 55200,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Chitral Valley",
    location: "Chitral Pak",
    description:
      "ipsum dolor sit amet consectetur adipisicing elit.",
    price: 15000,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Faisal Masjid ",
    location: "Islam Abad",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 20000,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "BadShahi ",
    location: "Lahore",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 11000,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Skardu",
    location: "Gilgit",
    description:
      "The Skardu is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 19500,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
