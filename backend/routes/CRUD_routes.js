const {
  create_ownertable,
  create_tenanttable,
  create_bookingtable,
  create_housetable,
  create_memberstable,
} = require("../database/creations");
const {
  insert_into_ownertable,
  insert_into_tenanttable,
  insert_into_bookingtable,
  insert_into_memberstable,
  insert_into_housetable,
} = require("../database/insertions");
const {
  read_ownertable,
  read_tenanttable,
  read_bookingtable,
  read_memberstable,
  read_housetable,
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
  res.status(200).send("All tables created 🥳!<br>")
}

router.get("/create_all_tables", create);

router.post("/insert_into_ownertable", insert_into_ownertable);
router.post("/insert_into_tenanttable", insert_into_tenanttable);
router.post("/insert_into_bookingtable", insert_into_bookingtable);
router.post("/insert_into_housetable", insert_into_housetable);
router.post("/insert_into_memberstable", insert_into_memberstable);

router.post("/read_ownertable", read_ownertable);
router.post("/read_tenanttable", read_tenanttable);
router.get("/read_bookingtable", read_bookingtable);
router.get("/read_housetable", read_housetable);
router.get("/read_memberstable", read_memberstable);

router.get("/update_ownertable", update_ownertable);
router.get("/update_tenanttable", update_tenanttable);
router.get("/update_bookingtable", update_bookingtable);
router.get("/update_housetable", update_housetable);
router.get("/update_memberstable", update_memberstable);

module.exports=router;