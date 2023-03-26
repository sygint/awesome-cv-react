import { Document as PdfDocument, Page } from "@react-pdf/renderer";

import Header from "../Header";
import Sections from "../Sections";

import styles from "./Document.style";

interface Props {
  details: Details;
}

function Document({ details }: Props) {
  const { name, positions, phone, email, website, github, code, sections } = details;
  return (
    <PdfDocument>
      <Page size="A4" style={styles.page}>
        <Header name={name} positions={positions} phone={phone} email={email} website={website} github={github} code={code} />
        <Sections sections={sections} />
      </Page>
    </PdfDocument>
  );
}

export default Document;
