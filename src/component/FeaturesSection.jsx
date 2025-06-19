import { cn } from "../lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Elegant Design",
      description:
        "Our table lamps blend seamlessly with any décor, adding a touch of sophistication to your space.",
      icon: <IconEaseInOut />, 
    },
    {
      title: "Adjustable Brightness",
      description:
        "Easily control the light intensity to suit your mood or activity, from reading to relaxing.",
      icon: <IconAdjustmentsBolt />, 
    },
    {
      title: "Energy Efficient",
      description:
        "Equipped with LED technology, our lamps save energy and reduce your electricity bill.",
      icon: <IconCloud />, 
    },
    {
      title: "Affordable Pricing",
      description:
        "Get premium quality at a price that fits your budget. No hidden costs.",
      icon: <IconCurrencyDollar />, 
    },
    {
      title: "Easy Setup",
      description:
        "Plug and play! Our lamps are designed for hassle-free installation and use.",
      icon: <IconTerminal2 />, 
    },
    {
      title: "Customer Support",
      description:
        "Our team is available 24/7 to assist you with any queries or concerns.",
      icon: <IconHelp />, 
    },
    {
      title: "Satisfaction Guarantee",
      description:
        "Not satisfied? We offer a 30-day money-back guarantee for peace of mind.",
      icon: <IconHeart />, 
    },
    {
      title: "Versatile Styles",
      description:
        "Choose from a wide range of styles and finishes to match your personal taste.",
      icon: <IconRouteAltLeft />, 
    },
  ];
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
