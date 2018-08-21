import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule } from '@angular/material';
import { MatIconModule, MatListModule, MatGridListModule, MatCardModule } from '@angular/material';
import { MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MyDashComponent } from './my-dash/my-dash.component';
import { MyTableComponent } from './my-table/my-table.component';

import { RouterModule, Routes } from '@angular/router';
import { AmigoPageComponent } from './amigo-page/amigo-page.component';
import { importType } from '@angular/compiler/src/output/output_ast';

import { HttpClientModule } from '@angular/common/http';

import { AmigoListComponent } from './amigo-page/amigo-list/amigo-list.component';
import { AmigoService } from './amigo-page/amigo-service';

const appRoutes: Routes = [
  { path: 'amigo-page', component: AmigoPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashComponent,
    MyTableComponent,
    AmigoPageComponent,
    AmigoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatDatepickerModule,
    HttpClientModule
  ],
  providers: [AmigoService],
  bootstrap: [AppComponent]
})

export class AppModule { }

