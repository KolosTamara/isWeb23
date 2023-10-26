(function () {
  window.addEventListener("load", () => {
    const pathname = document.location.pathname
    const elements = document.getElementsByClassName("header_nav-link")

    for (const element of elements) {
      const hrefSplited = element.getAttribute('href').split('/').at(-1)
      const pathnameSplited = pathname.split('/').at(-1)

      if (pathnameSplited === hrefSplited) {
        element.classList.add("header_nav-link__active")
      }
    };
  })
})()