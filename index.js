const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sewa_kendaraan"
})

db.connect(error => {
    if (error) {
        console.log(error.message)
    } else {
        console.log("MySQL Connected")
    }
})


app.get("/penyewa", (req, res) => {
    
    let sql = "select * from data_penyewa"

    
    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                 message: error.message 
            }            
        } else {
            response = {
                count: result.length, 
                data_penyewa: result 
            }            
        }
        res.json(response) 
    })
})

app.get("/kendaraan", (req, res) => {
    
    let sql = "select * from data_kendaraan"

    
    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                 message: error.message 
            }            
        } else {
            response = {
                count: result.length, 
                data_kendaraan: result 
            }            
        }
        res.json(response) 
    })
})

app.get("/admin", (req, res) => {
    
    let sql = "select * from data_admin"

    
    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                 message: error.message 
            }            
        } else {
            response = {
                count: result.length, 
                data_admin: result 
            }            
        }
        res.json(response) 
    })
})

app.get("/penyewa/:id", (req, res) => {
    let data = {
        id_penyewa: req.params.id
    }
   
    let sql = "select * from data_penyewa where ?"

   
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message 
            }            
        } else {
            response = {
                count: result.length, 
                data_penyewa: result 
            }            
        }
        res.json(response) 
    })
})

app.get("/kendaraan/:id", (req, res) => {
    let data = {
        id_kendaraan: req.params.id
    }
   
    let sql = "select * from data_kendaraan where ?"

   
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message 
            }            
        } else {
            response = {
                count: result.length, 
                data_kendaraan: result 
            }            
        }
        res.json(response) 
    })
})

app.get("/admin/:id", (req, res) => {
    let data = {
        id_admin: req.params.id
    }
   
    let sql = "select * from data_admin where ?"

   
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message 
            }            
        } else {
            response = {
                count: result.length, 
                data_admin: result 
            }            
        }
        res.json(response) 
    })
})


app.post("/penyewa", (req,res) => {

    
    let data = {
        nama: req.body.nama,
        alamat: req.body.alamat,
        nik: req.body.nik
    }

   
    let sql = "insert into data_penyewa set ?"

    
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) 
    })
})

app.post("/kendaraan", (req,res) => {

    
    let data = {
        nopol: req.body.nopol,
        warna: req.body.warna,
        kondisi_kendaraan: req.body.kondisi_kendaraan
    }

   
    let sql = "insert into data_kendaraan set ?"

    
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) 
    })
})

app.post("/admin", (req,res) => {

    
    let data = {
        nama_admin: req.body.nama_admin,
        status_admin: req.body.status_admin
    }

   
    let sql = "insert into data_admin set ?"

    
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) 
    })
})


app.put("/penyewa", (req,res) => {

    
    let data = [
        
        {
            nama: req.body.nama,
            alamat: req.body.alamat,
            nik: req.body.nik
        },

        
        {
            id_penyewa: req.body.id_penyewa
        }
    ]

    
    let sql = "update data_penyewa set ? where ?"

   
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response) 
    })
})

app.put("/kendaraan", (req,res) => {

    
    let data = [
        
        {
            nopol: req.body.nopol,
            warna: req.body.warna,
            kondisi_kendaraan: req.body.kondisi_kendaraan
        },

        
        {
            id_kendaraan: req.body.id_kendaraan
        }
    ]

    
    let sql = "update data_kendaraan set ? where ?"

   
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response) 
    })
})

app.put("/admin", (req,res) => {

    
    let data = [
        
        {
            nama_admin: req.body.nama_admin,
            status_admin: req.body.status_admin
        },

        
        {
            id_admin: req.body.id_admin
        }
    ]

    
    let sql = "update data_admin set ? where ?"

   
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response) 
    })
})


app.delete("/penyewa/:id", (req,res) => {
    
    let data = {
        id_penyewa: req.params.id
    }

    
    let sql = "delete from data_penyewa where ?"

   
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) 
    })
})

app.delete("/kendaraan/:id", (req,res) => {
    
    let data = {
        id_kendaraan: req.params.id
    }

    
    let sql = "delete from data_kendaraan where ?"

   
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) 
    })
})

app.delete("/admin/:id", (req,res) => {
    
    let data = {
        id_admin: req.params.id
    }

    
    let sql = "delete from data_admin where ?"

   
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) 
    })
})

app.listen(8000, () => {
    console.log("Run on port 8000")
})
