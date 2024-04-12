import { Directive, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[addBorder]'
})
export class AddBorderDirective {
    constructor(private renderder2: Renderer2) {}

    @HostBinding('style.border') border: string = '';
    
    @HostListener('click') onClick() {
        this.border = '1px solid black'
    }
}