import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    list: Model,
  },

  seeds(server) {
    server.db.loadData({
      lists: [
        {
          id: 1,
          identifier: 'Facebook',
          password: '12345678'
        },
        {
          id: 2,
          identifier: 'instagram',
          password: '1234567890'
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/list', () => {
      return this.schema.all('list')      
    })

    this.post('/list', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('list', data)
    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
