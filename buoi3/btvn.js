// bai 1
const studentInfomation = {
    name: 'tuan vo',
    age: 24,
    job: "designer",
    gender: 'male'
}

console.log(studentInfomation);

// bai 2
const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/index') {
        res.setHeader('Content-Type', 'text/html');
        
        res.end("<h2>đây là trang chủ</h2>");
     
    } else if (req.url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Là thông tin cá nhân của bạn</h1>')

    } else {
        res.end('<h1>đường dẫn không tồn tại</h1>')
    }


    

})

server.listen(5000)