import { getOwner } from "discourse-common/lib/get-owner";


export default {
    setupComponent(args, component) {
        const composerComponent = getOwner(this).lookup("controller:composer");
        component.set('composerComponent', composerComponent);
    }
}
