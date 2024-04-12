import { CanDeactivateFn } from "@angular/router";

export const UnsavedChangesGuard: CanDeactivateFn<any> = (component, currentRoute, currentState, nextState) => {
    let canExitPage = component.canExit;

    if (!canExitPage) {
        alert("You have unsaved changes"); //you can use confirm() also in place of alert()
        return false;
    }

    return true;
}