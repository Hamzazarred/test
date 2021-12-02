import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart, User } from 'src/app/modal/Modal';
import { CartService } from 'src/app/service/cart.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cart-home',
  templateUrl: './cart-home.component.html',
  styleUrls: ['./cart-home.component.scss']
})
export class CartHomeComponent implements OnInit {

  currentUser:User;

  carts: Cart[]=[];

  cartLength = 0;
up:number=0
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<CartHomeComponent>,private userService: UserService, private route: ActivatedRoute, private dialog: MatDialog,
  private token:TokenStorageService,   private cartService: CartService, private router: Router) {
     
       
  }

  ngOnInit(): void {
   this.load()

  }
load()
{
  this.currentUser = this.token.getUser();
  this.cartService.findCartsForUser(this.currentUser.id).subscribe(cart=>{
   
   this.carts=cart
   console.log(this.carts)
       } )
}
  // logout(id: number) {
  //   window.location.replace("/dashboard");
  //   this.userService.signOut();
  // }
 edit(carts:any)
 {
  console.log(carts)
this.cartService.editCarts(carts).subscribe(carts=>{
  console.log(carts)
  this.onNoClick()
})
 }

  onNoClick(): void {
    this.dialogRef.close();
     }
    
  deleteCart(idPro) {
    if (confirm('Are you sure')) {
      this.cartService.removeFromCart(idPro, this.currentUser.id).subscribe(() => {
this.load();
      })
    }
  }

}
