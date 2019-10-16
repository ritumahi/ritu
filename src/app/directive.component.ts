import { Component } from '@angular/core';
@Component({
	selector:`abc`,
	template:
	`
	<DIV *ngIf="arr.length>0">Array has no. of elements:{{arr.length}}</DIV>
	<DIV *ngIf="arr.length==0">Array is empty</DIV>
	`
	})
	export class drctvcomponent
	{
	arr=[22,33,44,55,66,77,88];
	}