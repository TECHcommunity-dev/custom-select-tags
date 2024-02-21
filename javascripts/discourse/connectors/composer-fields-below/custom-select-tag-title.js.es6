import { getOwner } from "@ember/application";
import { set } from "@ember/object";

export default {
  setupComponent(args, component) {
    const composerComponent = getOwner(this).lookup("service:composer");
    
    // Binjan; 2024.02.21
    // composer draftKey eq new_private_message
    // don't show tag list
    let composerModel = this.get("model");
    if (composerModel.action == "privateMessage" 
      && (composerModel.draftKey == "new_private_message" || composerModel.draftKey == "private_message")) {
      set(composerComponent, "isShowTags", false)
    } 
    else {          
      set(composerComponent, "isShowTags", true)
    }
    
    component.set("composerComponent", composerComponent);
  },
};
