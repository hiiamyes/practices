#!/bin/sh
curl -X "PUT" \
    -H "Content-Type: image/jpeg" \
    -T "$(pwd)/src/test.jpg" \
    -L $(cat "$(pwd)/src/url.txt")
