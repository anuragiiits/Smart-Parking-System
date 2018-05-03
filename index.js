const { createApolloFetch } = require('apollo-fetch');

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
        const plate = stdout.substring(ind+7,ind+11);
        console.log(plate);
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
          variables: {plate: "7890"}  //$plate
          }).then(res => {
          console.log(JSON.stringify(res.data));
        });
        if (error !== null) {
             console.log('exec error: ' + error);
        }

    });

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
  variables: {plate: "7890"}
}).then(res => {
  console.log(JSON.stringify(res.data));
});