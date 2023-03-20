import React from "react";
import styles from "../ComponentsCSS/Reservations.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { hours, persons } from "../Massives,Consts/Consts";

function Reservations() {
  const [people, setPeople] = useState(0);
  const firstOption = people === 0 ? "disabled" : null;
  const [time, setTime] = useState(0);
  const firstOption2 = time === 0 ? "disabled" : null;
  const [selectedDate, setSelectedDate] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.reservations}>
      <div className={styles.cancelBtnDiv}>
        <button type="text" className={styles.cancelBtn}>
          <Link to="/">🗙</Link>
        </button>
      </div>
      <div className={styles.container}>
        <h2>Reservations</h2>
        <form onSubmit={submitHandler}>
          <label>
            Number of People - <em>Optional</em>
          </label>
          <div className={styles.selectDiv}>
            <select
              value={people}
              className={styles[firstOption]}
              required
              onChange={(e) => setPeople(e.target.value)}
            >
              <option value={0} disabled>
                Number of People
              </option>
              {persons.map((person) => (
                <option
                  key={person.id}
                  value={person.id}
                  className={styles.abled}
                >
                  {person.numberOfPersons}
                </option>
              ))}
            </select>
            <span className={styles.dropDown}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 15l-4.243-4.243l1.415-1.414L12 12.172l2.828-2.829l1.415 1.414z"
                />
              </svg>
            </span>
          </div>
          <label>
            Date - <em className={styles.required}>Required</em>
          </label>
          <div className={styles.selectDiv}>
            <DatePicker
              required
              placeholderText="🗓 Date"
              showYearDropdown
              scrollableMonthYearDropdown
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            ></DatePicker>
            <span className={styles.dropDown}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 15l-4.243-4.243l1.415-1.414L12 12.172l2.828-2.829l1.415 1.414z"
                />
              </svg>
            </span>
          </div>
          <label>
            Time - <em>Optional</em>
          </label>
          <div className={styles.selectDiv}>
            <select
              className={styles[firstOption2]}
              value={time}
              required
              onChange={(e) => setTime(e.target.value)}
            >
              <option disabled value={0}>
                🕘 Time
              </option>
              {hours.map((hour) => (
                <option key={hour.id} value={hour.id} className={styles.abled}>
                  {hour.time}
                </option>
              ))}
            </select>
            <span className={styles.dropDown}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 15l-4.243-4.243l1.415-1.414L12 12.172l2.828-2.829l1.415 1.414z"
                />
              </svg>
            </span>
          </div>
          <button type="submit" className={styles.submitBtn}>
            <Link
              className={styles.submitLink}
              to="https://www.opentable.com/restref/client/?rid=995113&restref=995113&datetime=2023-03-14T19%3A00&covers=3&rtype=ism&searchdatetime=2023-03-14T19%3A00&partysize=3&lang=en&corrid=d5153702-782b-4000-b2bb-c400d644964d"
              target="_blank"
            >
              Find A Table
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reservations;
