(function () {
  window.addEventListener("load", () => {
    const duration = performance.measure("page-loaded").duration
    const span = document.getElementsByClassName("load-time_measure")[0]
    if (span) {
      span.textContent = Number(duration).toFixed(2)
    }
  })
})();    
