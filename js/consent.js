(function () {
  // Substituir pelo ID real da propriedade GA4 quando for criada.
  var GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
  var STORAGE_KEY = "florescer_cookie_consent";

  function getConsent() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function setConsent(value) {
    try {
      if (value === null) localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {}
  }

  function loadAnalytics() {
    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID.indexOf("XXXX") !== -1) return;
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  function showBanner() {
    var banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.innerHTML =
      '<p>Usamos cookies para perceber como o site é usado (Google Analytics). <a href="privacidade.html">Saber mais</a>.</p>' +
      '<div class="cookie-actions">' +
      '<button type="button" class="btn-cookie btn-cookie-reject">Recusar</button>' +
      '<button type="button" class="btn-cookie btn-cookie-accept">Aceitar</button>' +
      "</div>";
    document.body.appendChild(banner);

    banner.querySelector(".btn-cookie-accept").addEventListener("click", function () {
      setConsent("accepted");
      loadAnalytics();
      banner.remove();
    });
    banner.querySelector(".btn-cookie-reject").addEventListener("click", function () {
      setConsent("rejected");
      banner.remove();
    });
  }

  var consent = getConsent();
  if (consent === "accepted") {
    loadAnalytics();
  } else if (consent !== "rejected") {
    showBanner();
  }

  document.addEventListener("click", function (e) {
    var target = e.target.closest ? e.target.closest("[data-cookie-manage]") : null;
    if (target) {
      setConsent(null);
      location.reload();
    }
  });
})();
