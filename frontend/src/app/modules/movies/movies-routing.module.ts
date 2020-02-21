import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MoviesComponent } from './movies.component'
import { NewComponent } from './new/new.component'
import { ListComponent } from './list/list.component'
import { ViewComponent } from './view/view.component'
import { EditComponent } from './edit/edit.component'
import { AuthGuard } from 'src/app/guards/auth.guard'



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
        component: NewComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      },
      {
        path: ':id/view',
        component: ViewComponent
      },
      {
        path: ':id/edit',
        component: EditComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
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
