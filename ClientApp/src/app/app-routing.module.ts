import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BmrComponent } from './bmr/bmr.component';

const routes: Route[] = [
    { path: 'mybmrs', component: BmrComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
