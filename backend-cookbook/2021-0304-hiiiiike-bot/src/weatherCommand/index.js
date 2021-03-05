// const { WebClient } = require("@slack/web-api");
// const listNextReleaseBlockingIssues = require("./listNextReleaseBlockingIssues");
const listWeathers = require('../weathers/listWeathers')
// const slackWebClient = new WebClient(process.env.SLACK_BOT_OAUTH_ACCESS_TOKEN);

const weatherBot = async (event, context, callback) => {
    try {
        console.log('weather bot')
        console.log(event, context, callback)
        const weathers = await listWeathers()
        // const { headers } = event;
        // const {
        //     event: { subtype, text, channel },
        // } = JSON.parse(event.body);
        // if (subtype === "bot_message") return null;
        // if (
        //     text &&
        //     text.includes(process.env.SLACK_BOT_USER_NEXT_RELEASE_BOT) &&
        //     headers["X-Slaack-Retry-Num"] === undefined
        // ) {
        //     const issues = await listNextReleaseBlockingIssues();
        //     if (process.env.IS_OFFLINE) {
        //         console.log(issues);
        //     } else {
        //         await slackWebClient.chat.postMessage({
        //             channel,
        //             text: issues,
        //         });
        //     }
        // }
        // const response = {
        //     statusCode: 200,
        //     body: {
        //         "type": "section",
        //         "text": {
        //             "type": "mrkdwn",
        //             "text": "New Paid Time Off request from <example.com|Fred Enriquez>\n\n<https://example.com|View request>"
        //         }
        //     },
        // };
        // callback(null, response);
        const response = {
            statusCode: 200,
            body: JSON.stringify(
                {
                    blocks: weathers.map((url, i) => ({
                        "type": "image",
                        "image_url": url,
                        "alt_text": `image-${i}`
                    }))
                }
            )
        }
        callback(null, response)
    } catch (error) {
        console.log(error);
    }
    //  finally {
    //     const { challenge } = JSON.parse(event.body);
    //     const response = {
    //         statusCode: 200,
    //         body: challenge,
    //     };
    //     callback(null, response);
    // }
};

module.exports = weatherBot;
