import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/settings/employee/employee.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [EmployeeService]
})
export class ProfileComponent {
  constructor(svcEmployee: EmployeeService) {
    let data = svcEmployee.getData().subscribe({
      next: (data) => {
        data = data
        console.log(data);
      },

      error: (e) => {
        console.error(e);
      },

      complete() {
        console.log("is completed");
      },
    });
    console.log(data);
  }
}
