import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit
{@Input() isVisible : boolean = true;
  visibility = 'shown';

  sideNavOpened: boolean = true;
  matDrawerOpened: boolean = false;
  matDrawerShow: boolean = true;
  sideNavMode: string = 'side';

  ngOnChanges() {
   this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

	constructor(private media: MediaObserver) { }

	ngOnInit() {
		this.media.asObservable().subscribe(() => {
            this.toggleView();
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
            this.matDrawerOpened = true;
            this.matDrawerShow = true;
        } else if (this.media.isActive('lt-sm')) {
            this.sideNavMode = 'over';
            this.sideNavOpened = false;
            this.matDrawerOpened = false;
            this.matDrawerShow = false;
        }
	}


}
