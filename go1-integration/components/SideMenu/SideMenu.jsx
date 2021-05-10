import React from 'react';
import { View } from '@go1d/go1d';
import SideMenuItem from './SideMenuItem';
import SideMenuAvatar from './SideMenuAvatar';

export default function SideMenu () {
    return (
        <View 
            backgroundColor="#F9FAFA" 
            borderRight={1}
            style={{borderColor: "#D6DEDE"}}
            color="#3E4749"
            width="246px"
            height="990px"
            >

            <SideMenuItem />
            <SideMenuAvatar />
            
        </View>
    )
}