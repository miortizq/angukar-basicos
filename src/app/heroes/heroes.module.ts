import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";   
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


//Al importar NgModule se requiere definir el decorador correspondiente 
//en las declaraciones se especifican que elementos contiene el módulo
//en exports se especifican los elementos que van a ser visibles por fuera de este modulo
//en imports se especifican los módulos que requiero utilizar
//Importar el CommonModule puede evitar que se presenten errores al usar las directivas ngIf y ngFor
@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule 
{

}