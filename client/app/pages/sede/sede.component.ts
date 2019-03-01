// Import Libraries
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalRemoveComponent } from '../../components/modal-remove.component';


// Import Services
import { SedeService } from '../../services/sede.service';

// Import Models
import { Sede } from '../../domain/my-contacts_db/sede';

import { Room } from '../../domain/my-contacts_db/room';

// START - USED SERVICES
/*
 *	SedeService.delete
 *		PARAMS: 
 *		
 *
 *	SedeService.list
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

@Component({
    selector: "sede",
    templateUrl: './sede.component.html',
    styleUrls: ['./sede.component.css']
})
export class SedeComponent implements OnInit {
    
    // Attributes
    list: Sede[];
    search: any = {};
    idSelected: string;
    
    // Constructor
    constructor(
        private sedeService: SedeService, 
        public dialog: MatDialog) {}

    // Functions
    ngOnInit(): void {
        this.sedeService.list().subscribe(list => this.list = list);
    }

    openModal(id: string): void {
        let dialogRef = this.dialog.open(ModalRemoveComponent, {
            width: '250px',
            data: () => {
                // Execute on confirm
                this.sedeService.remove(id).subscribe(() => {
                    dialogRef.close();
                });
                this.list = this.list.filter(item => item._id != id);
            }
        });
    }

}