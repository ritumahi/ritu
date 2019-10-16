import {Component,Input} from '@angular/core';
@Component({
	selector:'bank',
	template:`
	Bank Name:{{bankName}}
	Account Id:{{id}}
	`
})
export class bankaccount
{
	@Input() bankName:string;
	@Input('account-id') id:string;
}
@Component({
	selector:'app',
	template:
	`
	<bank bankName="RBC" account-id="4747"></bank>
	`
})
export class App{}