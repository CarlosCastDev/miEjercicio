import { Directive, HostListener, HostBinding } from '@angular/core';
@Directive({
	selector: 'li[contar-clicks]'
})
export class DirectvaContrarClicks{ 
	numClicks = 0;
	@HostBinding('style.opacity') opacidad : number = 0.1;

	@HostListener('click', ['$event.target']) clickOn(boton)
	{
		console.log("Numero de Clicks", this.numClicks++);
		this.opacidad += 0.1;
	}
}