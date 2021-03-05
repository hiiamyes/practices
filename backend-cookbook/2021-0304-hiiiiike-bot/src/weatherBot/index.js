const { WebClient } = require("@slack/web-api");
const listWeathers = require('../weathers/listWeathers')
const slackWebClient = new WebClient(process.env.SLACK_BOT_USER_OAUTH_TOKEN);

const weatherBot = async (event, context, callback) => {
    try {
        console.log('weather bot')
        console.log(event, context, callback)
        const { headers } = event;
        const {
            event: { subtype, text, channel },
        } = JSON.parse(event.body);
        if (subtype === "bot_message") return null;
        if (
            text &&
            text.includes(process.env.SLACK_BOT_USER) &&
            headers["X-Slack-Retry-Num"] === undefined
        ) {
            const weathers = await listWeathers()
            if (process.env.IS_OFFLINE) {
                console.log(weathers);
            } else {
                const blocks = weathers.map((url, i) => ({
                    "type": "image",
                    "image_url": url,
                    "alt_text": `image-${i}`
                }))
                await slackWebClient.chat.postMessage({
                    channel,
                    blocks
                });
            }
        }
    } catch (error) {
        console.log(error);
    } finally {
        const { challenge } = JSON.parse(event.body);
        const response = {
            statusCode: 200,
            body: challenge,
        };
        callback(null, response);
    }
};

module.exports = weatherBot;
