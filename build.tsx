import ReactPDF from '@react-pdf/renderer';

import Document from "./src/components/Document";

import details from "./details.json";

ReactPDF.render(<Document details={details} />, `./build/resume.pdf`);
