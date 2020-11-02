const path = require('path');
const express = require('express');
const router = express.Router();
router.get('/add-username', (req, res,next)=>{
   // res.send('<form action="/test/post-username" method="POST"> <input type="text" name="username">    <button type="submit"> Send </button> </form>');
   res.sendFile(path.join(__dirname, 'views', 'home.html'));
});
router.post('/post-username', (req, res, next)=>{
   console.log('data:');

});
module.exports = router;