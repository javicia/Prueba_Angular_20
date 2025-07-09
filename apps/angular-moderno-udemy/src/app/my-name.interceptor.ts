import { HttpInterceptorFn } from '@angular/common/http';
import { SpinnerService } from '@shared/services/spinner.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';

export const SpinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const _spinnerService = inject(SpinnerService);
  _spinnerService.show();
  return next(req).pipe(
    finalize(() => {
      _spinnerService.hide();
    })
  );
};
