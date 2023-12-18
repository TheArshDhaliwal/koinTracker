import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { CoinPageComponent } from './coin-page/coin-page.component';

const routes: Routes = [
  {path:'', redirectTo:'content', pathMatch:'full'},
  {path:'', component:ContentComponent},
  {path:'coin-page', component:CoinPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
