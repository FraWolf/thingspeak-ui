import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Chart from "./components/Chart/Chart2";
import Loading from "./components/Loading/Loading";

import {
  singleComponentData,
  singleComponentName,
} from "./components/_functions";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [name, setName] = useState({});

  useEffect(() => {
    async function callData() {
      setData(await singleComponentData());
      setName(await singleComponentName());
      setLoading(false);
    }
    callData();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      {loading && <Loading />}
      {!loading && Object.values(data).length === 0 && (
        <div className="text-center">
          <h3>Nessun sensore collegato</h3>
        </div>
      )}
      {!loading && (
        <div className="container">
          <div className="row">
            {Object.values(data).map((item, index) => {
              return (
                <div className="col-md-6" key={index}>
                  <Chart data={item} name={name[`field${index + 1}`]} />
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
