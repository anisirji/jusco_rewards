import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import axios from "axios";
import FileSaver from "file-saver";
import React, { useEffect, useState } from "react";
import XLSX from "sheetjs-style";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const exportData = async () => {
    const fileType =
      "application/vnd.openxlmformats-officedocument.spreadsheetml.sheet;charset=UTF=8";

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const k = new Blob([excelBuffer], {
      type: fileType,
    });

    FileSaver.saveAs(k, "data.xlsx");
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.post("/getTransData", {
          table_name: "transaction_survey",
        });

        setData(result.data[0]);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          padding: 10,
        }}
      >
        <Button variant="contained" onClick={exportData}>
          save data
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableCell>Q/A Id</TableCell>
            <TableCell>Entry By</TableCell>
            <TableCell>Entry Date</TableCell>
            <TableCell>Event Id</TableCell>
            <TableCell>House Id</TableCell>
            <TableCell>Marks</TableCell>
          </TableHead>
          <TableBody>
            {data.map((k) => {
              return (
                <TableRow>
                  <TableCell>{k.QnA_id}</TableCell>
                  <TableCell>{k.username}</TableCell>
                  <TableCell>{k.entry_date}</TableCell>
                  <TableCell>{k.event_id}</TableCell>
                  <TableCell>{k.house_id}</TableCell>
                  <TableCell>{k.marks}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
