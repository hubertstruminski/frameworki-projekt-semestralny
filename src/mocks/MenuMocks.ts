export interface IMenuItem {
  iconUrl: string;
  routeUrl: string;
  title: string;
  type: MenuItemTypeEnum;
}

export enum MenuItemTypeEnum {
  PLATFORM, WORKSPACES, ACCOUNT,
}

export const MENU_ITEMS_DATA: IMenuItem[] = [
  { type: MenuItemTypeEnum.PLATFORM, iconUrl: '/media/icons/house2.svg', routeUrl: '/', title: 'Home' },
  { type: MenuItemTypeEnum.PLATFORM, iconUrl: '/media/icons/publications.svg', routeUrl: '/', title: 'Publications' },
  { type: MenuItemTypeEnum.PLATFORM, iconUrl: '/media/icons/people.svg', routeUrl: '/', title: 'People' },
  { type: MenuItemTypeEnum.PLATFORM, iconUrl: '/media/icons/entities2.svg', routeUrl: '/', title: 'Entities' },
  { type: MenuItemTypeEnum.PLATFORM, iconUrl: '/media/icons/administration.svg', routeUrl: '/', title: 'Administration' },
  { type: MenuItemTypeEnum.WORKSPACES, iconUrl: '/media/icons/ecosystem.svg', routeUrl: '/', title: 'Client contract' },
  { type: MenuItemTypeEnum.WORKSPACES, iconUrl: '/media/icons/ecosystem.svg', routeUrl: '/', title: 'Supplier contract' },
  { type: MenuItemTypeEnum.WORKSPACES, iconUrl: '/media/icons/entities.svg', routeUrl: '/', title: 'Corporate' },
  { type: MenuItemTypeEnum.WORKSPACES, iconUrl: '/media/icons/comments.svg', routeUrl: '/', title: 'Group Norms' },
  { type: MenuItemTypeEnum.WORKSPACES, iconUrl: '/media/icons/ecosystem.svg', routeUrl: '/', title: 'Real estate contracts' },
  { type: MenuItemTypeEnum.ACCOUNT, iconUrl: '/media/icons/privacy.svg', routeUrl: '/', title: 'Privacy' },
  { type: MenuItemTypeEnum.ACCOUNT, iconUrl: '/media/icons/settings.svg', routeUrl: '/', title: 'Settings' },
];