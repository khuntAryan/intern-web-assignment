
import {LampDemo} from "../component/LampDemo";
import { NavbarDemo } from "../component/NavbarDemo";
import { AppleCardsCarouselDemo } from "@/component/AppleCardsCarouselDemo";
import { FeaturesSectionDemo } from "../component/FeaturesSectionDemo";
import { FeaturesSection } from "../component/FeaturesSection";
import { TextHoverEffectDemo } from "../component/TextHoverEffectDemo";
import Footer from "../component/Footer";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-gray-500 dark:bg-gray-900">
      <NavbarDemo/>
      <LampDemo/> 
      <AppleCardsCarouselDemo />
      <FeaturesSectionDemo />
      <FeaturesSection />
      <TextHoverEffectDemo />
      <Footer />
    </div>
  );
}
