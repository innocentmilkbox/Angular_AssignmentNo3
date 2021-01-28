import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { NgbDateStruct, NgbDateAdapter, NgbDateParserFormatter, NgbDate, NgbModule, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
//import { NgbCustomDateAdapterService, NgbCustomDateFormatterService } from 'src/app/services/ngbcustomdate.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    //NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
