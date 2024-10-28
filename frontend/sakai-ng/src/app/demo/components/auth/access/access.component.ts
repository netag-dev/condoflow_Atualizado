import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-access',
    templateUrl: './access.component.html',
})
export class AccessComponent implements OnInit {

    token: string | null = null;
    novaSenha: string = '';
    confirmarSenha: string = '';

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private router: Router
    ) {}

    alterarSenha() {

        if (!this.novaSenha || !this.confirmarSenha) {
        this.mostrarMensagemVazio()
        return;
          }
        
        if (this.novaSenha !== this.confirmarSenha) {
        this.mostrarMensagemAviso();
        return;
        }

        this.http.post('http://localhost:5000/alterar_senha', { token: this.token, senha_porteiro: this.novaSenha })
        .subscribe(
        response => {
        this.mostrarMensagemSucesso();
        console.log(response)
        this.router.navigate(['/auth/login']);
        },
        error => {
        this.mostrarMensagemErro();
        console.error(error);
        }
        );
    }

    ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    this.token = params.get('token');
    console.log(this.token); 
    });
    }

   mostrarMensagemSucesso(){
    return Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Senha alterada com sucesso.',
        confirmButtonText: 'YES',
      });
   } 

    mostrarMensagemErro(){
    return Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Erro ao alterar senha!",
        confirmButtonText: "YES"
        });
    }

    mostrarMensagemAviso(){
    return Swal.fire({
    icon: "warning",
    title: "Aviso",
    text: "As senhas não são iguais!"       
    })
    }

    mostrarMensagemVazio(){
    return Swal.fire({
    icon: "warning",
    title: "Aviso",
    text: "Preencha os campos devidamente!"
    })
    }
}