import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

export const loadSvgResources = (
  iconRegistry: MatIconRegistry,
  sanitizer: DomSanitizer
) => {
  const imgDir = 'assets/images/icons/';
  iconRegistry.addSvgIcon(
    'day',
    sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}day.svg`)
  );
  iconRegistry.addSvgIcon(
    'month',
    sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}month.svg`)
  );
  iconRegistry.addSvgIcon(
    'week',
    sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}week.svg`)
  );
  iconRegistry.addSvgIcon(
    'project',
    sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}project.svg`)
  );
  iconRegistry.addSvgIcon(
    'projects',
    sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}projects.svg`)
  );
  // 导入1到31日对应的svg资源
  for (let index = 1; index <= 31; index++) {
    iconRegistry.addSvgIcon(
      `day${index}`,
      sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}day${index}.svg`)
    );
  }
};
