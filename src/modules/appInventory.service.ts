import inventory from '../moks/appsInventory.mock.json';
import inventoryDetails from '../moks/appDetails.mock.json';
import {
  IAppInventory,
  IAppInventoryDetail,
} from './AppInventory/dto/IAppInventory.ts';
export const getAll = (): Promise<IAppInventory[]> => {
  return new Promise((resolve) => {
    resolve(inventory);
  });
};

export const getDetail = (
  appId: Pick<IAppInventory, 'appId'>,
): Promise<IAppInventoryDetail | undefined> => {
  const data: IAppInventoryDetail = inventoryDetails.find(
    (item) => item.appId === appId,
  );
  if (!data) throw { status: 'Error! No description data.' };
  return new Promise((resolve) => {
    resolve(data);
  });
};
