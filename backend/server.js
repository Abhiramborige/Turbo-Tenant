const http=require('http');
const hostname='localhost'
const port=3000;

const server=http.createServer((req, res)=>{
  res.end('Server ')
})




server.lister(port, hostname,()=>{
  console.log("Server is running on http://"+ hostname+":"+port)
})