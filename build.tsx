import fs from "node:fs";
import ReactPDF from '@react-pdf/renderer';
import yaml from "js-yaml";

import Document from "./src/components/Document";

try {
  const details = yaml.load(fs.readFileSync('./details.yaml', 'utf8'));

  console.log({details})

  ReactPDF.render(<Document details={details} />, `./build/resume.pdf`);
} catch (e) {
  console.log(e);
}
