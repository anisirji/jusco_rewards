// import * as React from "react";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import Column from "./components/Coulmn";

// import logo from "./logo.png";
import styles from "./TableStyles";

export default function BasicTable() {
  const [dataTable, setDataTable] = useState([]);
  const [marks, setMarks] = useState([]);
  const [id, setId] = useState("");
  const resObj = {};
  const [resData, setResData] = useState(resObj);
  const [clicked, setClicked] = useState(false);
  // https://jusco-reward.herokuapp.com
  https: useEffect(() => {
    axios
      .post("https://jusco-reward.herokuapp.com/getAllData", {
        table_name: "metadata_QnA_list",
      })
      .then((res) => {
        // console.log(res.data.data + "       ------>   data ");
        setDataTable(res.data.data);
      });
    axios
      .post("https://jusco-reward.herokuapp.com/getAllData", {
        table_name: "metadata_marks",
      })
      .then((res) => {
        setMarks(res.data.data);
      });

    setId(uuidV4());
  }, []);

  async function submitRecord() {
    setClicked(true);
    for (let i = 0; i < Object.keys(resData).length; i++) {
      await axios
        .post("https://jusco-reward.herokuapp.com/record", resData[i])
        .then((res) => {
          setClicked(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Rewards & Recognition Program</h1>
      <Container>
        {dataTable.map((d, i) => (
          <Column
            Q={d}
            M={marks}
            i={i}
            id={id}
            setResData={setResData}
            obj={resObj}
          />
        ))}
      </Container>
      <Button onClick={submitRecord} variant="contained">
        {clicked ? "Submitted" : "Submit"}
      </Button>
    </div>
  );
}
