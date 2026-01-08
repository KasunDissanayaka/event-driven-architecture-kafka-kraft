const kafka = require('../../shared/kafka');

const producer = kafka.producer();

async function createOrder(order) {
  await producer.connect();
  await producer.send({
    topic: 'orders',
    messages: [
      {
        key: order.orderId,
        value: JSON.stringify(order),
      },
    ],
  });
}

module.exports = { createOrder };
