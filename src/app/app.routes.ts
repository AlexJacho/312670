import { Routes } from '@angular/router';
import { HomeComponent } from './Domains/info/pages/home/home.component';
import { BoardsComponent } from './Domains/info/pages/boards/boards.component';


export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "boards",
        component: BoardsComponent
    }
];
