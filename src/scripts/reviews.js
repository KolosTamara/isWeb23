(function () {

  function renderReview(title, body) {
    const template = document.getElementById("reviewTemplate");
    console.log(template)

    const clone = template.content.cloneNode(true);
    const cloneTitle = clone.querySelectorAll(".review_title")[0];
    const cloneBody = clone.querySelectorAll(".review_body")[0];

    cloneTitle.textContent = title;
    cloneBody.textContent = body;

    const storagEl = document.getElementsByClassName('reviews_container')[0]

    storagEl.appendChild(clone);
  }

  function hideLoader() {
    const loader = document.getElementsByClassName("loader")[0];
    loader.classList.add("loader__hidden")
  }

  window.addEventListener("load", async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${Math.floor(1 + Math.random() * 10)}`)
      const data = await response.json()
      console.log(data)
      data.forEach(review => {
        if (review.title && review.body) {
          renderReview(review.title, review.body)
        }
      });
      hideLoader()
    } catch (e) {
      hideLoader()
      const alert = document.getElementsByClassName("error")[0];
      alert.classList.remove("error__hidden")
      console.log(e)
    }
  })
})();    
