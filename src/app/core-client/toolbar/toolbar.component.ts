import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BoutiqueService } from 'src/app/service/boutique.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { ToolbarHelpers } from './toolbar.helpers';

@Component({
  selector: 'cdk-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
	currentUser: any;
  @Input() sidenav;
	@Input() sidebar;
	idBoutique:number;
	
	@Input() drawer;
	@Input() matDrawerShow;
  
	searchOpen: boolean = false;
    toolbarHelpers = ToolbarHelpers;
  	constructor(private boutiqueService : BoutiqueService, private token: TokenStorageService,private router: Router) { }

  	ngOnInit() {
		
  	}
home(){
	this.currentUser = this.token.getUser();
	this.boutiqueService.findBoutiqueToUser(this.currentUser.id).subscribe(
		data=>{
	 
		  this.router.navigate(['/shop/home/',data.id]) 
		
		  .then(() => {
			window.location.reload();
		  });
		
		},
		err=>{
		  console.log(err);
		}
	  )
}
}
