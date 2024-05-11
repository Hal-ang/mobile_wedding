"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";

import Calendar from "../Calendar";
import SlideUp from "../SlideUp";
import Spacing from "../Spacing";
import Title from "./Title";
import useIsInView from "@/hooks/useIsInView";

const TITLE = ["2024.06.08", "SATURDAY", "PM 4:00"];
const CalendarSection = ({
  enabledTransition = false
}: {
  enabledTransition?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transitionIds, setTransitionIds] = useState<number[]>([]);

  const handleTransition = useCallback(() => {
    const intervalId = setInterval(() => {
      setTransitionIds((prev) => {
        if (prev.length === TITLE.length) {
          clearInterval(intervalId);
          return prev;
        }
        return prev.concat(prev.length);
      });
    }, 200);

    setTimeout(() => {
      const intervalId2 = setInterval(() => {
        setTransitionIds((prev) => {
          if (prev.length === TITLE.length + 5) {
            clearInterval(intervalId);
            return prev;
          }
          return prev.concat(prev.length);
        });
      }, 200);
    }, 1000);
  }, []);

  const { isInView } = useIsInView(ref, handleTransition);

  useEffect(() => {
    const handler = () => {
      const $gallery = document.getElementById("gallery-section");
      if ($gallery) {
        $gallery.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (isInView) {
      addEventListener("click", handler);
    } else {
      removeEventListener("click", handler);
    }
    return () => {
      removeEventListener("click", handler);
    };
  }, [isInView]);

  useEffect(() => {
    console.log("calendar", transitionIds);
  }, [transitionIds]);

  return (
    <section id="calendar-section" ref={ref} className="w-full px-24pxr">
      <Spacing size={50} />
      {TITLE.map((title, index) => (
        <SlideUp
          disabled={!enabledTransition}
          show={transitionIds.includes(index)}
        >
          <Title key={title} display="block">
            {title}
          </Title>
        </SlideUp>
      ))}

      <Spacing size={15} />

      <SlideUp
        disabled={!enabledTransition}
        show={transitionIds.includes(TITLE.length + 1)}
        className="w-full"
      >
        <Calendar>
          <Calendar.Days />

          <Calendar.Dates startDate={2} endDate={29} activeDate={8} />
        </Calendar>
      </SlideUp>
    </section>
  );
};

export default CalendarSection;
