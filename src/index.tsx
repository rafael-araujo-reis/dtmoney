import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transaction: [
        {
          title: 'Salário',
          amount: 9127.55,
          type: 'deposit',
          category: 'Crédito',
          createAt: new Date(),
          id: 1,
        },
        {
          title: 'Desconto folha',
          amount: 1610.15,
          type: 'withdraw',
          category: 'Desconto',
          createAt: new Date(),
          id: 2,
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data)
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);