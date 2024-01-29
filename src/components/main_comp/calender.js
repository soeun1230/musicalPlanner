import React, { Component } from "react";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      events: [],
    };
  }

  handleCellClick = (date) => {
    const info = prompt(`날짜 ${date}에 입력할 정보를 입력하세요:`);
    if (info) {
      this.setState((prevState) => ({
        events: [...prevState.events, { date, info }],
      }));
      alert(`입력한 정보: ${info}`);
    }
  };

  prevMonth = () => {
    this.setState((prevState) => ({
      currentDate: new Date(
        prevState.currentDate.getFullYear(),
        prevState.currentDate.getMonth() - 1
      ),
    }));
  };

  nextMonth = () => {
    this.setState((prevState) => ({
      currentDate: new Date(
        prevState.currentDate.getFullYear(),
        prevState.currentDate.getMonth() + 1
      ),
    }));
  };

  render() {
    const { currentDate } = this.state;
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    const firstDayOfWeek = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();

    return (
      <article class="cal">
        <div>calender</div>
        <div>
          <button onClick={this.prevMonth}>이전 달</button>
          <span>
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
          </span>
          <span>{currentDate.getFullYear()}</span>
          <button onClick={this.nextMonth}>다음 달</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
          {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
            <div key={day} style={{ textAlign: "center", padding: "5px" }}>
              {day}
            </div>
          ))}
          {Array(firstDayOfWeek)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                style={{ border: "1px solid #ccc", padding: "5px" }}
              />
            ))}
          {Array(daysInMonth)
            .fill()
            .map((_, index) => {
              const dayNumber = index + 1;
              const cellDate = `${currentDate.getFullYear()}-${
                currentDate.getMonth() + 1
              }-${dayNumber}`;
              const event = this.state.events.find((e) => e.date === cellDate);

              return (
                <div
                  key={index}
                  style={{
                    border: "1px solid #ccc",
                    padding: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => this.handleCellClick(cellDate)}
                >
                  {dayNumber}
                  {event && <p>{event.info}</p>} {/* 정보 표시 */}
                </div>
              );
            })}
        </div>
      </article>
    );
  }
}

export default Calendar;
