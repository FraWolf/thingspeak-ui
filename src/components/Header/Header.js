import React, { useState, useEffect } from "react";
import { getData } from "../_functions";
import { PROJECT_ID } from "../../config.json";

function Header() {
  const [device, setDevide] = useState("computer");
  const [info, setInfo] = useState({
    channel: { name: "Caricamento...", description: "Carimento..." },
  });

  useEffect(() => {
    async function callData() {
      setInfo(await getData());
    }

    // Getting the device type
    function detectDevice() {
      setDevide(!!navigator.maxTouchPoints ? "mobile" : "computer");
    }

    callData();
    window.addEventListener("resize", detectDevice);
  }, []);

  return (
    <main
      style={{
        marginBottom: "40px",
      }}
    >
      <div className="text-center bg-light p-5">
        <h1>{info.channel.name}</h1>
        <p className="lead">{info.channel.description}</p>
        <a
          className="btn btn-lg btn-primary"
          href={`https://thingspeak.com/channels/${PROJECT_ID}`}
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          Vedi su ThingSpeak »
        </a>
        {device && device === "computer" && (
          <a
            className="btn btn-lg btn-outline-success ms-3"
            data-bs-toggle="modal"
            data-bs-target="#downloadAppModal"
          >
            Scarica l'App!
          </a>
        )}
        {device && device === "mobile" && (
          <a
            className="btn btn-lg btn-outline-success ms-3"
            href={"/apk/DHT11_-_BTHETH.apk"}
            role="button"
          >
            Scarica l'App!
          </a>
        )}
      </div>
    </main>
  );
}

export default Header;
