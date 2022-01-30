
import express from 'express';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {router} from './routes/handlers.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8080; 

app.engine('handlebars', engine());
app.set('views', (__dirname + '/views')); 
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use('/',router);

app.listen(port, () => {
  console.log(`app is listening to PORT ${port}`)
});
