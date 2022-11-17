// import * as React from "react";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import axios from "axios";
import Column from "./components/Coulmn";

// import logo from "./logo.png";
import styles from "./TableStyles";

export default function BasicTable() {
  const [dataTable, setDataTable] = useState([]);
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    axios
      .post("/getAllData", { table_name: "metadata_QnA_list" })
      .then((res) => {
        console.log(res.data.data + "data ");
        setDataTable(res.data.data);
      });
    axios.post("/getAllData", { table_name: "metadata_marks" }).then((res) => {
      console.log(res.data.data);
      setMarks(res.data.data);
    });
  }, []);
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Rewards & Recognition Program</h1>
      <Container>
        {dataTable.map((d, i) => (
          <Column Q={d} M={marks} i={i} />
        ))}
      </Container>
    </div>
  );
}
