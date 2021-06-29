import React, { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";
import image from "./images/covid-logo.png";

const App = () => {
  const [info, setInfo] = useState({ data: {}, country: "" });

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchData();
      setInfo({ ...info, data: data });
    };
    fetchApi();
    // eslint-disable-next-line
  }, []);

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setInfo({ data: data, country: country });
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={info.data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={info.data} country={info.country} />
    </div>
  );
};

export default App;
