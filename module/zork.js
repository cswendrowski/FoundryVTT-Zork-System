Hooks.once('init', async function() {



  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };


  Hooks.once("ready", async function() {

  });

  Hooks.on("preCreateChatMessage", (context, info, id) => {
    console.log(context);
    var content = context.content;
    console.log(content);

    if (content.startsWith("&gt;") || content == undefined || content == "undefined") return;

    var uri = encodeURIComponent(content);

    var url = "https://zork.ruf.io/%3E" + uri;
    $.getJSON(url, handleZorkResponse);
  });

  function handleZorkResponse(response) {
    console.log(response);
    ChatMessage.create({
      content: response.msg
    });
  }

});
