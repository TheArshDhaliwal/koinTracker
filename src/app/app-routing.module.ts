import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { CoinPageComponent } from './coin-page/coin-page.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';

const routes: Routes = [
  {path:'', redirectTo:'content', pathMatch:'full'},
  {path:'', component:ContentComponent},
  {path:'coin-page', component:CoinPageComponent},
  {path:'coin-details', component:CoinDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
