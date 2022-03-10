@echo off
start node node-http/infra/http/express.js
start node web/server.js

echo executar puppeteeer em ./puppeteeer/processar_customer.js
