const express = require('express');
const app = express();
const example = function(){
    console.log('HOLA');
}

app.listen(
    9000,
     example
    )