const kafka = require('../../shared/kafka');

const consumer = kafka.consumer({ groupId: 'payment-group' });

async function start() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'orders', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const order = JSON.parse(message.value.toString());
      console.log('Processing payment for order:', order.orderId);
    },
  });
}

start();
