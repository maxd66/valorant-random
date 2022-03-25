const router = require("express").Router();

//Filters can be passed to this route using a query string, or I could filter
//the results on the front end. Both are options, this might be better for
//load times if there are tons of strategies. However, it makes querying the
//server a little more complicated.
router.route("/").get().post();

router.route("/:strategyId").get().put().delete();

module.exports = router;
