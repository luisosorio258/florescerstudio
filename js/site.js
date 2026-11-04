(function () {
  // Número de WhatsApp num só sítio: todos os links com data-wa usam este valor.
  var WHATSAPP_NUMBER = "351900000000";
  var DEFAULT_MESSAGE = "Olá! Vi a página do Florescer Studio e gostava de fazer uma marcação.";

  var links = document.querySelectorAll("[data-wa]");
  for (var i = 0; i < links.length; i++) {
    var message = links[i].getAttribute("data-wa") || DEFAULT_MESSAGE;
    links[i].href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
    links[i].target = "_blank";
    links[i].rel = "noopener";
  }
})();
