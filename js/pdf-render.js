pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";

const url = "Actividades/act01-Equipo4.pdf";
const container = document.getElementById("pdf-container");

pdfjsLib.getDocument(url).promise.then(pdf => {
  for (let page = 1; page <= pdf.numPages; page++) {
    pdf.getPage(page).then(p => {

      const viewport = p.getViewport({ scale: 1.5 });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      canvas.style.display = "block";
      canvas.style.margin = "0 auto 20px";

      p.render({
        canvasContext: context,
        viewport: viewport
      });

      container.appendChild(canvas);
    });
  }
}).catch(error => {
  console.error("ERROR PDF:", error);
});
