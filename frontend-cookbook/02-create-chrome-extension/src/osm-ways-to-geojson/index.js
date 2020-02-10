const axios = require("axios");
const querystring = require("querystring");

/**
 const ways = [
    {
      id: 464085687,
    },
    {
      id: 464085679,
    },
  ];
*/

export default async ways => {
  let result = [];
  for (let i = 0; i < ways.length; i += 1) {
    const way = ways[i];
    const query = `
      [out:json];
        way(${way.id});
        (._;>;);
      out;
    `;
    const {
      data: { elements }
    } = await axios.post(
      "https://overpass-api.de/api/interpreter",
      querystring.stringify({ data: query })
    );

    const nodeIds = elements.pop().nodes;
    const startIndex = way.start
      ? nodeIds.findIndex(nodeId => nodeId === way.start)
      : 0;
    const endIndex = way.end
      ? nodeIds.findIndex(nodeId => nodeId === way.end)
      : nodeIds.length - 1;
    result = result.concat(
      nodeIds.slice(startIndex, endIndex + 1).map(nodeId => {
        const node = elements.find(e => e.id === nodeId);
        return [node.lon, node.lat];
      })
    );
  }

  return {
    type: "LineString",
    coordinates: result
  };
};
