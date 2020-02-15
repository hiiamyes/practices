const pino = require("pino");

const logger = pino();

logger.info("yayahaha");
logger.error({ status: 200, data: [{ id: 1, amount: 200, name: "yes" }] });
logger.error("yayahaha");
logger.error("yayahaha2");
logger.error("yayahaha3");
