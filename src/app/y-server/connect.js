const config = require('./config/dbconfig.json');
const sql = require('mssql');
const bcrypt = require('bcrypt');

/*
- add_user()
- argumnets: request, response
- Description: takes request and adds user to database.
*/
async function add_user(req, res) {

    let conn = await sql.connect(config);
    
    try {

        let password = req.body.password;

        await bcrypt.hash(password, 6).then( async function(hash) {

            await sql.query(`INSERT INTO dbo.Users(first, last, email, hash, funds) 
            VALUES('${req.body.first}','${req.body.last}','${req.body.email}', 
                    '${hash}','${req.body.amount}')`);

        }).catch(error => {

            console.log(error);

        });

    }
    catch(error) {

        console.log(error);

    }
    finally {

        await conn.close();

    }

}

/*
- auth()
- argumnets: request, response
- Description: sends authentication response, true if email, 
  password, and hash combination are valid and false if not.
*/
async function auth(req, res) {
    
    let conn = await sql.connect(config);

    try {
        
        let result = await sql.query(`Select hash from dbo.Users 
            Where email='${req.body.email}'`);
            
            bcrypt.compare(req.body.password, result.recordset[0].hash, function(err, result) {

                res.send(result);

            });

    }
    catch(error) {

        console.log(error);

    }
    finally {

        await conn.close();

    }

}

/*
- add_account()
- argumnets: request, response
- Description: adds account - user_id, account_name and 
  funds_available to dbo.Account table in database.
*/
async function add_account(req, res) {

    let conn = await sql.connect(config);

    try {

        let result = await sql.query(`Select * From dbo.Account Where account = '${req.body.account}'
            AND [user] = '${req.body.user}'`);

        if(JSON.stringify(result.recordset)  == '[]') {

            let result = await sql.query(`Insert Into dbo.Account([user], account, funds, [percent], dollar, total) 
                Values('${req.body.user}', '${req.body.account}', '${req.body.funds}',
                        '${req.body.percent}', '${req.body.dollar}', '${req.body.total}')`);

            console.log("Account: " + req.body.account + ", " + "successfully added!");

            res.send(true);

        }
        else {

            console.log("Error: account wasn't added");

            res.send(false);

        }

    }
    catch(error) {

        console.log(error);

    }
    finally {

        await conn.close()
        
    }

}

/*
- get_accounts()
- argumnets: request, response
- Description: gets accounts - with user email and returns
  response object {name: ?, funds: ?}
  function.
*/
async function get_accounts(req, res) {

    let conn = await sql.connect(config);

    try {

        let result = await sql.query(`Select * From dbo.Account 
            Where [user] = '${req.body.user}'`);


        res.send(result.recordset);

    }
    catch(error) {

        console.log(error);

    }
    finally {

        await conn.close();
        
    }
        
}

/*
- delete_account()
- argumnets: request, response
- Description: deletes specified account from database.
*/
async function delete_account(req, res) {

    let conn = await sql.connect(config);

    try {

        let result = await sql.query(`Delete From dbo.Account 
            Where account = '${req.body.account}'`);

        res.send(result.recordset);

    }
    catch(error) {

        console.log(error);

    }
    finally {

        await conn.close();

    }

}

/*
- add_stock()
- argumnets: request, response
- Description: adds stock data to
  dbo.Account table in database.
*/

async function add_stock(req, res) {

    let conn = await sql.connect(config) 

    try {

        await sql.query(
            `INSERT INTO dbo.Stock([user], account, stock, shares,
                price, date, average, total) VALUES(
                '${req.body.user}', '${req.body.account}',
                '${req.body.stock}', '${req.body.shares}', 
                '${req.body.price}', '${req.body.date}', 
                '${req.body.average}','${req.body.total}')`);
        
        console.log("Stock: " + req.body.stock + ", " + "successfully added!");

        res.send(true);

    }
    catch(error) {

        console.log(error);

        res.send(false);

    }
    finally {

        await conn.close();

    }

}

/*
- get_stocks()
- argumnets: request, response
- Description: gets stock data from
  dbo.Account table in database.
*/
async function get_stocks(req, res) {

    let conn = await sql.connect(config);

    try {

        let result = await sql.query(
            `Select * From dbo.Stock
            Where Stock.[user] = '${req.body.user}'
            And Stock.account = '${req.body.account}'`); 
        
        res.send(result.recordset);
    
    }
    catch(error) {

        console.log(error);

    }
    finally {

        await conn.close();

    }

}

/*
- delete_stock()
- argumnets: request, response
- Description: deletes specified stock from database.
*/
async function delete_stock(req, res) {

    let conn = await sql.connect(config);

    try {

        let result = await sql.query(`Delete From dbo.Stock 
            Where stock = '${req.body.stock}'`);

        res.send(result);

    }
    catch(error) {

        console.log(error);

    }
    finally {

        await conn.close();

    }

}

async function get_summary(req, res) {

    let conn = await sql.connect(config);

    try {

        let result = await sql.query(`Select * From dbo.Stock
            Where [user] = '${req.body.user}' 
            And
            account = '${req.body.account}'
            And
            stock = '${req.body.stock}'`);

        res.send(result.recordset);

    }
    catch(error) {

        console.log(error);

    }
    finally {

        await conn.close();

    }

}


module.exports = {
    add_user : add_user,
    auth : auth,
    add_account : add_account,
    get_accounts : get_accounts,
    delete_account : delete_account,
    add_stock : add_stock,
    get_stocks : get_stocks,
    delete_stock: delete_stock,
    get_summary : get_summary
};