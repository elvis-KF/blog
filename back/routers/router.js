let express = require('express');
let user = require('../controls/user');
let api = require('../api');
let tag = require('../controls/tag')

let router = express.Router();

//user
router.post(api.addDpt, user.addDpt);
router.post(api.login, user.login)
router.get(api.getAccount, user.getAccount)
router.post(api.addUser, user.addUser)

//tag
router.get(api.getAllTag, tag.getAllTag)
module.exports = router;