import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { ObservablesComponent } from './observables/observables.component';
import { HomeComponent } from './home/home.component';
import { OnewayDatabindingComponent } from './oneway-databinding/oneway-databinding.component';
import { TwowayDatabindingComponent } from './twoway-databinding/twoway-databinding.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { BuildInDirectivesComponent } from './build-in-directives/build-in-directives.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';

const routes: Routes = [
  
  { path: 'dataBinding', component: BindingComponent },
  { path: 'Pipes', component: PipesComponent },
  { path: 'Directives', component:  DirectivesComponent},
  { path: 'Observables', component: ObservablesComponent},
  { path: 'Home', component:HomeComponent},
  { path: 'oneway-databinding', component:OnewayDatabindingComponent },
  { path: 'twoway-databinding', component:TwowayDatabindingComponent },
  { path: 'CustomPipe', component:CustomPipeComponent },
  { path: 'AttributeDirective', component:AttributeDirectiveComponent },
  { path: 'BuildInDirective', component:BuildInDirectivesComponent},
  { path: 'StructuralDirective', component:StructuralDirectivesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
