var http = require('http')
var console = require('console')
var config = require('config')

module.exports.function = function getcount (country) {
  
  var url = 'https://api.covid19api.com/live/country/'+country+'/status/confirmed/date/2020-05-01T13:13:30Z'
  var ret = []
  console.log("FindShoe filter by a specific type")
  try{
    ret = http.getUrl(url)
    ret  = JSON.parse(ret)
  }
  catch(err){
    console.log("ERROR " + err)
  }
  var resu = ret[ret.length-1]
  resu["Confirmed"]=resu["Confirmed"]*10
  return resu
}
