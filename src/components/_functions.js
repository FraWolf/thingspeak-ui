import { PROJECT_ID, READ_APIKEY } from "../config.json";

async function getData() {
  // Make web request to ThingSpeak API Service
  const requestData = await (
    await fetch(
      `http://api.thingspeak.com/channels/${PROJECT_ID}/feed.json?api_key=${READ_APIKEY}`
    )
  ).json();

  // Returning the data
  return requestData;
}

async function singleComponentData() {
  const data = await getData();
  var finalObject = {};

  data.feeds.forEach(async (fieldName) => {
    Object.keys(fieldName).forEach(async (item) => {
      if (item.startsWith("field")) {
        if (!finalObject[item]) finalObject[item] = [];

        finalObject[item].push({
          x: new Date(fieldName["created_at"]),
          y: parseFloat(fieldName[item]),
        });
      }
    });
  });

  return finalObject;
}

async function singleComponentName() {
  const data = await getData();
  var definitions = {};

  Object.keys(data.channel).forEach(async (item, index) => {
    if (item.startsWith("field")) {
      if (!definitions[item]) definitions[item] = data.channel[item];
    }
  });

  return definitions;
}

export { getData, singleComponentData, singleComponentName };
