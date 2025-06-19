
import Footer from "../../component/Footer";
import { NavbarDemo } from "../../component/NavbarDemo";
import { DraggableCardDemo } from "../../component/DraggableCardDemo";
import { FocusCardsDemo } from "../../component/FocusCardsDemo";
import { TextHoverEffectDemo } from "../../component/TextHoverEffectDemo";
export default function Page() {
    return (
       <div className="flex flex-col min-h-screen w-screen bg-gray-500 dark:bg-gray-900">
            <NavbarDemo />
            <DraggableCardDemo />
            <FocusCardsDemo/>
            <TextHoverEffectDemo />
            <Footer />
           </div>
    )
}