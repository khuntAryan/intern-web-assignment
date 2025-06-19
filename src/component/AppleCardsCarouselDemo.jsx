"use client";

import React from "react";
import { Carousel, Card } from "../component/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Discover the Perfect Table Lamp for Every Space
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ description, image }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col items-center">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-6">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {description.title}
        </span>{" "}
        {description.text}
      </p>
      <img
        src={image}
        alt={description.title}
        height="400"
        width="400"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-xl shadow-lg"
      />
    </div>
  );
};

const data = [
  {
    category: "Modern",
    title: "RÖDFLIK Desk Lamp",
    src: "https://www.ikea.com/in/en/images/products/roedflik-desk-lamp-grey-green__1327041_pe944343_s5.jpg?f=s",
    content: (
      <DummyContent
        description={{
          title: "RÖDFLIK Desk Lamp",
          text:
            "A sleek, minimalist lamp that brings a touch of Scandinavian design to your workspace. Its adjustable arm and soft, glare-free light make it perfect for late-night study sessions or creative work.",
        }}
        image="https://www.ikea.com/in/en/images/products/roedflik-desk-lamp-grey-green__1327041_pe944343_s5.jpg?f=s"
      />
    ),
  },
  {
    category: "Classic",
    title: "Wooden Table Lamp",
    src: "https://www.homesake.in/cdn/shop/files/IH0E574_theme.jpg?v=1747737579",
    content: (
      <DummyContent
        description={{
          title: "Wooden Table Lamp",
          text:
            "This timeless wooden lamp adds warmth and character to any room. The natural wood finish and soft fabric shade create a cozy ambiance, making it ideal for bedrooms and living areas.",
        }}
        image="https://www.homesake.in/cdn/shop/files/IH0E574_theme.jpg?v=1747737579"
      />
    ),
  },
  {
    category: "Adjustable",
    title: "Adjustable Desk Lamp",
    src: "https://ikiru.in/cdn/shop/products/buy-table-lamp-adjustable-table-lamp-for-study-office-and-bedroom-by-kp-lamps-store-on-ikiru-online-store-1.jpg?v=1739204698",
    content: (
      <DummyContent
        description={{
          title: "Adjustable Desk Lamp",
          text:
            "Designed for flexibility, this lamp features an adjustable arm and head, letting you direct light exactly where you need it. Perfect for students, artists, or anyone who values versatility.",
        }}
        image="https://ikiru.in/cdn/shop/products/buy-table-lamp-adjustable-table-lamp-for-study-office-and-bedroom-by-kp-lamps-store-on-ikiru-online-store-1.jpg?v=1739204698"
      />
    ),
  },
  {
    category: "Designer",
    title: "Metal Tripod Lamp",
    src: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/22501288/2023/3/25/cb77cbaa-123f-4761-9656-e06e74e326821679718592710BlackMetalTableLampwithFabricShadeB22holderUrnConeMarigold1.jpg",
    content: (
      <DummyContent
        description={{
          title: "Metal Tripod Lamp",
          text:
            "A bold statement piece, this black metal lamp with a tripod base and fabric shade is both functional and stylish. It’s a great fit for contemporary offices and modern homes.",
        }}
        image="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/22501288/2023/3/25/cb77cbaa-123f-4761-9656-e06e74e326821679718592710BlackMetalTableLampwithFabricShadeB22holderUrnConeMarigold1.jpg"
      />
    ),
  },
  {
    category: "Luxury",
    title: "LED Crystal Lamp",
    src: "https://www.whiteteak.com/media/catalog/product/t/l/tl25-10002_1_.jpg",
    content: (
      <DummyContent
        description={{
          title: "LED Crystal Lamp",
          text:
            "Bring a touch of luxury to your space with this stunning LED crystal lamp. The intricate design sparkles beautifully, making it an elegant accent for living rooms or bedside tables.",
        }}
        image="https://www.whiteteak.com/media/catalog/product/t/l/tl25-10002_1_.jpg"
      />
    ),
  },
  {
    category: "Scandinavian",
    title: "Oslo Collection Lamp",
    src: "https://assets.ajio.com/medias/sys_master/root/20230607/C1kQ/64805a4c42f9e729d72b033e/-1117Wx1400H-466246678-white-MODEL.jpg",
    content: (
      <DummyContent
        description={{
          title: "Oslo Collection Lamp",
          text:
            "Inspired by Nordic simplicity, the Oslo Collection Lamp features clean lines and a soft white finish. It’s perfect for minimalist interiors and adds a calming glow to any room.",
        }}
        image="https://assets.ajio.com/medias/sys_master/root/20230607/C1kQ/64805a4c42f9e729d72b033e/-1117Wx1400H-466246678-white-MODEL.jpg"
      />
    ),
  },
];
