const listWeathers = require("./listWeathers");

const weathers = async () => {
    try {
        console.log("list weathers");
        const weathers = await listWeathers()
        return {
            statusCode: 200,
            body: JSON.stringify(weathers),
        };
    } catch (error) {
        console.log(error);
    }
};

module.exports = weathers