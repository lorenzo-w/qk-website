import React, { ReactElement } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeImageUpper from "@/graphics/home_image_upper.svg";
import HomeImageLower from "@/graphics/home_image_lower.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Foerderung from "@/components/Foerderung"

const useStyles = makeStyles((theme) => ({
  heading: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
}));

export default function Index(): ReactElement {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box
        height={mdUp ? "100vh" : "auto"}
        display="flex"
        flexDirection="column"
      >
        <Header />
        {mdUp && <Box flexGrow={1}></Box>}
        <Container maxWidth="md">
          <HomeImageUpper width="100%" height="auto" />
        </Container>
      </Box>
      <Container maxWidth="md">
        <HomeImageLower width="100%" height="auto" />
        <Box my={6} mx={2} style={{ textAlign: "center" }}>
          <Typography variant={mdUp ? "h4" : "h5"} className={classes.heading}>
            Ein Zentrum für die LSBTIQA*-Community in Karlsruhe
          </Typography>
          <Typography
            variant="body1"
            style={{ fontSize: mdUp ? "1.2rem" : "1rem" }}
          >
            Wir, eine Gruppe von Mitgliedern der LSBTIQA*-Community aus
            Karlsruhe und Umgebung, finden es ist an der Zeit, dass auch
            Karlsruhe sein eigenes queeres Zentrum bekommt. <br />
            Ganz allgemein verstehen wir darunter einen gemeinsam gestalteten
            Versammlungs-, Veranstaltungs- und Rückzugsort für alle queeren
            Personen, Gruppen und Organisationen in Karlsruhe. <br />
            Durch ein solches Zentrum könnte sich die queere Community in
            Karlsruhe deutlich besser intern vernetzen und nach außen mit einer
            gemeinsamen Stimme sprechen. Deshalb haben wir Anfang 2021 das
            Projekt „queerKAstle“ ins Leben gerufen.
          </Typography>
          <Typography variant={mdUp ? "h5" : "h6"} className={classes.heading}>
            Gefördert durch
          </Typography>
          <Foerderung/>
        </Box>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
