const { writeDb, readDb } = require("../../utils/sqlCommands");

//table,fields,values
async function getQuestions(res) {
  // table = "metadata_marks";
  // values = [10, "NO", 4];
  // fields = ["id", "label", "marks"];
  // const response = await writeDb(table, fields, values);
  const response = readDb("metadata_marks");
  return response;
}

module.exports = getQuestions;
