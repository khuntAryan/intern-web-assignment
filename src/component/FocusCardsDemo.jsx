import { FocusCards } from "../component/ui/focus-cards.jsx";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "RÖDFLIK Desk Lamp",
      src: "https://www.ikea.com/in/en/images/products/roedflik-desk-lamp-grey-green__1327041_pe944343_s5.jpg?f=s",
    },
    {
      title: "Wooden Table Lamp",
      src: "https://www.homesake.in/cdn/shop/files/IH0E574_theme.jpg?v=1747737579",
    },
    {
      title: "Adjustable Desk Lamp",
      src: "https://ikiru.in/cdn/shop/products/buy-table-lamp-adjustable-table-lamp-for-study-office-and-bedroom-by-kp-lamps-store-on-ikiru-online-store-1.jpg?v=1739204698",
    },
    {
      title: "Metal Tripod Lamp",
      src: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/22501288/2023/3/25/cb77cbaa-123f-4761-9656-e06e74e326821679718592710BlackMetalTableLampwithFabricShadeB22holderUrnConeMarigold1.jpg",
    },
    {
      title: "LED Crystal Lamp",
      src: "https://www.whiteteak.com/media/catalog/product/t/l/tl25-10002_1_.jpg",
    },
    {
      title: "Oslo Collection Lamp",
      src: "https://assets.ajio.com/medias/sys_master/root/20230607/C1kQ/64805a4c42f9e729d72b033e/-1117Wx1400H-466246678-white-MODEL.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
