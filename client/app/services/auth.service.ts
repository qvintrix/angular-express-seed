import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private router: Router) {
  }

}
