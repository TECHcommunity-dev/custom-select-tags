import { getOwner } from "@ember/application";
import { set } from "@ember/object";

export default {
  setupComponent(args, component) {
    const composerComponent = getOwner(this).lookup("service:composer");
    
    // Binjan; 2024.05.02
    // composer action eq privateMessage
    // don't show tag list
    let composerModel = this.get("model");
    if (composerModel.action == "privateMessage") {
      set(composerComponent, "isShowTags", false)
    } 
    else {          
      set(composerComponent, "isShowTags", true)
    }

    component.set("composerComponent", composerComponent);
  },
};
