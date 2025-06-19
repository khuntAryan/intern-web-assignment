import { FeaturesSection } from "../../component/FeaturesSection"
import Footer from "../../component/Footer";
import { NavbarDemo } from "../../component/NavbarDemo";
export default function Page() {
    return (
       <div className="flex flex-col min-h-screen w-screen bg-gray-500 dark:bg-gray-900">
            <NavbarDemo />
             <FeaturesSection />
            <Footer />
           </div>
    )
}