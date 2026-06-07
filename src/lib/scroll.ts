export function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return false;

  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ block: "start" });
    return true;
  }

  return false;
}

export function scrollToCurrentHash() {
  const hash = window.location.hash;
  if (hash) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToHash(hash);
      });
    });
    return;
  }

  window.scrollTo(0, 0);
}
