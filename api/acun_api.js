var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors());
app.use(express.bodyParser());

var boxes = [
    {
        id: '1',
        worth: '1₺',
    },
    {
        id: '2',
        worth: '5₺',
    },
    {
        id: '3',
        worth: '10₺',
    },
    {
        id:'4',
        worth: '20₺',
    },
    {
        id:'5',
        worth: '50₺',
    },
    {
        id:'6',
        worth: '100₺',
    },
    {
        id:'7',
        worth: '200₺',
    },
    {
        id:'8',
        worth: '500₺',
    },
    {
        id:'9',
        worth: '1000₺',
    },
    {
        id:'10',
        worth: '2000₺',
    },
    {
        id:'11',
        worth: '5000₺',
    },
    {
        id:'12',
        worth: '10000₺',
    },
    {
        id:'13',
        worth: '20000₺',
    },
    {
        id:'14',
        worth: '50000₺',
    },
    {
        id:'15',
        worth: '100000₺',
    },
    {
        id:'16',
        worth: '200000₺',
    },
    {
        id:'17',
        worth: '500000₺',
    },
    {
        id:'18',
        worth: '500000₺',
    },
    {
        id:'19',
        worth: '500000₺',
    },
    {
        id:'20',
        worth: '500000₺',
    },
    {
        id:'21',
        worth: '1000000₺',
    },
    {
        id:'22',
        worth: '1000000₺',
    },
    {
        id:'23',
        worth: '1000000₺',
    },
    {
        id:'24',
        worth: '5000000₺',
    }

]

app.get('/', function (req, res) {
    res.json(boxes);
  });


  app.listen(process.env.PORT || 3400);