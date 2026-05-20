import "dotenv/config";
import app from "./app.js";


app.get('/', (request, response) => {
  return response.status(200).send('Hello Backend');
});

app.get('/health', (request, response) => {
  response.status(200).json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor executando em http://0.0.0.0:${PORT}`);
});