import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[addBorder]'
})
export class AddBorderDirective {
    constructor() {}

    @HostBinding('style.border') border: string = '';
    
    @HostListener('click') onClick() {
        this.border = '1px solid black'
    }
}