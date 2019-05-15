var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/stripesignin', (req, res) => {
  stripe.account.create({
    stripe_publishable_key: req.body.stripe_publishable_key,
    access_token: req.body.access_token,
    stripe_user_id: req.body.stripe_user_id
  })
  .then(account => res.render('success'));
});

module.exports = router;
