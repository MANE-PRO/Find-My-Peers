import React, { useState } from 'react';
import styles from './Filter.module.css'; // Make sure to import the CSS file

function FilterForm({onSearch}) {
  // State for each input field
  const [name, setName] = useState('');
  const [psStation, setPsStation] = useState('');
  const [psLocation, setPsLocation] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({name: name, pslocation: psLocation, psstation: psStation});
  };

  return (
    <div className={styles["filter-form-container"]}>
      <form className={styles["filter-form"]} onSubmit={handleSubmit}>
        <h2>Find Peers!!</h2>

        <div className={styles["form-row"]}>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </div>

        <div className={styles["form-row"]}>
          <input
            type="text"
            id="psstation"
            name="psstation"
            value={psStation}
            onChange={(e) => setPsStation(e.target.value)}
            placeholder="Enter PS Station"
          />
        </div>

        <div className={styles["form-row"]}>
          <input
            type="text"
            id="pslocation"
            name="pslocation"
            value={psLocation}
            onChange={(e) => setPsLocation(e.target.value)}
            placeholder="Enter PS Location"
          />
        </div>

        <div className={styles["form-row"]}>
          <button className={styles.but} type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}

export default FilterForm;
