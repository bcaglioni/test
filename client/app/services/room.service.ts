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
import { RoomBaseService } from "./base/room.base.service";
import { Room } from '../domain/my-contacts_db/room';

/**
 * YOU CAN OVERRIDE HERE RoomBaseService
 */

@Injectable()
export class RoomService extends RoomBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
}