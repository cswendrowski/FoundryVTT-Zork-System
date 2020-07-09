/**
 * Extend the basic ItemSheet with some very simple modifications
 * @extends {ItemSheet}
 */
export class DoomItemSheet extends ItemSheet {

    /** @override */
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        classes: ["sheet", "item"],
        width: 700,
        height: 600
      });
    }
  
    /** @override */
    get template() {
      const path = "systems/zork/templates/item";
      // Return a single sheet for all item types.
      // return `${path}/item-sheet.html`;
  
      // Alternatively, you could use the following return statement to do a
      // unique item sheet by type, like `weapon-sheet.html`.
      return `${path}/doom.html`;
    }
  
    /* -------------------------------------------- */
  
    /** @override */
    getData() {
      const data = super.getData();
      return data;
    }
  
    /* -------------------------------------------- */
  
    /** @override */
    setPosition(options = {}) {
      const position = super.setPosition(options);
      const sheetBody = this.element.find(".sheet-body");
      const bodyHeight = position.height - 192;
      sheetBody.css("height", bodyHeight);
      return position;
    }
  
    /* -------------------------------------------- */
  
    /** @override */
    activateListeners(html) {
        super.activateListeners(html);
    
        console.log(this);
        
        var me = this;
        $("#start").click(function () {
            var dos = Dos(document.getElementById("jsdos"), {
                wdosboxUrl: "/systems/zork/lib/wdosbox.js",
                cycles: 1000,
                autolock: false,
            }).ready(function (fs, main) {
                var baseurl = "https://js-dos.com/cdn/";
                if (me.title != "digger") {
                    baseurl += "upload/"
                }

                fs.extract(baseurl + encodeURIComponent(me.title) + ".zip").then(function () {
                    var args = me.item.data.data.command.split("|");
                    for (var i = 0; i < args.length; i++) {
                        args[i] = args[i].trim();
                    }
                    console.log(args);
                    main(args).then(function (ci) {
                        window.ci = ci;
                    });
                });
            });

            console.log(dos);
        });
  
        // Everything below here is only needed if the sheet is editable
        if (!this.options.editable) return;
  
        // Roll handlers, click handlers, etc. would go here.
    }
  }
  