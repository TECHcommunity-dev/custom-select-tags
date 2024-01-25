import { getOwner } from "@ember/application";

export default {
  setupComponent(args, component) {
    const composerComponent = getOwner(this).lookup("service:composer");
    component.set("composerComponent", composerComponent);
  },
};
