const express = require('express');
import routes from "./src/network"
const app = express();
routes(app)
const port = 9000;

const initialize = () => {
    console.log('Server running on port ${port}');
}

app.listen(port, initialize);