import { Directive, OnInit, ElementRef, Renderer2, Input} from '@angular/core';
@Directive({
	selector: '[resaltar]'
})
export class DirectvaResaltar implements OnInit{ 
	@Input('resaltar') plan : boolean = false;
	constructor(private elRef: ElementRef, private rendered: Renderer2){
	}
	ngOnInit(){
		if(this.plan == true)
		{
			this.rendered.setStyle(this.elRef.nativeElement, 'background-color', '#EAECEE  ');
			this.rendered.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
		}
	}
}