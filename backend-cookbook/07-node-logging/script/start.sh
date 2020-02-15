#!/bin/sh
export PATH="$PATH:./node_modules/.bin"

# nodemon src/index.js |
# pino-tee >./log/all.log

nodemon -q src/index.js |
  # pino-pretty \
    # --translateTime 'SYS:standard' |
  pino-tee debug ./log/all.log
