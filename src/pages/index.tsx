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

export default function Index(): ReactElement {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <React.Fragment>
      <Box height={mdUp ? "100vh" : "auto"} display="flex" flexDirection="column">
        <Header />
        {mdUp && <Box flexGrow={1}></Box>}
        <Container maxWidth="md">
          <HomeImageUpper width="100%" height="auto" />
        </Container>
      </Box>
      <Container maxWidth="md">
        <HomeImageLower width="100%" height="auto" />
        <Box my={4}>
          <Typography variant="body1">
            Das queerKAstle Projekt ist ein Zusammenschluss von Freiwilligen aus
            verschiedenen LSBTQIA*-Organisationen in Karlsruhe mit dem Ziel, ein
            queeres Zentrum aufzubauen. Ganz allgemein verstehen wir darunter
            einen gemeinsam gestalteten und unterhaltenen Versammlungs-,
            Veranstaltungs- und Rückzugsort für alle queeren Personen, Gruppen
            und Organisationen in Karlsruhe. Durch ein solches Zentrum könnte
            die queere Community in Karlsruhe sich deutlich besser intern
            vernetzen und nach außen mit einer gemeinsamen Stimme sprechen,
            denken wir zumindest. "queerKAstle" soll erstmal der Titel unseres
            Projekts sein. Wenn sich herausstellt, dass der Name gut ankommt,
            dann werden auch das Zentrum so taufen.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
