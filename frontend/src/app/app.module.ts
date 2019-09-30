import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { PutComponent } from './put/put.component';
import { ContentComponent } from './content/content.component';
import { AllDialogsComponent } from './all-dialogs/all-dialogs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    PutComponent,
    ContentComponent,
    AllDialogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule 
  ],
  entryComponents: [
    AllDialogsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
