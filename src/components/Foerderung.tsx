import React, { ReactElement } from "react";
import Link from "@/components/Link";

export default function Foerderung(): ReactElement {
  return (
    <React.Fragment>
      <Link
        href="https://www.demokratie-leben.de/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/BMFSFJ_DL_mitFoerderzusatz.jpg" height="100"></img>
      </Link>
      <Link href="https://stja.de/" target="_blank" rel="noopener noreferrer">
        <img src="/stja_logo_11_dunkelblau.jpg" height="100"></img>
      </Link>
    </React.Fragment>
  );
}
