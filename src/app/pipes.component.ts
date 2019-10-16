import{Component} from '@angular/core';
@Component({
	selector:'ppt',
	template:`
	<br><br><br><br><br>
	<h1><b>{{price!number:'7.2-3'}}</b></b>
	`

})
export class pipecomponent
{
	price="500000.3678";
}