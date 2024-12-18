import { Avatar, notification, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { getAll, getDetail } from '../../appInventory.service.ts';
import { IAppInventory, IAppInventoryDetail } from '../dto/IAppInventory.ts';
import { ColumnsType } from 'antd/es/table';
import profileLogo from '../../../assets/app-placeholder.png';
import { AppInventoryDescription } from './AppInventoryDescription.tsx';

export const AppInventory = () => {
  const [inventory, setInventory] = useState<IAppInventory[]>();
  const [open, setOpen] = useState<boolean>(false);
  const [details, setDetails] = useState<IAppInventoryDetail | undefined>();

  useEffect(() => {
    // TODO via dispatch() later
    getAll().then((result) => setInventory(result));
  }, []);

  const handleClick = async (id: Pick<IAppInventory, 'appId'>) => {
    try {
      const detailsData = await getDetail(id);
      setDetails(detailsData);
      setOpen(true);
    } catch (e) {
      notification.error({
        message: 'Not found',
        description: e.status,
      });
    }
  };

  const columns: ColumnsType<IAppInventory>['columns'] = [
    ,
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: true,
      showSorterTooltip: false,
      render: (_, entity) => (
        <a href="#" onClick={() => handleClick(entity.appId)}>
          <Space size={12} wrap>
            <Avatar
              size="medium"
              src={
                <img
                  src={entity.logos.app ?? (profileLogo as string)}
                  alt="avatar"
                />
              }
            />
            {entity.name}
          </Space>
        </a>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      sorter: true,
      showSorterTooltip: false,
    },
    {
      title: 'Connector',
      dataIndex: 'connector',
      key: 'connector',
      sorter: true,
      showSorterTooltip: false,
      render: (_, entity) => (
        <Avatar
          size="large"
          src={
            <img
              style={{ objectFit: 'fill' }}
              src={entity.logos.connector ?? (profileLogo as string)}
              alt="avatar"
            />
          }
        />
      ),
    },
  ];

  return (
    <>
      <Space direction="vertical" style={{ display: 'flex' }}>
        <h2>App inventory</h2>
        <Table
          dataSource={inventory}
          columns={columns}
          pagination={{
            position: ['bottomCenter'],
            showSizeChanger: true,
            showQuickJumper: true,
            total: inventory?.length,
          }}
          key="appId"
        />
      </Space>
      {details && (
        <AppInventoryDescription
          data={details}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};
