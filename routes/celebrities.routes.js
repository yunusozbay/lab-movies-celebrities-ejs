// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const CelebrityModel = require('../models/Celebrity.model')
// all your routes here
router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity");
  });


router.post('/create', async (req, res) => {
  try {  const body = req.body
  console.log(body)
  await CelebrityModel.create(body)
  res.redirect('/celebrities')
  }
  catch (error) {
    res.render('celebrities/new-celebrity')
    console.log('Error ', error)
  }
})

router.get("/celebrities", async (req, res, next) => {
  try { 
  const celebrities = await CelebrityModel.find({})
  res.render("celebrities/celebrities.ejs", {celebrities});
  }
  catch (error) {
    console.log('Error ', error)
  }
});

module.exports = router