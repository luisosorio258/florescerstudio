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

  // Marcação online (Cal.com). Enquanto estiver vazio, os botões "Marcar" abrem o WhatsApp.
  // Para ativar: CAL_USERNAME = "florescerstudio". Os botões passam a abrir a agenda,
  // cada serviço da tabela de preços (data-cal) abre a sua marcação e os textos "only-online" aparecem.
  var CAL_USERNAME = "";
  var BRAND_COLOR = "#3A1D14";

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

  var online = !!CAL_USERNAME;
  var bookLinks = document.querySelectorAll("[data-book]");
  for (var j = 0; j < bookLinks.length; j++) {
    var link = bookLinks[j];
    if (online && !link.hasAttribute("data-wa-only")) {
      makeCalLink(link, CAL_USERNAME);
      var icon = link.querySelector(".ico");
      if (icon) icon.parentNode.removeChild(icon);
    } else {
      openInNewTab(link, whatsappLink(bookingMessage(link.getAttribute("data-book"))));
    }
  }

  if (online) enableOnlineBooking();

  function makeCalLink(el, calLink) {
    el.setAttribute("data-cal-link", calLink);
    el.setAttribute("data-cal-config", '{"layout":"month_view","theme":"light"}');
    if (el.tagName === "A") {
      el.href = "https://cal.com/" + calLink;
      el.removeAttribute("target");
    }
  }

  function enableOnlineBooking() {
    document.documentElement.setAttribute("data-booking", "online");

    var onlyOnline = document.querySelectorAll(".only-online");
    for (var a = 0; a < onlyOnline.length; a++) onlyOnline[a].hidden = false;
    var onlyWhatsapp = document.querySelectorAll(".only-whatsapp");
    for (var b = 0; b < onlyWhatsapp.length; b++) onlyWhatsapp[b].hidden = true;

    // Cada serviço da tabela de preços abre a marcação desse serviço.
    var rows = document.querySelectorAll(".price-row[data-cal]");
    for (var r = 0; r < rows.length; r++) {
      var row = rows[r];
      makeCalLink(row, CAL_USERNAME + "/" + row.getAttribute("data-cal"));
      row.setAttribute("role", "button");
      row.setAttribute("tabindex", "0");
      row.classList.add("is-bookable");
      var hint = document.createElement("span");
      hint.className = "row-book";
      hint.textContent = "Marcar";
      row.querySelector(".price-main").appendChild(hint);
      row.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); this.click(); }
      });
    }

    // Script oficial de incorporação do Cal.com (pop-up ao clicar).
    (function (C, A, L) {
      var p = function (a, ar) { a.q.push(ar); };
      var d = C.document;
      C.Cal = C.Cal || function () {
        var cal = C.Cal;
        var ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          var api = function () { p(api, arguments); };
          var namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", { origin: "https://cal.com" });
    window.Cal("ui", {
      theme: "light",
      hideEventTypeDetails: false,
      cssVarsPerTheme: { light: { "cal-brand": BRAND_COLOR } }
    });
  }
})();
