import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MoviesComponent } from './movies.component'
import { NewComponent } from './new/new.component'
import { ListComponent } from './list/list.component'



const routes: Routes = [
  {
		path: '',
		pathMatch: 'full',
		redirectTo: 'list'
	},
  {
    path: '',
    component: MoviesComponent,
    children: [
      {
        path: 'new',
        component: NewComponent
      },
      {
        path: '',
        component: ListComponent
      }
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class MoviesRoutingModule { }
