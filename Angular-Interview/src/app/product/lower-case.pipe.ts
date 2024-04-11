import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'ToLowerCase'
})
export class LowerCasePipe implements PipeTransform {
    transform(inputValue: string | undefined): string {
        return inputValue !== undefined ? inputValue.toLowerCase(): '';
    }
}