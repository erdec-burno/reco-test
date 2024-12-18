import inventory from '../moks/appsInventory.mock.json';
import inventoryDetails from '../moks/appDetails.mock.json';
import { IAppInventory } from './AppInventory/dto/IAppInventory.ts';
export const getAll = (): Promise<IAppInventory[]> => {
  return new Promise((resolve) => {
    resolve(inventory);
  });
};

export const getDetail = (): Promise<IAppInventory> => {
  return new Promise((resolve) => {
    resolve(inventoryDetails);
  });
};
