
import { server } from './server'
import { env } from './env';



server.get("/", (request, response) => {
  response.send("🚀 API TypeScript + Docker funcionando");
});

server.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`)
});
