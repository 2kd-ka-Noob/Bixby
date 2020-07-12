module.exports.function = function checkHealth (temperature,health,call) {
  if(call=="Yes"){
    return{
      temperature:temperature,
      health:health,
      boolcall:true
    }
  }
  else{
  return{
    temperature:temperature,
    health:health,
    boolcall:false
  }
  } 
}
