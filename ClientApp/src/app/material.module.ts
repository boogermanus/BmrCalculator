import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
    declarations: [],
    imports: [
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
    ],
    exports: [
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
    ]
})
export class MaterialModule { }
