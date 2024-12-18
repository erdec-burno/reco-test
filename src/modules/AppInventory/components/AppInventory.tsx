import { Drawer, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { getAll, getDetail } from '../../appInventory.service.ts';
import { IAppInventory, IAppInventoryDetail } from '../dto/IAppInventory.ts';

export const AppInventory = () => {
  const [inventory, setInventory] = useState<IAppInventory[]>();
  const [open, setOpen] = useState<boolean>(false);
  const [details, setDetails] = useState<IAppInventoryDetail>();
  useEffect(() => {
    // TODO via dispatch() later
    getAll().then((result) => setInventory(result));
  }, []);

  // TODO need to get data from method getDetail()
  const handleClick = (entity: IAppInventory) => {
    setOpen(true);
    getDetail().then((result) => setDetails(result));
  };

  const columns = [
    ,
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (_, entity) => (
        <a href="#" onClick={() => handleClick(entity.appId)}>
          {entity.name}
        </a>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Connector',
      dataIndex: 'connector',
      key: 'connector',
    },
  ];

  //
  return (
    <>
      <Table
        dataSource={inventory}
        columns={columns}
        pagination={{ position: ['bottomRight'] }}
        key="appId"
      />
      <Drawer title="App overview" onClose={() => setOpen(false)} open={open}>
        <p>{JSON.stringify(details)}</p>
      </Drawer>
    </>
  );
};
