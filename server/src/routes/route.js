const { application } = require("express");
const express = require("express");
const router = new express.Router();

const createCustomer = require("../routes/dataManagement/createCustomer");
const transaction = require("../routes/dataManagement/transaction");
const createUser = require("../routes/users/createuser");
const login = require("../routes/users/login");
const { readDb, readDbs } = require("../utils/sqlCommands");

//POST TO READ ALL DATA {table}
router.post("/getAllData", async (req, res) => {
  const response = await readDb(req.body.table_name);
  res.send(response);
});

//POST TO READ SPECIFIC DATA {table}
router.post("/getSpecificData", async (req, res) => {
  const response = await readDbs(req.body.table_name, {
    field: req.body.condition.field,
    value: req.body.condition.value,
  });
  res.send(response);
});

//POST CREATE USER {user_role,username,password}
router.post("/createUser", async (req, res) => {
  const response = await createUser(req.body);
  res.send(response);
});

//POST LOGIN USER {username,password}
router.post("/login", async (req, res) => {
  const response = await login(req.body);
  res.send(response);
});

//POST CREATE CUSTOMER  {house_id,customer_name,mobile_no,address,zone,area,location,latitude, longitude}
router.post("/createCustomer", async (req, res) => {
  const response = await createCustomer(req.body);
  res.send(response);
});

//POST RECORD TRANSACTIONS  { house, QnA_id, marks, entry_by_token, event_id }
router.post("/record", async (req, res) => {
  const response = await transaction(req.body);
  res.send(response);
});

// router.post("/check",async (req,res)=>{
//   const response = await readDbs("metadata_customer",{})
// })

// router.get("/check", async (req, res) => {
//   const response = await readDb("metadata_marks", { field: "id", value: 1 });
//   console.log(response);
//   res.send(response);
// });

module.exports = router;
