let express = require('express'),
app = express();

// any request to any path is just simply ended
app.all('*', (req, res) => res.end());

app.listen(8080);
