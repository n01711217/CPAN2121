const express = require('express');
const router = express.Router();

// Route: /name
router.get('/name', (req, res) => {
  res.send("Ernest OVBIOLOKUN");
});

// Route: /greeting
router.get('/greeting', (req, res) => {
  res.send("Hello, I'm Ernest OVBIOLOKUN - Student ID: n01711217");
});

// Route: /add?x=4&y=5
router.get('/add', (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);

  if (isNaN(x) || isNaN(y)) {
    return res.send("❌ Please provide valid numbers for x and y.");
  }

  const result = x + y;
  res.send(`✅ Result: ${x} + ${y} = ${result}`);
});

// Route: /calculate?a=3&b=4&operation=**
router.get('/calculate', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const op = req.query.operation;

  if (isNaN(a) || isNaN(b) || !op) {
    return res.send("❌ Please provide valid a, b, and operation (+, -, *, /, **)");
  }

  let result;
  switch (op) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = b !== 0 ? a / b : 'Cannot divide by 0'; break;
    case '**': result = a ** b; break;
    default: return res.send("❌ Invalid operation. Use +, -, *, /, **");
  }

  res.send(`✅ Result: ${a} ${op} ${b} = ${result}`);
});

module.exports = router;
