function useObserver(url, alt) {
  const observer = new IntersectionObserver((entries) => {
    entries
      .filter((item) => item.isIntersecting)
      .map((imgEntry) => {
        imgEntry.target.setAttribute("src", url);
        imgEntry.target.setAttribute("alt", alt);

        observer.unobserve(imgEntry.target);
      });
  });

  return observer;
}

export { useObserver };
