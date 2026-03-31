const copyButton = document.getElementById("copy-bibtex");
const bibtexBlock = document.getElementById("bibtex");

if (copyButton && bibtexBlock) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(bibtexBlock.textContent.trim());
      const originalLabel = copyButton.textContent;
      copyButton.textContent = "Copied";
      window.setTimeout(() => {
        copyButton.textContent = originalLabel;
      }, 1600);
    } catch (error) {
      copyButton.textContent = "Copy failed";
      window.setTimeout(() => {
        copyButton.textContent = "Copy BibTeX";
      }, 1800);
    }
  });
}
