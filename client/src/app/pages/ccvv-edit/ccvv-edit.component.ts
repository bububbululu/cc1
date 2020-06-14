// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CcvvService } from '../../services/ccvv.service';
// Import Models
import { Ccvv } from '../../domain/cc1_db/ccvv';

// START - USED SERVICES
/**
* ccvvService.create
*	@description CRUD ACTION create
*
* ccvvService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* ccvvService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Ccvv
 */
@Component({
    selector: 'app-ccvv-edit',
    templateUrl: 'ccvv-edit.component.html',
    styleUrls: ['ccvv-edit.component.css']
})
export class CcvvEditComponent implements OnInit {
    item: Ccvv;
    
    model: Ccvv;
    formValid: Boolean;

    constructor(
    private ccvvService: CcvvService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Ccvv();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.ccvvService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Ccvv
     *
     * @param {boolean} formValid Form validity check
     * @param Ccvv item Ccvv to save
     */
    save(formValid: boolean, item: Ccvv): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.ccvvService.update(item).subscribe(data => this.goBack());
            } else {
                this.ccvvService.create(item).subscribe(data => this.goBack());
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



