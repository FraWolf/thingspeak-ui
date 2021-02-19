import React, { useState, useEffect } from "react";
import { getData } from "../_functions";
import { PROJECT_ID } from "../../config.json";

function Header() {
  const [info, setInfo] = useState({
    channel: { name: "Caricamento...", description: "Carimento..." },
  });

  useEffect(() => {
    async function callData() {
      setInfo(await getData());
    }
    callData();
  }, []);

  return (
    <main
      style={{
        marginBottom: "40px",
      }}
    >
      <div class="text-center bg-light p-5">
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
      </div>
    </main>
  );
}

export default Header;
