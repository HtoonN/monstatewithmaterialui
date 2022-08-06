import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  BoxOne,
  BoxTwo,
  CommantBox,
  CommantSectionBox,
} from "./CommantSection.style";

const CommantSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [commant, setCommant] = useState("");
  const [showError, setShowError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  let showName = "",
    showEmail = "",
    showCommant = "";

  function validateEmail(e) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(e).toLowerCase());
  }

  async function f() {
    if (name !== "" && email !== "" && commant !== "") {
      if (validateEmail(email)) {
        showName = name;
        showEmail = email;
        showCommant = commant;
        setEmail("");
        setName("");
        setCommant("");
        setEmailError(false);
        alert("Sorry, You can't send to me");
      } else {
        setEmailError(true);
      }
      setShowError(false);
    } else {
      setShowError(true);
      setEmailError(false);
    }
  }

  return (
    <div id="/commentSection">
      <CommantSectionBox>
        <Typography
          variant="h4"
          sx={{
            color: "white",
            textAlign: "center",
            mb: "10px",
          }}
        >
          Comment
        </Typography>
        <CommantBox>
          <BoxOne>
            <Typography gutterBottom>
              You can comment about my webpage.
            </Typography>
          </BoxOne>

          <BoxTwo
            onClick={() => {
              alert("Sorry,Coming Soon!");
            }}
          >
            {showError && (
              <Typography color="error" sx={{ fontSize: "10px" }}>
                You must fill all of 3 fields
              </Typography>
            )}
            <form
              autoComplete="off"
              noValidate
              data-netlify="true"
              name="Comment"
            >
              <Box sx={{ mb: "40px" }}>
                <TextField
                  disabled
                  type="text"
                  name="name"
                  label="Name"
                  variant="standard"
                  value={name}
                  required
                  helperText="Please Enter Your Name"
                  sx={{ ml: "5px" }}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />

                <TextField
                  disabled
                  type="email"
                  label="Email"
                  name="em"
                  variant="standard"
                  helperText="Enter Your Email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  sx={{ ml: "5px" }}
                />
                <Box>
                  {emailError && (
                    <Typography color="error" sx={{ fontSize: "10px" }}>
                      Invalid Email
                    </Typography>
                  )}
                </Box>
              </Box>
              <Box sx={{ mb: "10px" }}>
                <TextField
                  disabled
                  type="text"
                  label="Type Comment Here"
                  multiline
                  rows={8}
                  name="commant"
                  value={commant}
                  required
                  sx={{ width: "90%" }}
                  onChange={(e) => {
                    setCommant(e.target.value);
                  }}
                />
              </Box>
              <Box>
                <Button
                  disabled
                  variant="contained"
                  sx={{ backgroundColor: "red" }}
                  onClick={() => {
                    f();
                    if (
                      showName !== "" &&
                      showEmail !== "" &&
                      showCommant !== ""
                    ) {
                      console.log(
                        showName + "\n" + showEmail + "\n" + showCommant
                      );
                    }
                  }}
                >
                  Send
                </Button>
              </Box>
            </form>
          </BoxTwo>
        </CommantBox>
      </CommantSectionBox>
    </div>
  );
};

export default CommantSection;
