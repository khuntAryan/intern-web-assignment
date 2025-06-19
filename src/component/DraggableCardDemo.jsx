import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../component/ui/draggable-card";

export function DraggableCardDemo() {
    const items = [
        {
          title: "RÖDFLIK Desk Lamp",
          image: "https://www.ikea.com/in/en/images/products/roedflik-desk-lamp-grey-green__1327041_pe944343_s5.jpg?f=s",
          position: { x: -200, y: -150 },
          rotation: -5,
        },
        {
          title: "Wooden Table Lamp",
          image: "https://www.homesake.in/cdn/shop/files/IH0E574_theme.jpg?v=1747737579",
          position: { x: -150, y: 0 },
          rotation: -7,
        },
        {
          title: "Adjustable Desk Lamp",
          image: "https://ikiru.in/cdn/shop/products/buy-table-lamp-adjustable-table-lamp-for-study-office-and-bedroom-by-kp-lamps-store-on-ikiru-online-store-1.jpg?v=1739204698",
          position: { x: 0, y: -180 },
          rotation: 8,
        },
        {
          title: "Metal Tripod Lamp",
          image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/22501288/2023/3/25/cb77cbaa-123f-4761-9656-e06e74e326821679718592710BlackMetalTableLampwithFabricShadeB22holderUrnConeMarigold1.jpg",
          position: { x: 200, y: -50 },
          rotation: 10,
        },
        {
          title: "LED Crystal Lamp",
          image: "https://www.whiteteak.com/media/catalog/product/t/l/tl25-10002_1_.jpg",
          position: { x: 250, y: -120 },
          rotation: 2,
        },
        {
          title: "Oslo Collection Lamp",
          image: "https://assets.ajio.com/medias/sys_master/root/20230607/C1kQ/64805a4c42f9e729d72b033e/-1117Wx1400H-466246678-white-MODEL.jpg",
          position: { x: -100, y: -160 },
          rotation: 4,
        }
  ];

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
       Scroll Down
      </p>
      {items.map((item, index) => (
        <DraggableCardBody
          key={index}
          originalPosition={item.position}
          style={{ rotate: `${item.rotation}deg` }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
