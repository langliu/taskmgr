import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

export const loadSvgResources = (
  iconRegistry: MatIconRegistry,
  sanitizer: DomSanitizer,
) => {
  // svg图像资源地址
  const imgDir = 'assets/images/icons/';
  // 加载用户头像集合的svg资源
  iconRegistry.addSvgIconSetInNamespace(
    'avatars',
    sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}avatars.svg`),
  );
  iconRegistry.addSvgIcon(
    'day',
    sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}day.svg`),
  );
  iconRegistry.addSvgIcon(
    'month',
    sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}month.svg`),
  );
  iconRegistry.addSvgIcon(
    'week',
    sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}week.svg`),
  );
  iconRegistry.addSvgIcon(
    'project',
    sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}project.svg`),
  );
  iconRegistry.addSvgIcon(
    'projects',
    sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}projects.svg`),
  );
  iconRegistry.addSvgIcon(
    'move',
    sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}move.svg`),
  );
  iconRegistry.addSvgIcon(
    'delete',
    sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}delete.svg`),
  );
  iconRegistry.addSvgIcon(
    'add',
    sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}add.svg`),
  );
  iconRegistry.addSvgIcon(
    'unassigned',
    sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}unassigned.svg`),
  );
  iconRegistry.addSvgIcon(
    'hand-garb-o',
    sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}hand-garb-o.svg`),
  );
  iconRegistry.addSvgIcon(
    'burger-navigation',
    sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}burger-navigation.svg`),
  );

  // 导入1到31日对应的svg资源
  for (let index = 1; index <= 31; index++) {
    iconRegistry.addSvgIcon(
      `day${index}`,
      sanitizer.bypassSecurityTrustResourceUrl(`${imgDir}day${index}.svg`),
    );
  }
};
