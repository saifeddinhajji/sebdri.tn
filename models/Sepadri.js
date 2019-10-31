const mongoose = require('mongoose')
const Schema = mongoose.Schema
var SepadriShema = new Schema({
  pointure: {
    type: Number,
    required : true,
    min: [6, 'min'],
    max: [56, 'max']
  },
  mark: {
    type: String,
    required: [true, 'quel mark?']
  },
  couleur: {
    type: String,
    required: true
  },
  prix: {
    type: Number,
    required: [true, 'quel  prix ?']
  }
  ,
  user_id:{
  type : String,
 required : true
  },
  product_image:{
    type : String,
   required : true
    },
  date: {
    type: Date,
    default : Date.now
  },
  
  etat: {
    type:String,
   enum :['bon etat','passable','movaise'],
    default :  'bon etat'
  },
  choix: {
    type: String,
    enum: ['1er choix','2eme choix','3eme choix'],
    default :  '1er choix'
  },
  isaccept:
  {
    type :Boolean ,
    default:true
  }
});

module.exports = mongoose.model('Sepadri', SepadriShema);