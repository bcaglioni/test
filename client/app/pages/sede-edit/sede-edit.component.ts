// Import Libraries
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { SedeService } from '../../services/sede.service';

// Import Models
import { Sede } from '../../domain/my-contacts_db/sede';

import { Room } from '../../domain/my-contacts_db/room';

// START - USED SERVICES
/*
 *	SedeService.create
 *		PARAMS: 
 *		
 *
 *	SedeService.get
 *		PARAMS: 
 *		
 *
 *	SedeService.update
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * SedeService  
 */
// END - REQUIRED RESOURCES

/**
 * Edit component for SedeEdit
 */
@Component({
    selector: 'sede-edit',
    templateUrl : './sede-edit.component.html',
    styleUrls: ['./sede-edit.component.css']
})
export class SedeEditComponent implements OnInit {

    item: Sede;
    listSede: Sede[];
	externalRoom: Room[];
    model: Sede;
    
    constructor(
        private sedeService: SedeService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init item
        this.item = new Sede();
	   this.externalRoom = [];
    }

    ngOnInit(): void {
            this.route.params.subscribe(param => {
                let id: string = param['id'];
                if (id !== 'new') {
                    // Get item from server 
                    this.sedeService.get(id).subscribe(item => this.item = item);
                    
                    
                    this.roomService.findBySede(id).subscribe(list => this.externalRoom = list);
                    
                }
            });
    }

    /**
     * Save Item
     */
    save (formValid:boolean, item: Sede): void{
        if (formValid) {
            if(item._id){
                this.sedeService.update(item).subscribe(data => this.goBack());
            } else {
                this.sedeService.create(item).subscribe(data => this.goBack());
            }  
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }
    

}