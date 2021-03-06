import { FormControl } from "@angular/forms";

export function confirmPasswordValidator(password: string): any {
  return (c: FormControl) => {
    let status =
      c.value === password
        ? null
        : {
            confirmPasswordValidator: true,
          };
    return status;
  };
}
