/**
 * Extend the basic Item with some very simple modifications.
 * @extends {Item}
 */
export class DoomItem extends Item {
    /**
     * Augment the basic Item data model with additional dynamic data.
     */
    prepareData() {
      super.prepareData();
      
      if (!this.command) {
          this.command = "";
      }
    }

  }
  