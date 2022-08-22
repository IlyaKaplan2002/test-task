import React, { useEffect, useRef, useState } from "react";
import OverlayScrollbars from "overlayscrollbars";

import st from "./scroll.module.css";

interface OverflowBehavior {
  x: "hidden" | "scroll" | "visible-hidden" | "visible-scroll",
  y: "hidden" | "scroll" | "visible-hidden" | "visible-scroll"
}

interface Props {
  resize: "none" | "both" | "horizontal" | "vertical"
  paddingAbsolute: boolean
  overflowBehavior: OverflowBehavior
  sizeAutoCapable: boolean
  children: any
  scrollTo?: React.MutableRefObject<any>
}

export const Scroll = ({
  resize,
  paddingAbsolute,
  overflowBehavior,
  sizeAutoCapable,
  children,
  scrollTo,
}: Props) => {
  const scroll = useRef(null);
  const [scrollObj, setScrollObj] = useState<any>(null);

  const scrollToPosition = (positions: number) => {
    if(!scrollObj) {
      return;
    }

    (scrollObj as any).scroll({ y: positions });
  };

  useEffect(() => {
    if(scrollTo) {
      scrollTo.current = scrollToPosition;
    }
  }, [scrollObj]);

  useEffect(() => {
    const scrollObject = OverlayScrollbars((scroll as any).current, {
      resize,
      paddingAbsolute: paddingAbsolute,
      overflowBehavior: overflowBehavior,
      sizeAutoCapable: sizeAutoCapable,
    });

    setScrollObj(scrollObject);

    return () => {
      scrollObject.destroy();
    };
  }, []);

  return (
    <div className={ st.wrapper }>
      <section ref={ scroll } style={ { height: "100%" } }>
        { children }
      </section>
    </div>
  );
};

Scroll.defaultProps = {
  resize: "none",
  paddingAbsolute: true,
  overflowBehavior: {
    x: "scroll",
    y: "scroll"
  },
  sizeAutoCapable: false,
} as Partial<Props>;
