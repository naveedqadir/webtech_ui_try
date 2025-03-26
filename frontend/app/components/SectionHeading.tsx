import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  className = "mb-16",
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`${alignmentClasses[alignment]} ${className}`}
    >
      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-blue-500 to-purple-600">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
