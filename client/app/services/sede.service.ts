// DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../security/authentication.service';

// CONFIG
import { config } from "../../config/properties";

// MODEL
import { SedeBaseService } from "./base/sede.base.service";
import { Sede } from '../domain/my-contacts_db/sede';

/**
 * YOU CAN OVERRIDE HERE SedeBaseService
 */

@Injectable()
export class SedeService extends SedeBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
}