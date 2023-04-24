
const express = require('express'); 
const app = express();

app.use(express.json());

const cors = require('cors');
app.use(cors());

app.listen(8080);


// localhost:8080/api/res/get-res
const rootRouter = require('./Routers/rootRouter');
app.use("/api", rootRouter);

