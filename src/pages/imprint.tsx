import React, { ReactElement } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Foerderung from "@/components/Foerderung"

const useStyles = makeStyles((theme) => ({
  heading: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3)
  }
}));

export default function Index(): ReactElement {
  const classes = useStyles();

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />
      <Container maxWidth="md">
        <Typography variant="h3" className={classes.heading}>Impressum</Typography> 
        <Typography variant="h5" className={classes.heading}>Betreiber der Website</Typography> 
        Lorenzo Wormer<br/>
        Heinrich-Wittmann-Straße 19<br/>
        76131 Karlsruhe
        <Typography variant="h5" className={classes.heading}>Kontakt</Typography> 
        info[at]queerkastle.de
        <Typography variant="h5" className={classes.heading}>Förderung</Typography> 
        <Foerderung/>
      </Container>
      <Box flexGrow={1}></Box>
      <Footer />
    </Box>
  );
}
