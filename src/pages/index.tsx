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
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@/components/Link";

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
          <Typography variant={mdUp ? "h4" : "h6"} className={classes.heading}>
            Ein Zentrum für die LSBTIQA*-Community in Karlsruhe
          </Typography>
          <Typography
            variant="body1"
            style={{ fontSize: mdUp ? "1.2rem" : "1rem" }}
          >
            Mach jetzt mit bei unserer Umfrage und teile deine Meinung zu einem
            queeren Zentrum in Karlsruhe!
            <Box my={4}>
              <Button
                variant="contained"
                size={mdUp ? "large" : "medium"}
                color="secondary"
                href="https://tr4pxy20yh0.typeform.com/to/DcPDUmxv"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jetzt teilnehmen
              </Button>
            </Box>
            Das queerKAstle Projekt ist ein Zusammenschluss von Freiwilligen aus
            verschiedenen LSBTIQA*-Organisationen in Karlsruhe mit dem Ziel, ein
            queeres Zentrum aufzubauen. Ganz allgemein verstehen wir darunter
            einen gemeinsam gestalteten Versammlungs-,
            Veranstaltungs- und Rückzugsort für alle queeren Personen, Gruppen
            und Organisationen in Karlsruhe. Durch ein solches Zentrum könnte
            die queere Community in Karlsruhe sich deutlich besser intern
            vernetzen und nach außen mit einer gemeinsamen Stimme sprechen.
            Deshalb haben wir Anfang 2021 mithilfe einer Förderung durch den
            <Link href="https://stja.de/"> Stadtjugendausschuss</Link> das
            Projekt „queerKAstle“ gestartet. &quot;queerKAstle&quot; ist dabei erstmal nur
            der Arbeitstitel. Wenn sich herausstellt, dass der Name gut ankommt,
            dann werden aber auch das Zentrum so taufen.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
