import React from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import {Container,Th,Td} from './DateStyles'

function Calendar({ date, weekDays, dateHandler }) {
  // Week Days
  const daysOfWeek = weekDays.map((dd, id) => (
    <Th key={id}>{dd.toUpperCase()}</Th>
  ));

  // select day of month
  function dayMarkHandler(e) {
    if (
      e.target.dataset.current === "true" &&
      e.target.dataset.past === "false"
    ) {
      dateHandler(+e.target.dataset.day);
    }
  }

  // Td list of days
  const Row = (y) => {
    console.log(moment(date).date())
   return <Td
      key={uuidv4()}
      onClick={dayMarkHandler}
      data-day={+y.day}
      data-current={y.currentMonth}
      active={y.currentMonth && moment(date).date() === +y.day}
      data-past={
        y.currentMonth &&
        +y.day < moment().date() &&
        moment(date).isSame(moment(), "month")
      }
      current={
        moment().date() === +y.day && moment(date).isSame(moment(), "month")
      }
    >
      {y.day}
    </Td>
  }
  // Tr list of days
  const Column = (row) => <tr key={uuidv4()}>{row}</tr>;

  // numbers of month
  const daysOfMonth = Array(moment(date).utc().endOf("month").date())
    .fill(0)
    .map((_, i) =>
      moment(date)
        .utc()
        .date(i + 1)
    )
    .filter(
      (data, i, arr) =>
        arr.findIndex((info) => info.week() === data.week()) === i
    )
    .map((day) =>
      Array(7)
        .fill(0)
        .map((_, i) => ({
          currentMonth: moment(date).isSame(
            moment.utc(day).week(day.week()).startOf("week").add(i, "day"),
            "month"
          ),
          day: moment
            .utc(day)
            .week(day.week())
            .startOf("week")
            .add(i, "day")
            .format("DD"),
        }))
    )
    .map((row) => row.map(Row))
    .map(Column);

  return (
    <Container>
      <table>
        <thead>
          <tr>{daysOfWeek}</tr>
        </thead>
        <tbody>{daysOfMonth}</tbody>
      </table>
    </Container>
  );
}

export default Calendar;
