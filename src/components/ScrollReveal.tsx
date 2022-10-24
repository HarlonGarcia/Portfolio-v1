import React, { useRef, useEffect, FC } from "react";
import scrollReveal from "scrollreveal";

interface ScrollRevealProps {
  classes: string;
  children: JSX.Element;
}

const ScrollReveal: FC<ScrollRevealProps> = ({ classes, children }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 500,
      });
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full pb-8 scroll-section ${classes}`}
      data-testid="section"
    >
      {children}
    </section>
  );
};

export default ScrollReveal;
