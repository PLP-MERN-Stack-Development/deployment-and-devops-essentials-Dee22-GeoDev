const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console({ format: winston.format.simple() })],
});

logger.stream = {
  write: (msg) => logger.info(msg.trim()),
};

module.exports = logger;
