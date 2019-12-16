import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    @track chan = 'World';

    changeHandler(event) {

        this.chan = event.target.value;

    }

}