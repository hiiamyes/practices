module.exports.weather = async (event, context) => {
  try {
    console.log("get weather");
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Go",
        },
        null,
        2
      ),
    };
  } catch (error) {
    console.log(error);
  }
};
