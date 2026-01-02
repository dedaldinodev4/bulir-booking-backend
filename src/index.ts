
import { server } from './server'
import { env } from './env';



server.get("/", (request, response) => {
  response.send("🚀 API TypeScript + Docker funcionando");
});

server.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

server.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`)
});
