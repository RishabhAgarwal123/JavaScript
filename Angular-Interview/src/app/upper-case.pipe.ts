import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'ToUpperCase'
})
export class UpperCasePipe implements PipeTransform {
    transform(value: string | undefined): string {
        return value !== undefined ? value.toUpperCase(): '';
    }
}