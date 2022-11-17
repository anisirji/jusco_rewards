import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);

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
