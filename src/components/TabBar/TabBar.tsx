import React from "react";

import { TabBarContainer, GroupIcon, Icon, TextIcon } from './TabBar.styled'

import Activity from '../../assets/icons/TabBarIcon/activity.svg';
import ActivityActive from '../../assets/icons/TabBarIcon/activityactive.svg';
import Home from '../../assets/icons/TabBarIcon/home.svg';
import HomeActive from '../../assets/icons/TabBarIcon/homeactive.svg';
import Inbox from '../../assets/icons/TabBarIcon/inbox.svg';
import InboxActive from '../../assets/icons/TabBarIcon/inboxactive.svg';
import Profile from '../../assets/icons/TabBarIcon/profile.svg';
import ProfileActive from '../../assets/icons/TabBarIcon/profileactive.svg';


interface ITabBarProps {
    textIconHome?: string,
    textIconActivity?: string,
    textIconInbox?: string,
    textIconProfile?: string,
    direction?: 'row' | 'column',
    width?: number,
    height?: number,
    isActive?: 'home' | 'activity' | 'inbox' | 'profile' | null,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const TabBar = ({
    textIconHome,
    textIconActivity,
    textIconInbox,
    textIconProfile,
    direction,
    isActive,
    width,
    height,
    onClick,
}: ITabBarProps) => {
    return(
        <TabBarContainer width={width} height={height} direction={direction}>
            <GroupIcon onClick={onClick}>
                {(isActive === 'home') ? <Icon src={HomeActive} alt="HomeActive"/> : <Icon src={Home} alt="Home"/>}
                <TextIcon >{textIconHome}</TextIcon>
            </GroupIcon>

            <GroupIcon onClick={onClick}>
                {(isActive === 'activity') ? <Icon src={ActivityActive} alt="ActivityActive"/> : <Icon src={Activity} alt="Activity"/>}
                <TextIcon>{textIconActivity}</TextIcon>
            </GroupIcon>
            
            <GroupIcon onClick={onClick}>
                {(isActive === 'inbox') ? <Icon src={InboxActive} alt="InboxActive"/> : <Icon src={Inbox} alt="Inbox"/>}
                <TextIcon>{textIconInbox}</TextIcon>
            </GroupIcon>
            
            <GroupIcon onClick={onClick}>
                {(isActive === 'profile') ? <Icon src={ProfileActive} alt="ProfileActive"/> : <Icon src={Profile} alt="Profile"/>}
                <TextIcon>{textIconProfile}</TextIcon>
            </GroupIcon>
        </TabBarContainer>
    );
};

export default TabBar