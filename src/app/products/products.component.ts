import { Component } from "@angular/core";

@Component({

selector : "products", // <products></products>
templateUrl: "./products.component.html" 

})

export class ProductsComponent
{
    addProduct = true;
    enteredValue  = "Product 1:";

    constructor()
    {
        setTimeout(() => {
           this.addProduct = false; 
        }, 2000);
    }

    onClick()
        {
            console.log('button click');
        }

        onUpdateProductName(event: any)
        {

            console.log(event);
            this.enteredValue = (<HTMLInputElement>event.target).value;

        }
}