

type Hours = {
  id: number,
  day: string,
  open: string,
  close: string
}

const hMonday: Hours = {
  id: 1,
  day: "Monday",
  open: "9:00AM",
  close: " - 5:30PM"
}

const hTuesday: Hours = {
  id: 1,
  day: "Tuesday",
  open: "9:00AM",
  close: " - 5:30PM"
}
const hWednesday: Hours = {
  id: 1,
  day: "Wednesday",
  open: "9:00AM",
  close: " - 5:30PM"
}
const hThursday: Hours = {
  id: 1,
  day: "Thursday",
  open: "9:00AM",
  close: " - 5:30PM"
}
const hFriday: Hours = {
  id: 1,
  day: "Friday",
  open: "9:00AM",
  close: " - 5:30PM"
}
const hSaturday: Hours = {
  id: 1,
  day: "Saturday",
  open: "9:00AM",
  close: " - 2:00PM"
}
const hSunday: Hours = {
  id: 1,
  day: "Sunday",
  open: "CLOSED",
  close: ""
}


export function useHours() {

  const hoursOfOperation: Hours[] = [];
  hoursOfOperation.push(hMonday);
  hoursOfOperation.push(hTuesday);
  hoursOfOperation.push(hWednesday);
  hoursOfOperation.push(hThursday);
  hoursOfOperation.push(hFriday);
  hoursOfOperation.push(hSaturday);
  hoursOfOperation.push(hSunday);


  return { hoursOfOperation }
};