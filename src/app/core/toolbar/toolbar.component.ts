import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarHelpers } from './toolbar.helpers';

@Component({
  selector: 'cdk-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
	
  @Input() sidenav;
	@Input() sidebar;
	@Input() drawer;
	@Input() matDrawerShow;
  
	searchOpen: boolean = false;
    toolbarHelpers = ToolbarHelpers;
  	constructor(private router: Router) { }

  	ngOnInit() {
  	}
cli(){
	this.router.navigate(['/cu']) 
}

}
