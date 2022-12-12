import { Component,OnInit} from '@angular/core';
import { CharactersService } from '../characters.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
    personajes:any=null;

    constructor(private charactersService: CharactersService){}

    ngOnInit(){
      this.charactersService.retornar_clientes()
        .subscribe(
          result =>{
            this.personajes=result;
          }
        );
    }
}
