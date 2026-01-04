
import { server } from './server'
import { env } from './env';

server.get("/", (request, response) => {
  response.send("🚀 Welcome API");
});

server.listen(env.PORT || 3333, () => {
  console.log(`Server running on port ${env.PORT}`)
});
