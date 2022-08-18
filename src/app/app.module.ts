import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { ObservablesComponent } from './observables/observables.component';
import { HomeComponent } from './home/home.component';
import { OnewayDatabindingComponent } from './oneway-databinding/oneway-databinding.component';
import { TwowayDatabindingComponent } from './twoway-databinding/twoway-databinding.component';
import { CustompipePipe } from './custompipe.pipe';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { BuildInDirectivesComponent } from './build-in-directives/build-in-directives.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { FormsModule } from '@angular/forms';
import { CustomDirectiveDirective } from './custom-directive.directive';
@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    PipesComponent,
    DirectivesComponent,
    ObservablesComponent,
    HomeComponent,
    OnewayDatabindingComponent,
    TwowayDatabindingComponent,
    CustompipePipe,
    CustomPipeComponent,
    BuildInDirectivesComponent,
    AttributeDirectiveComponent,
    StructuralDirectivesComponent,
    CustomDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
