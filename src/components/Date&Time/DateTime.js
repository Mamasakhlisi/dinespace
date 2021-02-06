import React, { useState, useEffect } from "react";
// packages
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

// components
import Date from "./Date";
import Time from "./Time";

// actions
import { setdate } from "redux/actions/dateHandlerAction";
import { settime } from "redux/actions/timeHandlerAction";
import { setshow } from "redux/actions/dateShowAction";
import { setshowdone } from "redux/actions/doneButtonShowAction";
import { setstep } from "redux/actions/stepAction";

// assets
import { ReactComponent as DateTimeSvg } from "assets/svg/date&time.svg";
import { ReactComponent as CalendarSvg } from "assets/svg/calendar.svg";
import { ReactComponent as LeftArrowSvg } from "assets/svg/leftArrow.svg";
import { ReactComponent as RightArrowSvg } from "assets/svg/rightArrow.svg";
import { ReactComponent as FormLeftSvg } from "assets/svg/formleft.svg";
import { ReactComponent as FormCloseSvg } from "assets/svg/formclose.svg";

//styles
import {
  StyledContainer,
  DateTimeFrom,
  Calendar,
  Header,
  Controll,
  Buttons,
  TimeContainer,
  StyledControllDate,
} from "./styles";

const DateTime = () => {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.dateHandlerReducer.date);
  const time = useSelector((state) => state.timeHandlerReducer.time);
  const show = useSelector((state) => state.dateShowReducer.show);
  const showDone = useSelector((state) => state.doneButtonShowReducer.active);
  const step = useSelector((state) => state.stepReducer.step);

  const weekDays = moment.weekdaysShort();

  // arival times
  const times = [
    "ASAP",
    "12:00",
    "12:15",
    "12:30",
    "12:45",
    "13:00",
    "13:15",
    "13:30",
  ];

  const month = parseInt(moment().format("M"));
  const prevMonth = parseInt(moment(date).subtract(1, "M").format("M"));

  // form submit
  function doneHandler() {
    dispatch(settime(moment(date)));
    dispatch(setshow(false))
  }

  // form clear
  function clearHandler() {
    dispatch(setdate(moment()));
    dispatch(settime(null));
    dispatch(setstep(0))
    dispatch(setshowdone(false))
  }

  // calendar show
  function showCalendar() {
    dispatch(setshow(!show))
    // if date null dispatch date
    if(!date) {
      dispatch(setdate(moment())) 
    }
  }

  // calendar hidde
  function hiddeCalendar(prop) {
    dispatch(setshow(false))
    // if click close calendar dispatch date and time null, if click prev button and hide calendar the data remain. 
    if(prop) {
      dispatch(setdate(null)) 
      dispatch(settime(null)) 
    }
  }

  // calendar prev month
  function prevHandler() {
    if (month <= prevMonth) {
      dispatch(
        setdate(
          moment(date)
            .set("date", parseInt(moment().format("D")))
            .subtract(1, "M")
        )
      );
    }
  }

  // calendar next month
  function nextHandler() {
    dispatch(setdate(moment(date).add(1, "M")));
  }

  // time step
  function timeStepHandler(value) {
    dispatch(setstep(value))
    // apply hour and minute to time
    if (times[value] !== times[0]) {
      const [hour, minute] = times[value].split(":");
      dispatch(setdate(moment(date).set({ hour: +hour, minute: +minute })));
    }
  }

  // layout markdown
  const uiDateTime = time
    ? `${moment(time).format("D")}, ${moment(time).format("MMM")} ${moment(
        time
      ).format("hh:mm")}`
    : "Date and Time";

  // day select
  function dateHandler(day) {
    dispatch(setdate(moment(date).utc(day).set("date", day)));
    dispatch(setshowdone(true))
  }

  useEffect(() => {
    dispatch(setdate(moment()));
  }, []);
  return (
    <StyledContainer>
      <DateTimeFrom onClick={showCalendar}>
        <DateTimeSvg /> {uiDateTime}
      </DateTimeFrom>
      {show ? (
        /* Calendar */
        <Calendar>
          <Header>
            <FormLeftSvg onClick={() => hiddeCalendar(false)}/>
            <div>
              <CalendarSvg /> Date and Time
            </div>
            <FormCloseSvg onClick={() => hiddeCalendar(true)} />
          </Header>
          <Controll>
            <span onClick={prevHandler}>
              <LeftArrowSvg />
            </span>
            <StyledControllDate>
              {moment(date).format("MMM")} {moment(date).year()}
            </StyledControllDate>
            <span onClick={nextHandler}>
              <RightArrowSvg />
            </span>
          </Controll>

          <Date date={date} weekDays={weekDays} dateHandler={dateHandler} />

          <TimeContainer>
            <h3>Arrival Time</h3>
            <Time times={times} step={step} setStep={timeStepHandler} />
          </TimeContainer>

          <Buttons>
            <span onClick={clearHandler}>Clear</span>
            {showDone ? (
              <button type="button" onClick={doneHandler}>
                Done
              </button>
            ) : (
              ""
            )}
          </Buttons>
        </Calendar>
      ) : (
        ""
      )}
    </StyledContainer>
  );
};

export default DateTime;
