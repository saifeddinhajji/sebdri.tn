const express = require("express")
const user = express.Router()
const cors = require("cors")
 const Sepadri = require("../models/Sepadri")
const jwt = require("jsonwebtoken")

//var User = mongoose.model('User')
user.use(cors())

const multer = require("multer");
const filefilter =(req,file ,cb)=>{
    if(file.mimetype ==='image/png' || file.mimetype==='image/jpeg')
    cb(null,true)
    else
    cb(null,false)
}
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/image/Sepadri')
    }, 
    filename: function (req, file, cb) {     
   cb(null,   file.originalname )
    }
  })
var upload = multer({ 
    storage: storage,
    limits :{
        fileSize : 1024*1024*5
    }
    ,
    fileFilter :filefilter
    });

    
    user.post('/addsepadri',upload.array('photos', 5),(req, res) => {

        var images = [];
    (req.files).forEach(element => {
        images.push(element.path);  
    })
    const today = new Date()
    const sepadriData = {
        pointure: req.body.pointure,
        mark  :req.body.mark,
        couleur : req.body.couleur,
        prix : req.body.prix,
        date : today,
        product_image : JSON.stringify(images),
        user_id :jwt.verify(req.headers.authorization, process.env.SECRET_KEY)._id,
        choix :req.body.choix,
    }
    Sepadri.create(sepadriData)
    .then(sepadti => {
        res.json({ status:  ' registered true !' })
    })
    .catch(err => {
        res.send('error: ' + err)
    })

    })




module.exports = user