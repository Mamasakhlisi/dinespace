import React, { useEffect, useRef, createRef } from "react";
import moment from "moment";
import {Container,List,Li,Frame} from './TimeStyles'

function Time({ times, step, setStep }) {
  const timeElements = useRef([]);
  const container = useRef(null);
  timeElements.current = times.map(
    (x, i) => (timeElements.current[i] = createRef())
  );


  const ListOfTime = times.map((time, i) => (
    <Li key={time} ref={timeElements.current[i]} active={i === step}>
      {time}
    </Li>
  ));

  useEffect(() => {
    let element = container.current;
    const idlePeriod = 100;
    const duration = 1000;
    let lastAnimation = 0;
    const time = moment().valueOf();

    function scrollHandler(e) {
      const delta = Math.sign(e.wheelDelta);

      if (time - lastAnimation < idlePeriod + duration) {
        e.preventDefault();
      }

      if (delta < 0) {
        setStep(step < times.length - 1 ? step + 1 : step);
      } else {
        setStep(step > 0 ? step - 1 : step);
      }

      lastAnimation = time;
    }

   let tt = setTimeout(() => {
    element.addEventListener("wheel", scrollHandler, false);
   }, 100);

    if (step < times.length - 1 && step >= 0) {
      timeElements.current[step].current.scrollIntoView({
        block: "center",
        inline: "center",
      });
    }

    return () => {element.removeEventListener("wheel", scrollHandler, false); clearTimeout(tt)}
  });

  return (
    <Container ref={container}>
      <List>
        <li></li>
        {ListOfTime}
        <li></li>
      </List>
      <Frame></Frame>
    </Container>
  );
}

export default Time;
