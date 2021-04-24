export interface IMenuItem {
  iconUrl: string;
  routeUrl: string;
  title: string;
  type?: MenuItemTypeEnum;
  photoUrl?: string;
}

export enum MenuItemTypeEnum {
  PLATFORM, WORKSPACES, ACCOUNT,
}

export const MENU_ITEMS_DATA: IMenuItem[] = [
  { type: MenuItemTypeEnum.PLATFORM, iconUrl: '/media/icons/house2.svg', routeUrl: '/', title: 'Home' },
  { type: MenuItemTypeEnum.PLATFORM, iconUrl: '/media/icons/publications.svg', routeUrl: '/test', title: 'Publications' },
  { type: MenuItemTypeEnum.PLATFORM, iconUrl: '/media/icons/people.svg', routeUrl: '/test', title: 'People' },
  { type: MenuItemTypeEnum.PLATFORM, iconUrl: '/media/icons/entities2.svg', routeUrl: '/entities', title: 'Entities' },
  { type: MenuItemTypeEnum.PLATFORM, iconUrl: '/media/icons/administration.svg', routeUrl: '/test', title: 'Administration' },
];

export const CONSTANT_MENU_ITEMS: IMenuItem[] = [
  { iconUrl: '/media/icons/privacy.svg', routeUrl: '/test', title: 'Privacy' },
  { iconUrl: '/media/icons/settings.svg', routeUrl: '/test', title: 'Settings' },
];