import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccountingService } from 'src/app/Services/accounting.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <input id="createAccountInput" type="text">
    <button id="createAccountButton" type="text" (click)="createAccount()">Create</button><br>
    <input id="topupAccountInput" type="text">
    <input id="topupAmountInput" type="number">
    <button id="topupAccountButton" type="text" (click)="topUp()">add</button>
    <div id="message">{{message}}</div>
  `,
  styleUrls: ['./account.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent {
  accountName: string;
  accountAmount: number;
  topUpAmount: number;
  message: string;

  constructor(
    private _accountService: AccountingService
  ) { }

  createAccount() {
    this.accountName = (document.getElementById('createAccountInput') as HTMLInputElement).value;
    this._accountService.createAccount(this.accountName)
      .then(() => this.message = "Successfully added account")
      .catch(() => this.message = "INVALID_INPUT")
  }

  topUp() {
    this.accountName = (document.getElementById('topupAccountInput') as HTMLInputElement).value;
    const amount = (document.getElementById('topupAmountInput') as HTMLInputElement).value;

    if (this.topUpAmount <= 0) {
      console.log('error');
      this.message = 'INVALID INPUT';

    }
    console.log('toto');
    this._accountService.topUp(this.accountName, parseInt(amount)).then((account) => {
      console.log(account);

      this.message = `Current balance: ${account}`;
    })

  }
}


// // Angular 15.x​​​​​​‌​‌​‌​‌‌‌​​​‌​‌‌‌​‌​​​​‌​ code
// import { Component, NgModule, Injectable, Inject, forwardRef } from '@angular/core';
// import { FormsModule } from '@angular/forms';


// // Do not modify the service as validation tests will not pass
// @Injectable({ providedIn: 'root' })
// export class AccountingService{
//   private accountsWithBalance: Map<string, number> = new Map();

//   public async createAccount(accountID: string): Promise<void> {
//     if (this.accountsWithBalance.has(accountID)){
//       throw Error("ACCOUNT_EXISTS");
//     }
//     this.accountsWithBalance.set(accountID, 0);
//   }

//   public async topUp(accountID: string, amount: number): Promise<number>{
//     if (!this.accountsWithBalance.has(accountID)){
//       throw Error("ACCOUNT_DOES_NOT_EXIST");
//     }
//     this.accountsWithBalance.set(accountID, this.accountsWithBalance.get(accountID)+ amount);
//     return this.accountsWithBalance.get(accountID);
//   } 
// }

// // Implement the component here
// @Component({
//   selector:'account-component',
//   template: `
//   <div>
//   <input  id="createAccountInput" type="texte">
//   <button  id="createAccountButton" (click)="createAccount()">Create Account</button> 
//   <div id="message">{{message}}</div>

//   <div>
//   <input id="topupAccountInput" type="texte">
//   <input id="topupAmountInput" type="number">
//   <button  id="topupAccountButton" (click)="topAccount()">Top Account</button> 

//   `,
// })
// export class AccountComponent {
//   nameUser:string|undefined;
//   message:string|undefined;
//   accountId:string|undefined;
//   amount:string|undefined;
//   balance:number|undefined;
//   createAccount(){
//     this.nameUser = (document.getElementById("createAccountInput") as HTMLInputElement).value;

//     this.accountingService.createAccount(this.nameUser).then(()=>{
//     this.message = 'Successfully added account'
//     })
//   }

//   topAccount(){
//     this.amount = (document.getElementById("topupAmountInput") as HTMLInputElement).value;
//     this.accountId = (document.getElementById("topupAccountInput") as HTMLInputElement).value;
//     if(this.amount===undefined ||+this.amount<=0){
//       this.message = 'INVALID_INPUT'
//       this.message=''
//     }
//     else {
//       this.message=''
//       this.accountingService.topUp(this.accountId,Number(this.amount)).then((value)=>{
//        this.balance = value
//        this.message=''
//        this.message= 'Current balance: '+this.balance
//       }).catch((err)=> this.message='Error from service'+err)
//     }
//   }

//   constructor(private accountingService:AccountingService){
//   }

// }

// // #region Preview
// @Component({
//     template: `<account-component></account-component>`
// })
// export class PreviewComponent { }
// // #endregion Preview

// // #region Module declaration - Do not Change
// @NgModule({
//     declarations: [PreviewComponent, AccountComponent],
//     imports:[FormsModule],
//     entryComponents: [PreviewComponent]
// })
// export class PreviewModule { }
// // #endregion Module declaration