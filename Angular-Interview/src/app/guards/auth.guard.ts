import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { CommunicationService } from "../services/communication.service";

@Injectable({
    providedIn: 'root'
})
export class PermissionService {
    constructor(private router: Router, private communicationService: CommunicationService) {

    }

    canActivate() {
        if (this.communicationService.isAuthenticated('Rishabh')) return true;
        else {
            this.router.navigate(['/not-found']);
            return false;
        }
    }
}

export const AuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) => {
    return inject(PermissionService).canActivate();
}