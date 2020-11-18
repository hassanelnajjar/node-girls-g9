const http = require('http');
const { router } = require('./router');

const server = http.createServer(router);
const PORT = process.env.PORT || 8300;
// eslint-disable-next-line no-console
server.listen(PORT, () => console.log(`Connected Successfully @ http://localhost:${PORT}`));
