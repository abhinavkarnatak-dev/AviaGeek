"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Button = (props) => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      if (spanRef.current) {
        spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
      }
    };

    const handleMouseLeave = () => {
      if (spanRef.current) {
        spanRef.current.animate(
          { left: "50%" },
          { duration: 100, fill: "forwards" }
        );
      }
    };

    const btnElement = btnRef.current;
    if (btnElement) {
      btnElement.addEventListener("mousemove", handleMouseMove);
      btnElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (btnElement) {
        btnElement.removeEventListener("mousemove", handleMouseMove);
        btnElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <Link href={`/${props.buttonroute}`}>
        <motion.button
          whileTap={{ scale: 0.985 }}
          ref={btnRef}
          className="relative w-6/12 h-10 lg:w-5/12 lg:h-10 overflow-hidden rounded-md lg:rounded-lg bg-[#19232D] px-4 py-2 text-xs lg:text-sm font-medium text-[#FFF] border-2 border-[#19232D] text-nowrap"
        >
          <span className="pointer-events-none relative z-10 mix-blend-difference">
            {props.text}
          </span>
          <span
            ref={spanRef}
            className="pointer-events-none absolute left-[50%] top-[50%] h-12 w-20 -translate-x-[50%] -translate-y-[50%] rounded-lg bg-[#FFF]"
          />
        </motion.button>
      </Link>
    </>
  );
};

export default Button;