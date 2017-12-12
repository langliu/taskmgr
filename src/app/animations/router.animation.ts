import {
  animate,
  state,
  style,
  trigger,
  transition,
  group
} from '@angular/animations';

export const slideToRight = trigger('routeAnim', [
  state('void', style({ position: 'fixed', height: '80%', width: '100%' })),
  state('*', style({ position: 'fixed', height: '80%', width: '100%' })),
  // 入场效果
  transition('void => *', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    group([
      animate('.5s ease-in-out', style({ transform: 'translateX(0)' })),
      animate('.3s ease-in-out', style({ opacity: 1 }))
    ])
  ]),
  // 出场效果
  transition('* => void', [
    style({ transform: 'translateX(0)', opacity: 1 }),
    group([
      animate('.5s ease-in-out', style({ transform: 'translateX(-100%)' })),
      animate('.3s ease-in-out', style({ opacity: 0 }))
    ])
  ])
]);
