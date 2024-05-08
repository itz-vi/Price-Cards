const express = require('express');
const router = express.Router();
const cardModel = require("./cards");
const upload = require('./multer')
const path = require("path");
const uploadsPath = path.join(__dirname, "uploads");
router.use("/uploads", express.static(uploadsPath));

router.get('/', function (req, res,) {
  res.render('addcard');
});

// --------------   create card ------------- ///
router.get('/addcard', function (req, res, next) {
  res.render('addcard');
});

router.post('/addcard', upload.single("image"), async function (req, res) {
  const { title, price, add, storage, pack } = req.body;
  const imagefile = req.file ? req.file.filename : null
  const newcard = await cardModel.create({ title, price, add, storage, pack, image: imagefile })
  // console.log(newcard);
  res.redirect("/cardlist",)
})

//  ----------------  Read  card --------------
router.get('/cardlist', async function (req, res, next) {
  const card = await cardModel.find();
  res.render('cardlist', { card });
});




module.exports = router;