import { motion } from "framer-motion";

const tagVariants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};
export default function TabButton({ active, selectTab, children }) {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        variants={tagVariants}
        animate={active ? "active" : "default"}
        className="h-1 bg-secondary mt-2 mr-3"
      />
    </button>
  );
}
