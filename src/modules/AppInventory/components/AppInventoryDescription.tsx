import { Avatar, Drawer, Space } from 'antd';
import { IAppInventoryDetail } from '../dto/IAppInventory.ts';
import styled from 'styled-components';
import profileLogo from '../../../assets/profile-placeholder.png';
import moment from 'moment';

interface AppInventoryDescriptionProps {
  data: IAppInventoryDetail;
  open: boolean;
  onClose: Function;
}

export const AppInventoryDescription = ({
  data,
  open,
  onClose,
}: AppInventoryDescriptionProps) => {
  return (
    <Drawer
      style={{ background: '#FAFAFA' }}
      title="App overview"
      onClose={onClose}
      open={open}
      width={714}
    >
      <TopBlock>
        <div>App name: {data.name}</div>
        <div>Category: {data.category}</div>
        <div>Users: {data.users.length}</div>
        <div>
          Connector:{' '}
          <Avatar
            size="small"
            src={
              <img
                style={{ objectFit: 'fill' }}
                src={data.connector.logo ?? (profileLogo as string)}
                alt="avatar"
              />
            }
          />
        </div>
        <div>
          Last classification:{' '}
          {moment(data.lastClassification).startOf('day').fromNow()}
        </div>
      </TopBlock>
      <ListBlock>
        <ListItem>Username</ListItem>
        {data.users.map((item) => (
          <ListItem key={item.id}>
            <Space size={12} wrap>
              <Avatar
                size="small"
                src={
                  <img src={item.pic ?? (profileLogo as string)} alt="avatar" />
                }
              />
              {item.name}
            </Space>
          </ListItem>
        ))}
      </ListBlock>
    </Drawer>
  );
};

const TopBlock = styled.div`
  background: rgba(62, 116, 255, 0.05);
  padding: 15px 10px;
  margin-bottom: 24px;
  border-radius: 4px;
  border: 1px solid #3e74ff;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ListBlock = styled.div`
  display: block;
  border: 1px solid;
  border-radius: 8px;
  border-color: rgba(232, 233, 255, 1);

  & > div {
    border-bottom: 1px solid;
    border-color: rgba(232, 233, 255, 1);
  }

  & > div:last-child {
    border-bottom: none;
  }
`;

const ListItem = styled.div`
  padding: 10px;
`;
