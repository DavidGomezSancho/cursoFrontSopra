import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { CmpDatabindingComponent } from './cmp-databinding/cmp-databinding.component';
import { CmpStrInterpolationComponent } from './cmp-databinding/cmp-str-interpolation/cmp-str-interpolation.component';
import { CmpPropertyBindingComponent } from './cmp-databinding/cmp-property-binding/cmp-property-binding.component';
import { EventBindingComponent } from './cmp-databinding/event-binding/event-binding.component';
import { CmpTwoWayBindingComponent } from './cmp-databinding/cmp-two-way-binding/cmp-two-way-binding.component';
import { CmpMiPropioTwoWayBindingComponent } from './cmp-databinding/cmp-mi-propio-two-way-binding/cmp-mi-propio-two-way-binding.component';
import { CmpInputOutputComponent } from './cmp-input-output/cmp-input-output.component';
import { CmpAComponent } from './cmp-input-output/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-input-output/cmp-b/cmp-b.component';
import { CmpEjercicio01MemeComponent } from './cmp-ejercicio01-meme/cmp-ejercicio01-meme.component';
import { CmpFormularioComponent } from './cmp-ejercicio01-meme/cmp-formulario/cmp-formulario.component';
import { CmpImagenComponent } from './cmp-ejercicio01-meme/cmp-imagen/cmp-imagen.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { DoblePipe } from './cmp-pipes/doble.pipe';
import { ReversePipe } from './cmp-pipes/reverse.pipe';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';


@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    SegundoComponenteComponent,
    CmpDatabindingComponent,
    CmpStrInterpolationComponent,
    CmpPropertyBindingComponent,
    EventBindingComponent,
    CmpTwoWayBindingComponent,
    CmpMiPropioTwoWayBindingComponent,
    CmpInputOutputComponent,
    CmpAComponent,
    CmpBComponent,
    CmpEjercicio01MemeComponent,
    CmpFormularioComponent,
    CmpImagenComponent,
    CmpPipesComponent,
    DoblePipe,
    ReversePipe,
    CmpDirectivasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
