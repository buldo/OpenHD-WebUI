import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FilesComponent } from './files/files.component';
import { SystemComponent } from './system/system.component';

@NgModule(
    { 
        declarations: 
        [
            AppComponent,
            NavMenuComponent,
            FilesComponent,
            SystemComponent
        ],
        bootstrap: [AppComponent], 
        imports: 
        [
            BrowserModule,
            AppRoutingModule
        ], 
        providers: 
            [
                provideHttpClient(withInterceptorsFromDi())
            ] 
    })
export class AppModule { }
