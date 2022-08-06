import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Box } from "@mui/system";

export default function MultiActionAreaCard({
  openModal,
  putDetailToModal,
  data,
}) {
  return (
    <Card
      sx={{
        width: "75%",
        height: "45%",
        boxShadow: "0 0 18px 3px  rgb(158, 4, 4)",
      }}
    >
      <CardActionArea
        sx={{
          width: "100%",
          height: "85%",
          backgroundColor: "whitesmoke",
        }}
        onClick={() => {
          putDetailToModal(data);
          openModal(true);
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "70%",
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            image={data.image}
            alt="green iguana"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        <CardContent sx={{ width: "100%", height: "40%" }}>
          <Typography
            sx={{
              width: "100%",
              height: "50%",
              overflow: "hidden",
              lineHeight: "28px",
            }}
          >
            {data.title}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              width: "100%",
              height: "60%",
              overflow: "hidden",
            }}
          >
            {data.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          width: "100%",
          height: "15%",
          backgroundColor: "whitesmoke",
        }}
      >
        <Button
          size="small"
          color="primary"
          onClick={() => {
            putDetailToModal(data);
            openModal(true);
          }}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
