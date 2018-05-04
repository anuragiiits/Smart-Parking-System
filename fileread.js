const { createApolloFetch } = require('apollo-fetch');
var moment = require('moment');
const fetch = createApolloFetch({
  uri: 'http://anubhav2701.pythonanywhere.com/graphql',
});
var exec = require('child_process').exec, child;
//var spotName;
let i = 1; 
setInterval(() => {
var fs = require('fs')
  , filename = "readings.txt";
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  //console.log('OK: ' + filename);
  data = data.split("\n")
  len = data.length
  //console.log(data[len-1])
  console.log(data[len-2])
  console.log(data[len-3])
  console.log(data[len-4])
  console.log(data[len-5])
  
  
  if(Number(data[len-2].split(":")[1]) > 10){
//console.log("yeah")
	var spotName=data[len-2].split(":")[0]
	console.log(spotName);	
	fetch({
            query: `query {
            allBookings(spot_SpotName:"${spotName}"){
              edges{
                node{
		  licensePlate
                  bookedFrom
                  bookedTill
                  bookedBy {
                    username
                  }
                }
              }
            }
          }`,
          variables: "null"  //numPlate
          }).then(res => {
	  var lol = JSON.stringify(res.data.allBookings.edges);
var fs = require('fs')
  , filename = "spot"+spotName+".txt";
	console.log(filename);
	  fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
	console.log("data :", data);
	
          console.log(res.data.allBookings.edges.length);
	console.log("type :", typeof(data), data);
	  if(res.data.allBookings.edges.length!=0 && Number(data)!=Number(spotName4)){
	//console.log("Alarm")
	child = exec('python buzzer.py',
    		function (error, stdout, stderr) {
			console.log("Alarm.")
		});
	}
	else if(res.data.allBookings.edges.length==0 && Number(data)!=Number(spotName)){
console.log(spotName);
		var fs = require('fs')
  , filename = "spot"+spotName+".txt";
fs.writeFile(filename,spotName, 'utf8', function(err, data) {
  if (err) throw err;
	});
		child = exec('python servo.py',
    		function (error, stdout, stderr) {
			console.log("exit.")
		});
	}});
	
	});
}

if(Number(data[len-3].split(":")[1]) > 10){
//console.log("yeah")
 	var spotName2=data[len-3].split(":")[0]
	console.log(spotName2);	
	fetch({
            query: `query {
            allBookings(spot_SpotName:"${spotName2}"){
              edges{
                node{
		  licensePlate
                  bookedFrom
                  bookedTill
                  bookedBy {
                    username
                  }
                }
              }
            }
          }`,
          variables: "null"  //numPlate
          }).then(res => {
	  var lol = JSON.stringify(res.data.allBookings.edges);
var fs = require('fs')
  , filename = "spot"+spotName2+".txt";
console.log(filename);
	  fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
	console.log("data2 :", data);
	
          console.log(res.data.allBookings.edges.length);
console.log("type :", typeof(data), data);
	  if(res.data.allBookings.edges.length!=0 && Number(data)!=Number(spotName2)){
	//console.log("Alarm2")
	child = exec('python buzzer.py',
    		function (error, stdout, stderr) {
			console.log("Alarm.")
		});
	}
	else if(res.data.allBookings.edges.length==0 && Number(data)!=Number(spotName2)){
		console.log(spotName2);
		var fs = require('fs')
  , filename = "spot"+spotName2+".txt";
fs.writeFile(filename,spotName2, 'utf8', function(err, data) {
  if (err) throw err;
	});
		child = exec('python servo.py',
    		function (error, stdout, stderr) {
			console.log("Exit.")
		});
		
	}});
	});
}

if(Number(data[len-4].split(":")[1]) > 10){
//console.log("yeah")
	var spotName3=data[len-4].split(":")[0]
	console.log(spotName3);	
	fetch({
            query: `query {
            allBookings(spot_SpotName:"${spotName3}"){
              edges{
                node{
		  licensePlate
                  bookedFrom
                  bookedTill
                  bookedBy {
                    username
                  }
                }
              }
            }
          }`,
          variables: "null"  //numPlate
          }).then(res => {
	  var lol = JSON.stringify(res.data.allBookings.edges);
var fs = require('fs')
  , filename = "spot"+spotName3+".txt";
console.log(filename);
	  fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
	console.log("data3 :", data);
	  console.log(res.data.allBookings.edges.length);
console.log("type :", typeof(data), data);
	  if(res.data.allBookings.edges.length!=0 && Number(data)!=Number(spotName3)){
	//console.log("Alarm")
	child = exec('python buzzer.py',
    		function (error, stdout, stderr) {
			console.log("Alarm.")
		});
	}
	else if(res.data.allBookings.edges.length==0 && Number(data)!=Number(spotName3)){
console.log(spotName3);
		var fs = require('fs')
  , filename = "spot"+spotName3+".txt";
fs.writeFile(filename,spotName3, 'utf8', function(err, data) {
  if (err) throw err;
	});
		child = exec('python servo.py',
    		function (error, stdout, stderr) {
			console.log("exit.")
		});
	}
});
	
	});
}

if(Number(data[len-5].split(":")[1]) > 10){
//console.log("yeah")
	var spotName4=data[len-5].split(":")[0]	
	console.log(spotName4);
	fetch({
            query: `query {
            allBookings(spot_SpotName:"${spotName4}"){
              edges{
                node{
		  licensePlate
                  bookedFrom
                  bookedTill
                  bookedBy {
                    username
                  }
                }
              }
            }
          }`,
          variables: "null"  //numPlate
          }).then(res => {
	  var lol = JSON.stringify(res.data.allBookings.edges);
var fs = require('fs')
  , filename = "spot"+spotName4+".txt";
console.log(filename);
	  fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
	console.log("data4 :", data);
	
          console.log(res.data.allBookings.edges.length);
console.log("type :", typeof(data), data);
	  if(res.data.allBookings.edges.length!=0 && Number(data)!=Number(spotName4)){
	//console.log("Alarm")
	child = exec('python buzzer.py',
    		function (error, stdout, stderr) {
			console.log("Alarm.")
		});
	}
	else if(res.data.allBookings.edges.length==0 && Number(data)!=Number(spotName4)){
console.log(spotName4);
		var fs = require('fs')
  , filename = "spot"+spotName4+".txt";
fs.writeFile(filename,spotName4, 'utf8', function(err, data) {
  if (err) throw err;
	});
		child = exec('python servo.py',
    		function (error, stdout, stderr) {
			console.log("exit.")
		});
	}});

	
	});
}

});
}, 500);