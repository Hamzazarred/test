import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { ActivatedRoute } from '@angular/router';
import { Boutique } from 'src/app/modal/Modal';
import { BoutiqueService } from 'src/app/service/boutique.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit
{@Input() isVisible : boolean = true;
  visibility = 'shown';
boutique :Boutique
  sideNavOpened: boolean = true;
  matDrawerOpened: boolean = false;
  matDrawerShow: boolean = true;
  sideNavMode: string = 'side';

  ngOnChanges() {
   this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

	constructor(private route : ActivatedRoute,private media: MediaObserver,private bs: BoutiqueService) { }

	ngOnInit() {
		this.media.asObservable().subscribe(() => {
            this.toggleView();
        });
        this.route.params.subscribe(params => {
          this.bs.findBoutiqueById(params.idBoutique).subscribe(boutique=>{
            this.boutique=boutique
            console.log(boutique)
          })
        });
       
	}
    getRouteAnimation(outlet) {

       return outlet.activatedRouteData.animation;
       //return outlet.isActivated ? outlet.activatedRoute : ''
    }
    toggleView() {
      if (this.media.isActive('gt-md')) {
              this.sideNavMode = 'side';
              this.sideNavOpened = true;
              this.matDrawerOpened = false;
              this.matDrawerShow = false;
          } else if(this.media.isActive('gt-xs')) {
              this.sideNavMode = 'side';
              this.sideNavOpened = false;
              this.matDrawerOpened = false;
              this.matDrawerShow = false;
          } else if (this.media.isActive('lt-sm')) {
              this.sideNavMode = 'over';
              this.sideNavOpened = false;
              this.matDrawerOpened = false;
              this.matDrawerShow = false;
          }
    }
  
  

}
