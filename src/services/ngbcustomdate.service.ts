import { Injectable } from '@angular/core';
import { NgbDateAdapter, NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class NgbCustomDateAdapterService extends NgbDateAdapter<string> {

  public MMMArray = [{ Name: 'Jan', Month: 1 }, { Name: 'Feb', Month: 2 }, { Name: 'Mar', Month: 3 },
  { Name: 'Apr', Month: 4 }, { Name: 'May', Month: 5 }, { Name: 'Jun', Month: 6 }, { Name: 'Jul', Month: 7 }, { Name: 'Aug', Month: 8 },
  { Name: 'Sep', Month: 9 }, { Name: 'Sept', Month: 9 }, { Name: 'Oct', Month: 10 }, { Name: 'Nov', Month: 11 }, { Name: 'Dec', Month: 12 }];
  fromModel(value: string | null): import("@ng-bootstrap/ng-bootstrap").NgbDateStruct {
    if (value) {
      let date = value.split('-');
      if (date.length === 3) {
        const montharr = this.MMMArray.find(e => (e.Name.toLocaleLowerCase() === date[1].toLocaleLowerCase() || e.Month === parseInt(date[1], 10)));
        if (montharr) {
          return {
            day: parseInt(date[0], 10),
            month: montharr.Month,
            year: parseInt(date[2], 10)
          };
        } else {
          return null;
        }
      }
    }
    return null;
  }

  toModel(date: NgbDateStruct): string {
    return date ? date.day + '-' + this.MMMArray.find(e => e.Month === date.month).Name + '-' + date.year : null;
  }

}

@Injectable({
  providedIn: 'root'
})
export class NgbCustomDateFormatterService extends NgbDateParserFormatter {
  public MMMArray = [{ Name: 'Jan', Month: 1 }, { Name: 'Feb', Month: 2 }, { Name: 'Mar', Month: 3 },
  { Name: 'Apr', Month: 4 }, { Name: 'May', Month: 5 }, { Name: 'Jun', Month: 6 }, { Name: 'Jul', Month: 7 }, { Name: 'Aug', Month: 8 },
  { Name: 'Sep', Month: 9 }, { Name: 'Sept', Month: 9 }, { Name: 'Oct', Month: 10 }, { Name: 'Nov', Month: 11 }, { Name: 'Dec', Month: 12 }];

  parse(value: string): NgbDateStruct {
    if (value) {
      let date = value.split('-');
      if (date.length === 3) {
        const montharr = this.MMMArray.find(e => (e.Name.toLocaleLowerCase() === date[1].toLocaleLowerCase() || e.Month === parseInt(date[1], 10)));
        if (montharr) {
          return {
            day: parseInt(date[0], 10),
            month: montharr.Month,
            year: parseInt(date[2], 10)
          };
        } else {
          return null;
        }
      }
    }
    return null;
  }
  
  format(date: NgbDateStruct): string {
    return date ? date.day + '-' + this.MMMArray.find(e => e.Month === date.month).Name + '-' + date.year : null;
  }


}
