import { pdfToPng } from "pdf-to-png-converter";

import type { PngPageOutput } from "pdf-to-png-converter";

(async function convert() {
  try {
    const pngPages: PngPageOutput[] = await pdfToPng("./examples/resume.pdf",
    {
        outputFolder: 'examples',
        outputFileMask: 'resume',
        verbosityLevel: 0,
    });
  }
  catch (e) {
    console.error(e);
  }
})();


