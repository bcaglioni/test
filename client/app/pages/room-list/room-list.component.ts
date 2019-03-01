// Import Libraries
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalRemoveComponent } from '../../components/modal-remove.component';


// Import Services
import { RoomService } from '../../services/room.service';

// Import Models
import { Room } from '../../domain/my-contacts_db/room';
import { Sede } from '../../domain/my-contacts_db/sede';
// START - USED SERVICES
/*
 *	RoomService.delete
 *		PARAMS: 
 *		
 *
 *	RoomService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * RoomService  
 */
// END - REQUIRED RESOURCES

@Component({
    selector: "room-list",
    templateUrl: './room-list.component.html',
    styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
    
    // Attributes
    list: Room[];
    search: any = {};
    idSelected: string;
    
    // Constructor
    constructor(
        private roomService: RoomService, 
        public dialog: MatDialog) {}

    // Functions
    ngOnInit(): void {
        this.roomService.list().subscribe(list => this.list = list);
    }

    openModal(id: string): void {
        let dialogRef = this.dialog.open(ModalRemoveComponent, {
            width: '250px',
            data: () => {
                // Execute on confirm
                this.roomService.remove(id).subscribe(() => {
                    dialogRef.close();
                });
                this.list = this.list.filter(item => item._id != id);
            }
        });
    }

}