const express = require('express');
const { createOrder } = require('./producer');

const app = express();
app.use(express.json());

app.post('/orders', async (req, res) => {
  const order = {
    orderId: Date.now().toString(),
    ...req.body,
  };

  await createOrder(order);
  res.json({ status: 'ORDER_CREATED', order });
});

app.listen(3000, () => {
  console.log('Order Service running on port 3000');
});
