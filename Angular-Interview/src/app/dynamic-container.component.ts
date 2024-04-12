import { Component, ViewChild, ViewContainerRef } from "@angular/core";

@Component({
    selector: 'app-dynamic-container',
    template: '<div #container></div>'
})
export class DynamicContainer {
    @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef; 

    constructor(private viewContainerRef: ViewContainerRef) {

    }

    addComponent() {
        // const component = this.viewContainerRef.createComponent(this.container)
    }
}