import "dotenv/config";
import app from "./app.js";


app.get('/', (request, response) => {
  return response.status(200).send('Hello Backend');
});

const PORT = process.env.PORT || 3000;

app.listen(3000, 'localhost', () => {
  console.log("Servidor executando em http://localhost:3000");
});