import { getOwner } from "discourse-common/lib/get-owner";


export default {
    setupComponent(args, component) {
        const composerComponent = getOwner(this).lookup("controller:composer");
        //Deselect all the tag checkboxes before loading composer if tags are not selected.
        if (!this.get('model.tags')) {
            composerComponent.send('deselectAll');
        }
        else{ //If Current topic/post contains tag then check select tags checkboxes accordingly in Composer. [Added by: Saurabh; Date: 21/06/2021]
            //Reset the checkboxes
            composerComponent.send('deselectAll');
            //Update select tags checkboxes based on pre-selected tags.
            let composerModel = this.get('model');
            if(composerModel && composerModel.tags){
                const _tags = composerModel.get('tags').slice();
                _tags.forEach((tag) => {
                    //Ignore case while checking/finding tags
                    var sagTagObj = composerComponent.get('productTags').find((tagObj) => tagObj.tagName.toLowerCase() == tag.toLowerCase());
                    //If Entered tag is present in sag product tag list then change respective checkbox status to checked.  
                    if(sagTagObj){
                        //Updated the checkbox status
                        Ember.set(sagTagObj,"isChecked", true); 
                    }
                });
            }
        }
        component.set('composerComponent', composerComponent);
    }
}
