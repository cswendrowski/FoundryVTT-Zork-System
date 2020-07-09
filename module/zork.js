Hooks.once('init', async function() {



  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };

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
