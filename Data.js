var express = require('express')
var cors = require('cors')
var fs = require('fs');
var path = require('node:path');
var app = express()
const PORT = process.env.PORT || 3030;

app.use(cors())

app.get('/destination/:name', function (req, res) {
     fn = path.join('data.json');
    fs.readFile( fn, 'utf8', function (err, data) {
        const destinations = JSON.parse(data).destinations;
        var destination = destinations.find(x => x.name === req.params.name);
        if (!destination)
            destination = destinations[0];

        res.json(destination);
    });
})

app.get('/crew/:role', function (req, res) {
    const fn = path.join('data.json');
    fs.readFile( fn, 'utf8', function (err, data) {
        const crew = JSON.parse(data).crew;
        var member = crew.find(x => x.role === req.params.role);
        if (!member)
            member = crew[0];

        res.json(member);
    });
})

app.get('/technology/:name', function (req, res) {
    const fn = path.join('data.json');
    fs.readFile( fn, 'utf8', function (err, data) {
        const technologies = JSON.parse(data).technology;
        var technology = technologies.find(x => x.name === req.params.name);
        if (!technology)
        technology = technologies[0];

        res.json(technology);
    });
})

// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});



