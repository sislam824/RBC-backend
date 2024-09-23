const express = require('express');
const router = express.Router();


let students = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];


router.get('/', (req, res) => {
    res.json(students);
});



module.exports = router;
