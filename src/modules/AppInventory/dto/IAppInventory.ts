interface IUser {
  id: string;
  name: string;
  pic: string;
}

export interface IAppInventoryLogo {
  app?: string;
  connector: string;
}

export interface IAppInventory {
  appId: string;
  name: string;
  category: string;
  connector: string;
  logos: IAppInventoryLogo;
}

export interface IAppInventoryDetail extends Omit<IAppInventory, 'connector'> {
  connector: {
    name: string;
    logo: string;
    users: IUser[];
  };
}
