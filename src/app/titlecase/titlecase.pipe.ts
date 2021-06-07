import { Pipe, PipeTransform } from "@angular/core";    

@Pipe({
    name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform{
    
    transform(value: string){
        let newValue: string = value.toLowerCase();
        let currentIndex: number = -1;
        while(currentIndex < newValue.length){
            let space: number = this.findSpace(currentIndex+1, newValue);
            if (!(newValue.substring(currentIndex+1, space) == "the" || newValue.substring(currentIndex+1, space) == "of")){
                newValue = newValue.substring(0, currentIndex+1) + newValue.substring(currentIndex+1, currentIndex+2).toUpperCase() + newValue.substring(currentIndex+2, newValue.length);
            }
            currentIndex = space;
        }
        return newValue;
    }

    findSpace(index: number, title: string): number{
        while(index < title.length){
            if(title.substring(index, index+1) == " "){
                return index+1;
            }
        }
        return title.length;
    }
}