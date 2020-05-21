const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const sql01 = require('./dbhelper');
var pool = mysql.createPool(sql01.mysql);
var async = require("async");
var date = require("silly-datetime");
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'sun',
//     database: 'boke'
// })
// var connection =mysql.createPool({
//     host:"localhost",
//     user:"root",
//     password:"sun",
//     database:"boke"
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


// 下面是解决跨域请求问题
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Content-Type,Access-Token,adminid");
    res.header("Access-Control-Expose-Headers", "*");
    //如果需要使用put和delete需要对OPTION返回响应
    if(req.method=='OPTIONS'){
        res.send('');
        return;
    }
    next();
});

// get方法获取所有文章内容或者信息
app.get("/address", function (req,res,next) {
  var add=req.query.add
    // 获取所有的用户
    pool.query(`select * from ${add}`, function(err, rows, fields) {
      
        if (err) {
            throw err
        }
        res.send(rows);
})
});



// 添加文章接口
app.post('/add', function (req, res, next) {
    // 从连接池获取连接 
    pool.getConnection(function (err, connection) {
      // 获取前台页面传过来的参数 
      var param =req.body;
      var addSql = 'insert into articles(hiandes,jianjie,contents,dianjis,creates,kinds,names,imgs,images) values (?,?,?,?,?,?,?,?,?)';
      var hh = [param.hiandes,param.jianjie,param.contents,param.dianjis,param.creates,param.kinds,param.names,param.imgs,param.images];
      // 建立连接 增加一个用户信息 
      connection.query(addSql,hh, function (err, result) {
        console.log(result)
        if (result) {
          result = {
            code: 200,
            msg: '增加成功'
            
          }
          res.json({
            code:200,
            results:result,
        })
        }else {
            console.log(err);
            
        }
  
        // 以json形式，把操作结果返回给前台页面     
        // responseJSON(res, result);
  
        // 释放连接  
        connection.release();

      });
    });
  });
 
  

  // 添加评论接口
app.post('/add_comment', function (req, res, next) {
  // 从连接池获取连接 
  pool.getConnection(function (err, connection) {
    // 获取前台页面传过来的参数 
    var param =req.body;
    var addSql = 'insert into comment(name,article_id,contents,images,times) values (?,?,?,?,?)';
    var hh = [param.name,param.article_id,param.contents,param.images,param.times];
    // 建立连接 增加一个用户信息 
    connection.query(addSql,hh, function (err, result) {
      console.log(result)
      if (result) {
        result = {
          code: 200,
          msg: '增加成功'
          
        }
        res.json({
          code:200,
          results:result,
      })
      }else {
          console.log(err);
          
      }

      // 以json形式，把操作结果返回给前台页面     
      // responseJSON(res, result);

      // 释放连接  
      connection.release();

    });
  });
});

  //根据id查询对应的文章内容
app.get('/check',function(req,res){
    let id = req.query.id; // pass argument to query
    let sql = `SELECT * FROM articles WHERE id=` + id ;
    
    pool.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      res.send(results);

    });
    
  })


//根据id查询对应的评论内容
  app.get('/check_id',function(req,res){
    let id = req.query.id; // pass argument to query
    let sql = `SELECT * FROM comment WHERE article_id=` + id ;
    
    pool.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      res.send(results);

    });
    
  })
 
//修改文章点击次数
app.get('/click',function(req,res){
  // 获取请求参数 req.query的作用 get 的请求参数
  let { dianjis,id} = req.query;
  dianjis++
  // let todo = ['Insert a new row with placeholders', true];
  
  let sql = 'UPDATE articles SET dianjis=? WHERE Id = ?';
  
  // 将请求参数添加到数据库中
  pool.query(sql,[dianjis,id],function(err,results){
      if(err){
          res.json({err});
          return
      }
      res.json({
          code:200,
          results:results.affectedRows
      })
  })
})








//搜索接口

app.get('/login',function(req,res){
  console.log('执行了');
  
	var value = req.query.hiandes;
	pool.query(`SELECT * FROM articles where hiandes like '%${value}%'`, (error,vals,fields)=>{
    if (error) {
      return console.error(error.message);
    }
		let rows = JSON.stringify(vals);
		res.send(rows)
	})	
})



// 修改个人信息数据
app.get('/articlesChange',function(req,res){
  // let id = req.query
  // 获取请求参数 req.query的作用 get 的请求参数
  let { nameOne,nameTwo,occupation,site,email,img,id } = req.query;
  // let todo = ['Insert a new row with placeholders', true];
  
  let sql = 'UPDATE message SET nameOne = ?,nameTwo= ?,occupation = ?,site = ?,email = ?,img = ? WHERE Id = ?';
  
  // 将请求参数添加到数据库中
  pool.query(sql,[nameOne,nameTwo,occupation,site,email,img,id],function(err,results){
      if(err){
          res.json({err});
          return
      }
      res.json({
          code:200,
          results:results.affectedRows
      })
  })
})


// 修改博客文章内容
app.post('/reviseAnEssay',function(req,res){
  
  // let id = req.query
  // 获取请求参数 req.query的作用 get 的请求参数
  let { hiandes,jianjie,contents,dianjis,creates,kinds,names,imgs,images,id } = req.body;
  
  // let todo = ['Insert a new row with placeholders', true];
  
  let sql = 'UPDATE articles SET hiandes = ?,jianjie= ?,contents = ?,dianjis = ?,creates = ?,kinds = ?,names = ?,imgs = ?,images = ? WHERE Id = ?';
  
  // 将请求参数添加到数据库中
  pool.query(sql,[hiandes,jianjie,contents,dianjis,creates,kinds,names,imgs,images,id],function(err,results){
      if(err){
          res.json({err});
          return
      }
      res.json({
          code:200,
          results:results.affectedRows
      })
  })
})

// app.post('/reviseAnEssay', function (req, res, next) {
//   // 从连接池获取连接 
//   pool.getConnection(function (err, connection) {
//     // 获取前台页面传过来的参数 
//     var param =req.body;
//     var addSql = 'UPDATE articles SET nameOne = ?,nameTwo= ?,occupation = ?,site = ?,email = ?,img = ? WHERE Id = ?';
//     var hh = [param.hiandes,param.jianjie,param.contents,param.dianjis,param.creates,param.kinds,param.names,param.imgs,param.images];
//     // 建立连接 增加一个用户信息 
//     connection.query(addSql,hh, function (err, result) {
//       console.log(result)
//       if (result) {
//         result = {
//           code: 200,
//           msg: '增加成功'
          
//         }
//         res.json({
//           code:200,
//           results:result,
//       })
//       }else {
//           console.log(err);
          
//       }

//       // 以json形式，把操作结果返回给前台页面     
//       // responseJSON(res, result);

//       // 释放连接  
//       connection.release();

//     });
//   });
// });

app.get('/usersDel',function(req,res){
  let id = req.query.id;
  console.log(req.query);
  
  // delete 删除   id 字段  删除 id=请求参数的数据
  let sql = `delete from ${req.query.add} where id=?;`
  pool.query(sql,[id],function(err,results){
      if(err){
          res.json({ 
              err
          })
          return
      }

      
      // results.affectedRows =1 表示删除一条数据
      res.json({
          code:200,
          results:results
      })
  })
})

// function set(){
//   let id = 1; // pass argument to query
//   let sql = `SELECT * FROM sum WHERE id=` + 1 ;
  
//   pool.query(sql, (error, results, fields) => {
//     if (error) {
//       return console.error(error.message);
//     }
//     // console.log(JSON.stringify(results),'昨天');
    
//     return JSON.stringify(results)

//   });
// }

  
  


function add(a){
  async.series({
    one: function(callback){
      var add='articles'
      // 获取所有的用户
      pool.query(`select * from ${add}`, function(err, rows, fields) {     
          if (err) {
              throw err
          }
          // 获取到今天的总量
          var x=0
          for(var i=0;i<rows.length;i++){
            x+=rows[i].dianjis
          }
          callback(null,x); 
  })
    },
     //  再获取到昨天的总量
    two: function(callback){
      var add='sum'
      pool.query(`select * from ${add}`, function(err, rows, fields) {     
        if (err) {
            throw err
        }
        callback(null,rows[0]);
        
})
    },
    three:function(callback){
      var add='comment'
      // 获取所有的用户
      pool.query(`select * from ${add}`, function(err, rows, fields) {     
          if (err) {
              throw err
          }
          // 获取到今天的总量
          
          callback(null,rows.length); 
  })
    }
  },function (err, results) {
  // 把数据到今天的值进行计算，减去昨天的值，得到今天的点击量b
   var b= results.one-results.two.one;
   var c=results.three-results.two.two;
   var d=c/b;
   d=d.toFixed(2)
   var today = date.format(new Date(),'YYYY-MM-DD');
   var e={time:today,numbers:b,pinglun:c,proportion:d}
   console.log(e);


   pool.getConnection(function (err, connection) {
    // 获取前台页面传过来的参数 
    var param =e;
    var addSql = 'insert into information(time,numbers,pinglun,proportion) values (?,?,?,?)';
    var hh = [param.time,param.numbers,param.pinglun,param.proportion];
    // 建立连接 增加一个用户信息 
    connection.query(addSql,hh, function (err, result) {
      console.log(result)
      if (result) {
        console.log('成功');
        
      }else {
          console.log(err);
          
      }

      // 以json形式，把操作结果返回给前台页面     
      // responseJSON(res, result);

      // 释放连接  
      connection.release();

    });
  });

  });

}



function intervalFunc() {
  var date = require("silly-datetime");
var today = date.format(new Date(),'YYYY-MM-DD HH:mm:ss'); 
console.log(today.slice(11,19));
if(today.slice(11,19)== "23:59:59"){
// console.log('执行了');
add()
}
}



setInterval(intervalFunc, 1000);

var server = app.listen(3000, '127.0.0.1', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("地址为 http://%s:%s", host, port);
})

