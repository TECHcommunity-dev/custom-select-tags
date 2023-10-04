import { getOwner } from "discourse-common/lib/get-owner";


export default {
    setupComponent(args, component) {
        const composerComponent = getOwner(this).lookup("service:composer");
        component.set('composerComponent', composerComponent);
    }
}