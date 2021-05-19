import { getOwner } from "discourse-common/lib/get-owner";


export default {
    setupComponent(args, component) {
        const composerComponent = getOwner(this).lookup("controller:composer");
        //Deselect all the tag checkboxes before loading composer if tags are not selected.
        if (!this.get('model.tags')) {
            composerComponent.send('deselectAll');
        }
        component.set('composerComponent', composerComponent);
    }
}
