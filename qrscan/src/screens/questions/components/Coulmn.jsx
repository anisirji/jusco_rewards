import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { style } from "./style";
const Column = ({ Q, M, i }) => {
  let q, c, m;
  if (Q) {
    q = Q.question;
    c = Q.choice;
  }
  if (M) {
    m = M;
  }
  console.log(Q);
  return (
    <Stack direction="column" alignItems="center" spacing={2} sx={style.main}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={style.container}
      >
        <h2 className="no">{i + 1}</h2>
        <h2 className="heading">{q}</h2>
      </Stack>

      <Stack
        direction="column"
        alignItems="flex-start"
        spacing={2}
        sx={style.container}
      >
        {" "}
        <div dangerouslySetInnerHTML={{ __html: c }}></div>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={style.container}
      >
        <FormControl>
          <FormLabel id="rewards">Weightage/Score</FormLabel>
          <RadioGroup row aria-labelledby="rewards" name="rewards">
            {m.map((k) => (
              <FormControlLabel
                value={k.marks}
                control={<Radio />}
                label={k.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={style.container}
      >
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          placeholder="Marks"
          variant="filled"
        />
        <Stack direction="row" alignItems="center" spacing={2}>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
        </Stack>
      </Stack>
      <Button variant="contained">Submit</Button>
    </Stack>
  );
};

export default Column;
