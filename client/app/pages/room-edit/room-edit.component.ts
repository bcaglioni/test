// Import Libraries
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { RoomService } from '../../services/room.service';
import { SedeService } from '../../services/sede.service';

// Import Models
import { Room } from '../../domain/my-contacts_db/room';
import { Sede } from '../../domain/my-contacts_db/sede';
// START - USED SERVICES
/*
 *	RoomService.create
 *		PARAMS: 
 *		
 *
 *	RoomService.get
 *		PARAMS: 
 *		
 *
 *	SedeService.list
 *		PARAMS: 
 *		
 *
 *	RoomService.update
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * RoomService  
 * SedeService  
 */
// END - REQUIRED RESOURCES

/**
 * Edit component for RoomEdit
 */
@Component({
    selector: 'room-edit',
    templateUrl : './room-edit.component.html',
    styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {

    item: Room;
    listSede: Sede[];
    model: Room;
    
    constructor(
        private roomService: RoomService,
        private sedeService: SedeService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init item
        this.item = new Room();
    }

    ngOnInit(): void {
            this.route.params.subscribe(param => {
                let id: string = param['id'];
                if (id !== 'new') {
                    // Get item from server 
                    this.roomService.get(id).subscribe(item => this.item = item);
                    
                    
                }
                this.sedeService.list().subscribe(list => this.listSede = list);
            });
    }

    /**
     * Save Item
     */
    save (formValid:boolean, item: Room): void{
        if (formValid) {
            if(item._id){
                this.roomService.update(item).subscribe(data => this.goBack());
            } else {
                this.roomService.create(item).subscribe(data => this.goBack());
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