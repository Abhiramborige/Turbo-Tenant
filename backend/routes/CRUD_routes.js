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

router.get("/create_ownertable", create_ownertable);
router.get("/create_tenanttable", create_tenanttable);
router.get("/create_bookingtable", create_bookingtable);
router.get("/create_housetable", create_housetable);
router.get("/create_memberstable", create_memberstable);

router.get("/insert_into_ownertable", insert_into_ownertable());
router.get("/insert_into_tenanttable", insert_into_tenanttable);
router.get("/insert_into_bookingtable", insert_into_bookingtable);
router.get("/insert_into_bookingtable", insert_into_bookingtable);
router.get("/insert_into_memberstable", insert_into_memberstable);

router.get("/read_ownertable", read_ownertable);
router.get("/read_tenanttable", read_tenanttable);
router.get("/read_bookingtable", read_bookingtable);
router.get("/read_housetable", read_housetable);
router.get("/read_memberstable", read_memberstable);

router.get("/update_ownertable", update_ownertable);
router.get("/update_tenanttable", update_tenanttable);
router.get("/update_bookingtable", update_bookingtable);
router.get("/update_housetable", update_housetable);
router.get("/update_memberstable", update_memberstable);

module.exports=router;