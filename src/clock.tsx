import React from "react";
const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export class Clock extends React.Component<{}, { date: string; time: string }> {
  timerID: NodeJS.Timer | undefined;
  constructor(props: {}) {
    super(props);
    this.state = {
      date: "",
      time: "",
    };
    this.displayDateAndTime = this.displayDateAndTime.bind(this);
  }

  componentDidMount(): void {
    this.displayDateAndTime();
    this.timerID = setInterval(() => this.displayDateAndTime(), 500);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerID);
  }

  displayDateAndTime() {
    let currDate = new Date();
    let year = currDate.getFullYear();
    let month = currDate.getMonth() + 1;
    let day = currDate.getDate();
    let hour = ("0" + currDate.getHours()).slice(-2);
    let min = ("0" + currDate.getMinutes()).slice(-2);
    let sec = ("0" + currDate.getSeconds()).slice(-2);
    let weekDay = WEEK_DAYS[currDate.getDay()];
    this.setState({
      date: `${weekDay} | ${day}/${month}/${year}`,
      time: `${hour}:${min}:${sec}`,
    });
    // console.log(this.state.date);
  }

  render() {
    return (
      <div className="clock">
        <div className="date">{this.state.date}</div>
        <div className="time">{this.state.time}</div>
      </div>
    );
  }
}
