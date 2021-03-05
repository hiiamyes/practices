# weather bot

https://api.slack.com/apps/AU9B7HLE5

## Getting started

Test the function

```
curl \
  -X "POST" "http://localhost:3000/dev/weather/bot" \
  -H 'Content-Type: application/json; charset=utf-8' \
  -d $'{
    "challenge": "challenge",
    "event": {
      "subtype": "subtype",
      "text": "@UU6LTDZU2",
      "channel": "channel"
    }
  }'
```

## Test on production

- Open Slack
