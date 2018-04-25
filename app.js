var express = require("express");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();

var calc = require('./public/js/calculator');
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
app.listen(process.env.PORT||3000);


app.get("/", function (req,res) {
    res.render('index',{firstNum:'',secondNum:'',result:'',notify:''});
})


app.post("/",urlencodedParser,function (req,res) {
    var firstNum = req.body.firstNum;
    var secondNum = req.body.secondNum;
    var method_calc = req.body.method_calc;
    var result = calc.calc(firstNum,secondNum,method_calc);
    var notify;
    if (isNaN(parseFloat(result)))
    {
        notify=result;
        result="";
    }
    else
    {
        notify="Tính thành công";
    }
    res.render('index',{firstNum:firstNum,secondNum:secondNum,result:result,notify:notify});
})

console.log('Done. Sever is created!!!. Connect : localhost:3000')