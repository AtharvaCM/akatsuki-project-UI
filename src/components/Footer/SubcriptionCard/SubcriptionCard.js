import React from "react";
import { Button, Card, Grid, TextField, Typography, Box } from "@mui/material";
import style from "./SubcriptionCard.module.css";

const SubcriptionCard = () => {
  return (
    <Card>
      <div className={style.mainCards}>
        <Box>
          <div className={style.innerCard}>
            <Grid
              container
              spacing={1}
              display="flex"
              alignItems={"center"}
              textAlign={"center"}
            >
              <Grid item xs={5}>
                <Typography variant="h5" color={"white"}>
                  Get Our Pro Offers
                </Typography>
              </Grid>
              <Grid
                item
                xs={7}
              >
                <Card className={style.subCards}>
                  <Grid className={style.rightCard} spacing={1} display="flex" alignItems="center">
                    <Grid item xs={7}>
                      {/* <TextField
                        id="fullWidth"
                        fullWidth
                        placeholder="Type Your Email Here"
                        
                      /> */}
                      <input placeholder="Type Your Email Here" className={style.emailFields}></input>
                    </Grid>
                    <Grid item xs={5} >
                      <Button size="large" style={{backgroundColor:"#353945",color:"white"}}>
                        Subcribe
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Box>
      </div>
    </Card>
  );
};

export default SubcriptionCard;