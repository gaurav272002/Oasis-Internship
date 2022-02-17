function number(e){
  var key=e.which || e.KeyCode || e.charCode;
  var val = String.fromCharCode(key);
        if  ( (key >=48 && key <= 57) ||(val =='.') ){
          // console.log(key);

           $("num").val(val);
        }else{
          e.preventDefault();
        }

}
function convert() {
     var temprature= new Array("Degrees Celsius ('C)", "Degrees Fahrenheit ('F)", "Degrees Kelvin ('K)", "Degrees Rankine ('R)");
     var unit =  new Array(1, 0.555555555555, 1, 0.555555555555);
     var tempIncrement = new Array(0, -32, -273.15, -491.67);
     var from = document.getElementById('from').value;
     var to = document.getElementById('to').value;
     var fi = document.getElementById('fi').value;
     var fromu = temprature[from];
     var tou = temprature[to];
     var fromc = unit[from];
     var toc = unit[to];
     var result = fi;
     result = parseFloat(result) + tempIncrement[from];
     result = result * fromc;
     result = result/toc;
     result = parseFloat(result) - tempIncrement[to];
     document.getElementById('ti').value = result;
}
