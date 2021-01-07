const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
var id = 1;


var data = [
  {title: "nice", "id":id, "body":5 }, 
  {title: "nice", id:id+1, "body":5 },
  {title: "testcaseto catch", "id":0, "body":"empty body"}, 
]
var fetchData = ()=>{
  return data
}

var get_newData = (index) => {

  var res = data.filter(function(item) {
    return item.id>index
  });
  
  return  res;
}
  
  // return data.map(mapp);
// }


// console.log(updateLast(0))
// var stdin = process.openStdin();

// var fields = {'id':null, 'title':null, 'body':null}
// var updated = []
// stdin.addListener("data", function(d) {

//   // if(updated == [])
//         // updated.push( {x: d.toString().trim()});
        
//       for(var x in fields) {
        
//         updated.push( {x: d.toString().trim()});
//       }
//       // if(!updated.includes({x: d.toString().trim()})) {
//         // updated.push( {x: d.toString().trim()});
//       // }

//     console.log(updated);
// });
app.get('/', (req, res)=>{
  console.log(req.headers.lastid);
  // console.log(id,'ppogyu');
  var jsondata = get_newData(req.headers.lastid)

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(jsondata));
  id+=2;
      // res.send("cetrt")
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));