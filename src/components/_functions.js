const { PROJECT_ID, READ_APIKEY } = require("../config.json");

module.exports = {
  getData: async function () {
    // Make web request to ThingSpeak API Service
    const requestData = await (
      await fetch(
        `http://api.thingspeak.com/channels/${PROJECT_ID}/feed.json?api_key=${READ_APIKEY}`
      )
    ).json();

    // Returning the data
    return requestData;
  },

  singleComponentData: async function () {
    const data = await module.exports.getData();
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
  },

  singleComponentName: async function () {
    const data = await module.exports.getData();
    var definitions = {};

    Object.keys(data.channel).forEach(async (item, index) => {
      if (item.startsWith("field")) {
        if (!definitions[item]) definitions[item] = data.channel[item];
      }
    });

    return definitions;
  },
};
