import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connectionUrl = 'mongodb+srv://admin:RISHABHAGARWAL@cluster0.qb4om.mongodb.net/tinderDB?retryWrites=true&w=majority';

// Middleware
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// API endpoints
app.get("/", (request, response) => {
    return response.status(200).send('Hello World');
});

app.post("/tinder/cards", (request, response) => {
    const dbCard = request.body;
    console.log(dbCard);

    Cards.create(dbCard, (error, data) => {
        if (error) {
            response.status(500).send();
        } else {
            response.status(201).send(data);
        }
    });
})

app.get("/tinder/cards", (request, response) => {

    Cards.find((error, data) => {
        if (error) {
            response.status(500).send();
        } else {
            response.status(200).send(data);
        }
    });
})

// Listener
app.listen(port, () => console.log(`Listening on ${port}`));