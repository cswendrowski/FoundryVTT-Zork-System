import { DoomItem } from "./item/doom.js";
import { DoomItemSheet } from "./item/doom-sheet.js";

Hooks.once('init', async function() {

  game.zork = {
    DoomItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("zork", DoomItemSheet, { makeDefault: true });

  Hooks.on("chatMessage", (chatlog, content) => {
    if (content.startsWith("&gt;") || content == undefined || content == "undefined") return;

    var uri = encodeURIComponent(content);

    var url = "https://zork.ruf.io/%3E" + uri;
    $.getJSON(url, handleZorkResponse);
  });

  function handleZorkResponse(response) {
    ChatMessage.create({
      content: response.msg
    });
  }

});
