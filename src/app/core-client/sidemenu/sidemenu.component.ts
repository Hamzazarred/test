import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { User } from 'src/app/modal/Modal';
import { BoutiqueService } from 'src/app/service/boutique.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';


@Component({
  selector: 'cdk-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  
    @Input() iconOnly:boolean = false;
menus:any[];
currentUser:User;
idBoutique:number;
  constructor(  private router :Router,private route:ActivatedRoute,private token:TokenStorageService,private boutiqueService:BoutiqueService){
  
  }
        ngOnInit() {
            
            this.currentUser = this.token.getUser();
          console.log(this.currentUser);
            
                this.boutiqueService.findBoutiqueToUser(this.currentUser.id).subscribe(
                  data=>{
                   this.idBoutique= data .id ;
                   this.menus = [
                    {
                        'name': 'Dashboard',
                        'icon': 'dashboard',
                        'link': false,
                        'open': false,
                        'chip': { 'value': 1, 'color': 'accent' },
                        'sub': [
                            {
                                'name': 'Dashboard',
                                'link': '/auth/dashboard',
                                'icon': 'dashboard',
                                'chip': false,
                                'open': true,
                            }
                        ]
                    },
                 
                    // {
                    //     'name'   : 'Forms',
                    //     'icon'   : 'mode_edit',
                    //     'open'   : false,
                    //     'link'   : false,
                    //     'sub'    :  [
                    //                     {
                    //                         'name': 'Template Driven',
                    //                         'icon': 'mode_edit',
                    //                         'open'   : false,
                    //                         'link':'forms/template_forms'
                    //                     },
                    //                     {
                    //                         'name': 'Reactive Forms',
                    //                         'icon': 'text_fields',
                    //                         'open'   : false,
                    //                         'link':'forms/reactive_forms'
                    //                     }
                    //                 ]
                    // },
                    {
                        'name': 'Tags',
                        'icon': 'list',
                        'link': false,
                        'open': false,
                        'chip': { 'value': 2, 'color': 'accent' },
                        'sub': [
                            {
                                'name': 'Manage your tags',
                                'icon': 'filter_list',
                                'link': `/cu/tag/${this.idBoutique}`,
                                'open': false,
                            },
                            {
                                'name': 'Rong your tags',
                                'icon': 'done_all',
                                'link': `/cu/tag/rong/${this.idBoutique}`,
                                'open': false,
                            }
                        ]
                
                    },
                    {
                        'name': 'Manage your Products',
                        'icon': 'local_mall',
                        'link': `/cn/${this.idBoutique}`,
                        'open': false,
                    }, {
                        'name': 'Size Picture',
                        'open': false,
                        'link':  `taille/${this.idBoutique}`,
                        'icon': 'wallpaper',
                    }
                    
                    , {
                
                        'name': 'Sliders',
                        'icon': 'theaters',
                        'open': false,
                        'link':`slider/${this.idBoutique}`,
                       
                    }
                ];
                  
                  },
                  err=>{
                    console.log(err);
                  }
                )
          
          
         

       
        }
    
    }

 
