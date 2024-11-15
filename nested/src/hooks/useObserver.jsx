function useObserver(url, alt) {
  const observer = new IntersectionObserver((entries) => {
    entries
      .filter((item) => item.isIntersecting)
      .map((imgEntry) => {
        imgEntry.target.setAttribute("src", url);
        imgEntry.target.setAttribute("alt", alt);
        imgEntry.target.classList.remove("bg-orange-300", "animate-bounce");

        observer.unobserve(imgEntry.target);
      });
  });

  return observer;
}

export { useObserver };
