import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Table from "./components/SensorsTable/SensorsTable";
import Chart from "./components/Chart/Chart2";

import {
  getData,
  singleComponentData,
  singleComponentName,
} from "./components/_functions/functions";

function App() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [data, setData] = useState({});
  const [name, setName] = useState({});

  useEffect(async () => {
    setInfo(await getData());
    setData(await singleComponentData());
    setName(await singleComponentName());
    setLoading(false);
  }, []);

  return (
    <div>
      <Navbar />
      {loading && <p>LOADING</p>}
      {!loading && (
        <div className="container">
          <p>{info.channel.name}</p>
          <p>{info.channel.description}</p>
          <div className="row">
            {Object.values(data).map((item, index) => {
              return (
                <div className="col-md-6">
                  <h1>{name[`field${parseInt(index) + 1}`]}</h1>
                  <Chart data={item} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
