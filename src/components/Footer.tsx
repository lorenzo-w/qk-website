import React, { ReactElement } from "react";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Link from "@/components/Link";
import Container from "@material-ui/core/Container";

const footerLinks = [
  {
    text: "Impressum",
    href: "/imprint",
  },
];

export default function Footer(): ReactElement {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar>
        <Container maxWidth="md">
          <Typography variant="body1">
            <Box display="flex">
              {footerLinks.map(({ text, href }) => (
                <Box key={href} mx={4}>
                  <Link href={href} color="textPrimary">
                    {text}
                  </Link>
                </Box>
              ))}
            </Box>
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
