import { Pipe, PipeTransform } from "@angular/core";    

@Pipe({
    name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform{
    
    transform(value: string){

        let preposition: string[] = [
            "of",
            "the"
        ]
        let words = value.split(' ');
        for (var i = 0; i < words.length; i++){
            if(preposition.includes(words[i])){
                words[i].toLowerCase();
            }else{
                words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1).toLowerCase();
            }
        }
        return words.join(' ');
    }
}