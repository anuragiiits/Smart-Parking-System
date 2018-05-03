const { createApolloFetch } = require('apollo-fetch');
var moment = require('moment');
const fetch = createApolloFetch({
  uri: 'http://anubhav2701.pythonanywhere.com/graphql',
});

// fetch({
//   query: '{ posts { title }}',
// }).then(res => {
//   console.log(res.data);
// });

// You can also easily pass variables for dynamic arguments
var exec = require('child_process').exec, child;

child = exec('python cameraCode.py',
    function (error, stdout, stderr) {
        console.log(stdout.indexOf("Plate Num :"));
        var ind = stdout.indexOf("Plate Num :")+15;
        const numPlate = stdout.substring(ind+7,ind+11);
        console.log(numPlate);
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        fetch({
            query: `query getAllBookings($plate: String!){
            allBookings(licensePlate:$plate){
              edges{
                node{
                  bookedFrom
                  bookedTill
                  bookedBy {
                    id
                    username
                  }
                }
              }
            }
          }`,
          variables: {plate: "7890"}  //numPlate
          }).then(res => {
          console.log(JSON.stringify(res.data));
          if(res.data["allBookings"]["edges"].length == 0)
            console.log("No booking found\n");
          else{
            var flag=0;
            for (var i = 0; i < res.data["allBookings"]["edges"].length; i++) {
              // console.log("printing", res.data["allBookings"]["edges"]);
              var x = moment(res.data["allBookings"]["edges"][i]["node"]["bookedFrom"]);
              var y = moment(res.data["allBookings"]["edges"][i]["node"]["bookedTill"]);
              var now = moment();
              x.subtract(5,'hours').subtract(30,'minutes');
              y.subtract(5,'hours').subtract(30,'minutes');
              console.log(x,y,now);
              console.log();
              if(moment(now).isAfter(x) && moment(now).isBefore(y)){
                flag=1;
                break;
              }
            }
            if(flag==1){
              console.log("Allowed");
            }
            else{
              console.log("Not Allowed");
            }
        }
        
        });
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
