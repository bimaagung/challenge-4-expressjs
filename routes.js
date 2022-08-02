const express = require('express');
const router = express.Router();

//Soal 3
router.get('/c_to_f', (req, res) => {
  let celcius = req.query['celcius'];
  let suhu = (9 / 5) * celcius + 32;
  res.json({
    suhu_f: `${suhu} F`,
  });
});

//Soal 2
router.get('/kuadrat', (req, res) => {
  let angka = req.query['angka'];
  let kuadrat = angka ** 2;
  res.json({
    hasil_kuadrat: kuadrat,
  });
});

//Soal 3
router.get('/factorial', (req, res) => {
  let angka = req.query['angka'];

  var result = 1;

  for (var i = 2; i <= angka; i++) {
    result = result * i;
  }

  res.json({
    hasil_factorial: result,
  });
});

module.exports = router;
