express = require("express");
app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.use(express.static('public'));
app.use("/lib", express.static('lib'));

app.listen(8000, function() {
    console.log("Listening on port 8000");
});
