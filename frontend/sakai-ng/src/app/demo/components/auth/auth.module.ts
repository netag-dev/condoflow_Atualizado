import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        InputTextModule,
        ButtonModule
    ]
})
export class AuthModule { }
