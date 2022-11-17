import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";

const ScanQr = () => {
  const [houseId, setHouseId] = useState("");

  let navigate = useNavigate();

  const handleErrorWebCam = (error) => {
    console.log(error);
  };

  const handleScanWebCam = (e) => {
    console.log(e);
    setHouseId(e);
    // navigate("/questions");
  };
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <QrReader
          delay={300}
          onError={handleErrorWebCam}
          onScan={handleScanWebCam}
        />
      </div>
      <Button
        onClick={async () => {
          setHouseId("HS0035995");
          console.log(houseId);
          let data;
          const d = await axios
            .get(`https://dev.tsapplications.in/api/v1/amenity/${houseId}`)
            .then((res) => {
              data = res.data;
              localStorage.setItem("houseDetails", JSON.stringify(res.data));
            });
          // const p = await axios.post("/createCustomer");

          console.log(data);
          navigate("/questions");
        }}
        variant="contained"
      >
        Click
      </Button>
    </div>
  );
};

export default ScanQr;
