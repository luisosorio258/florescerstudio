(function () {
  // Número de WhatsApp num só sítio: todos os links com data-wa ou data-book usam este valor.
  var WHATSAPP_NUMBER = "351931976069";
  var DEFAULT_MESSAGE = "Olá! Vi o site do Florescer Studio e tenho uma dúvida.";

  // Mensagem padrão de marcação, já preenchida no WhatsApp.
  // {servico} é trocado pelo valor de data-book do botão (ex.: "Pés"); se estiver vazio fica em branco.
  var BOOKING_MESSAGE =
    "Olá! Vi o site do Florescer Studio e gostava de fazer uma marcação.\n\n" +
    "Serviço: {servico}\n" +
    "Dias e horários que me dão jeito: \n" +
    "Nome: ";

  // Página de marcação online. Enquanto estiver vazio, os botões "Marcar" abrem o WhatsApp.
  // Quando houver sistema de agendamento, basta colocar aqui o link.
  var BOOKING_URL = "";

  function whatsappLink(message) {
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message || DEFAULT_MESSAGE);
  }

  function bookingMessage(service) {
    return BOOKING_MESSAGE.replace("{servico}", service || "");
  }

  function openInNewTab(link, href) {
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener";
  }

  var waLinks = document.querySelectorAll("[data-wa]");
  for (var i = 0; i < waLinks.length; i++) {
    openInNewTab(waLinks[i], whatsappLink(waLinks[i].getAttribute("data-wa")));
  }

  var bookLinks = document.querySelectorAll("[data-book]");
  for (var j = 0; j < bookLinks.length; j++) {
    openInNewTab(bookLinks[j], BOOKING_URL || whatsappLink(bookingMessage(bookLinks[j].getAttribute("data-book"))));
  }
})();
