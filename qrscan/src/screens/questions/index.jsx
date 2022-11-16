// import * as React from "react";
import React, { useState } from "react";
import { Container } from "@mui/system";

// import logo from "./logo.png";
import styles from "./TableStyles";

export default function BasicTable() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState("");

  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Rewards & Recognition Program</h1>
      <Container>hello</Container>
    </div>
  );
}
