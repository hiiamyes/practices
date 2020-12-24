"use strict";

module.exports.resize = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go",
        input: event,
      },
      null,
      2
    ),
  };
};
