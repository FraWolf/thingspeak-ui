import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Table from "./components/SensorsTable/SensorsTable";
import Chart from "./components/Chart/Chart2";
import Loading from "./components/Loading/Loading";

import {
  getData,
  singleComponentData,
  singleComponentName,
} from "./components/_functions";

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
      <Header />
      {loading && <Loading />}
      {!loading && Object.values(data).length == 0 && (
        <div className="text-center">
          <h3>Nessun sensore collegato</h3>
        </div>
      )}
      {!loading && (
        <div className="container">
          <div className="row">
            {Object.values(data).map((item, index) => {
              return (
                <div className="col-md-6">
                  <h3>{name[`field${parseInt(index) + 1}`]}</h3>
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
