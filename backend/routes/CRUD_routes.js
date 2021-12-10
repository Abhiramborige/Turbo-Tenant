const {
  create_ownertable,
  create_tenanttable,
  create_bookingtable,
  create_housetable,
  create_memberstable,
  create_ratingtable
} = require("../database/creations");
const {
  insert_into_ownertable,
  insert_into_tenanttable,
  insert_into_bookingtable,
  insert_into_memberstable,
  insert_into_housetable,
  insert_into_ratingtable,
} = require("../database/insertions");
const {
  read_ownertable,
  read_tenanttable,
  read_bookingtable,
  read_memberstable,
  read_housetable,
  read_ratingtable,
  read_alltenants,
  read_allowners,
  read_allbookings
} = require("../database/reading");
const {
  update_memberstable,
  update_housetable,
  update_bookingtable,
  update_tenanttable,
  update_ownertable,
} = require("../database/updation");
const router = require("./connection");

function create(req, res, next){
  create_bookingtable(req, res, next);
  create_housetable(req, res, next);
  create_memberstable(req, res, next);
  create_ownertable(req, res, next);
  create_tenanttable(req, res, next);
  create_ratingtable(req, res, next);
  res.status(200).send("All tables created 🥳!<br>")
}

router.get("/create_all_tables", create);

router.post("/insert_into_ownertable", insert_into_ownertable);
router.post("/insert_into_tenanttable", insert_into_tenanttable);
router.post("/insert_into_bookingtable", insert_into_bookingtable);
router.post("/insert_into_housetable", insert_into_housetable);
router.post("/insert_into_memberstable", insert_into_memberstable);
router.post("/insert_into_ratingtable",insert_into_ratingtable);

router.post("/read_ownertable", read_ownertable);
router.post("/read_tenanttable", read_tenanttable);
router.get("/read_bookingtable", read_bookingtable);
router.get("/read_housetable", read_housetable);
router.get("/read_memberstable", read_memberstable);
router.get("/read_ratingtable", read_ratingtable);
router.get("/read_alltenants", read_alltenants)
router.get("/read_allowners", read_allowners);
router.get("/read_allbookings", read_allbookings);

router.get("/update_ownertable", update_ownertable);
router.get("/update_tenanttable", update_tenanttable);
router.get("/update_bookingtable", update_bookingtable);
router.get("/update_housetable", update_housetable);
router.get("/update_memberstable", update_memberstable);

module.exports=router;