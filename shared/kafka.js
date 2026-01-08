const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'eda-kraft-app',
  brokers: ['localhost:9092'],
});

module.exports = kafka;