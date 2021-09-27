import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { InnerComponent } from './views/inner/inner.component';
import { FormComponent } from './views/form/form.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inner/:id', component: InnerComponent },
    { path: 'create', component: FormComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
