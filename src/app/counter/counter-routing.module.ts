import { NgModule } from "@angular/core";
import { CounterButtonComponent } from "./counter-button/counter-button.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterComponent } from "./counter/counter.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: '', component: CounterComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CounterRoutingModule { }
export const CounterModuleComponents = [
    CounterComponent,
    CounterButtonComponent,
    CounterOutputComponent
]