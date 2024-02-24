import * as React from "react";
import { Translate, TranslateLink } from "gatsby-plugin-translate";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        <Translate id="not_found.could_not_find" />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <TranslateLink to="/">
          <Translate id="not_found.go_home" />
        </TranslateLink>
        .
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head = ({ pageContext }) => {
  return (
    <title>
      {pageContext.language === "pt"
        ? "Não Encontrado | Atelier F2G Arch"
        : "Not Found | Atelier F2G Arch"}
    </title>
  );
};
