let mysql = require('mysql');
let db = require('../configs/db');
let pool = mysql.createPool(db);


module.exports = {
    /** 连接数据库执行操作
     * sql: sql语句
     * val: 值
     * cb: 执行函数
     */
    connPool(sql, cb){
        //先连接，再查询，最后释放
        pool.getConnection((err, conn)=>{
            if(err){
               console.log(err);  
            }else{
                let q = conn.query(sql, (err,rows)=>{
                    if(err){
                        console.log(err);
                    }
    
                    cb(err, rows);
    
                    conn.release();
                })
            }
        })
    },

    //json格式
    writeJson(res, code=200, msg='ok',data=null){
        let obj = {code,msg,data};

        if(!data){
            delete obj.data;
        }
        res.send(obj);
    }
}