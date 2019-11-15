import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SayHelloNavigationComponent } from './say-hello-navigation/say-hello-navigation.component';

const routes: Routes = [
  { path: 'say-hello', component: SayHelloNavigationComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
