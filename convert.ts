import { pdfToPng } from "pdf-to-png-converter";

import type { PngPageOutput } from "pdf-to-png-converter";

(async function convert() {
  try {
    const pngPages: PngPageOutput[] = await pdfToPng("./build/resume.pdf",
    {
        outputFolder: 'preview',
        outputFileMask: 'resume',
        verbosityLevel: 0,
    });

    console.log(`generated ${pngPages.length} images`)
  }
  catch (e) {
    console.error(e);
  }
})();


