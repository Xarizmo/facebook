import React from 'react';
import './Sidebar.scss';
import SidebarRow from './SidebarRow/SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarRow src='https://avatars1.githubusercontent.com/u/26521717?s=460&u=da1c7b84ea5144274fdafc1f6be55a7a597ba07e&v=4' title='Mike Po' />
      <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center' />
      <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
      <SidebarRow Icon={PeopleIcon} title='Friends' />
      <SidebarRow Icon={ChatIcon} title='Messenger' />
      <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
      <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title='Marketplace' />
    </div>
  );
}

export default Sidebar;