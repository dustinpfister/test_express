let express = require('express'),
app = express();
// express middleware can be required in 
app.use(require('./middleware/getn')());
app.get('/', (req, res) => res.send(req.n + ''));
app.listen(8080);
