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
import { useInterval } from "@/hooks/useInterval";
import useIsInView from "@/hooks/useIsInView";

const TITLE = ["2024.06.08", "SATURDAY", "PM 4:00"];
const CalendarSection = ({
  enabledTransition = false
}: {
  enabledTransition?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transitionIds, setTransitionIds] = useState<number[]>([]);

  const [startTransition, setStartTransition] = useState(false);
  const [callTimeout, setCallTimeout] = useState(false);

  useInterval(() => {
    if (!startTransition || transitionIds.length >= TITLE.length) return;

    setTransitionIds((prev) => {
      return prev.concat(prev.length);
    });
  }, 200);

  useInterval(() => {
    if (
      !startTransition ||
      !callTimeout ||
      transitionIds.length >= TITLE.length + 5
    )
      return;
    setTransitionIds((prev) => {
      return prev.concat(prev.length);
    });
  }, 200);

  useEffect(() => {
    if (!startTransition) return;
    setTimeout(() => {
      setCallTimeout(true);
    }, 1000);
  }, [startTransition]);

  useEffect(() => {
    if (transitionIds.length === 4) {
      setStartTransition(false);
    }
  }, [transitionIds]);

  const { isInView } = useIsInView(ref, () => setStartTransition(true));

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

  return (
    <section id="calendar-section" ref={ref} className="w-full px-24pxr">
      <Spacing size={50} />
      {TITLE.map((title, index) => (
        <SlideUp
          key={index}
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
        show={transitionIds.includes(TITLE.length)}
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
