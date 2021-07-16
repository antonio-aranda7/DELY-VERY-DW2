import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}


























/*
CanActivate
--Interfaz que una clase puede implementar para ser un guardia que decide si se puede activar una ruta. 
  Si todos los guardias regresan true, la navegación continúa. Si algún guardia regresa false, se cancela la navegación. 
  Si algún guardia devuelve un UrlTree, se cancela la navegación actual y comienza una nueva navegación a la que UrlTreeregresa 
  la guardia.
  
ActivatedRouteSnapshot
--Contiene la información sobre una ruta asociada a un componente cargado en una toma de corriente en un momento determinado. 
  ActivatedRouteSnapshot también se puede utilizar para recorrer el árbol de estado del enrutador.

RouterStateSnapshot
--Representa el estado del enrutador en un momento determinado.

UrlTree
--Representa la URL analizada.
*/