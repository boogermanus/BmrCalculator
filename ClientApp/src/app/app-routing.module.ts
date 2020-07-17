import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BmrComponent } from './bmr/bmr.component';
import { BmrCalculatorComponent } from './bmr-calculator/bmr-calculator.component';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';

const routes: Route[] = [
    { path: 'mybmrs', component: BmrComponent, canActivate: [AuthorizeGuard] },
    { path: 'calculate', component: BmrCalculatorComponent},
    { path: '**', component: BmrCalculatorComponent, pathMatch: 'full' },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
