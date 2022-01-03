import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api';

  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Salário',
          amount: 9127,
          type: 'deposit',
          category: 'Crédito',
          createAt: new Date()
        },
        {
          id: 2,
          title: 'Desconto folha',
          amount: 2800,
          type: 'withdraw',
          category: 'Desconto',
          createAt: new Date()
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transactions');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transactions', data)
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);