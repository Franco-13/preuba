if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .then((registration) => {
        console.log("Service Worker registrado con éxito: ", registration);
      })
      .catch((error) => {
        console.log("Error al registrar el Service Worker: ", error);
      });
  });
}
