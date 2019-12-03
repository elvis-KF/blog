let sql = require('../sql/sql');
let moment = require('moment');
let bcrypt = require('bcryptjs');
let func = require('../sql/func');
let mysql = require('mysql');

module.exports = {
    getAllTag(req, res){
        // let cur_page = req.body.cur_page;
        // let sql, arr, endLimit, startLimit;

        //     endLimit = cur_page*10;
        //     startLimit = endLimit-10;

            // sql = 'select tag_name from tag limit ?, ?';
            // arr = [startLimit, endLimit];
            let sql = 'select tag_name from tag';
            func.connPool(sql, (err,rows)=>{
                if(err){
                    throw err;
                }else{
                    // let tags = rows.map((item,index,arr)=>{
                    //     return item.tag_name
                    // })
                    res.json({
                        code: 200,
                        msg: 'success',
                        tags: rows
                    })
                }
            });
            // func.connPool(sql, arr, (err, rows)=>{
            //     rows = formatData(rows);
            //     res.json({ //响应拼接成json
            //         code: 200,
            //         msg: 'ok',
            //         resultList: rows
            //     })
            // });
    }
}