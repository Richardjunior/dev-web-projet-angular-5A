var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            SpinnerComponent,
            FullComponent,
            NavigationComponent,
            BreadcrumbComponent,
            SidebarComponent
        ],
        imports: [
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            HttpClientModule,
            NgbModule.forRoot(),
            RouterModule.forRoot(Approutes),
            PerfectScrollbarModule
        ],
        providers: [
            {
                provide: PERFECT_SCROLLBAR_CONFIG,
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map