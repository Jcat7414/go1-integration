// import React from 'react';
import Image from 'next/image'
import utilStyles from '../../styles/utils.module.css'
import { Avatar, View, Text, ButtonMinimal } from '@go1d/go1d';
import IconEllipsis from '@go1d/go1d/build/components/Icons/Ellipsis';
// import Photo from './gloria_warren.jpg'

export default function SideMenuAvatar() {
    return (
        <View 
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width={215}
        >
            {/* <View> */}
                {/* <Image priority src="/images/gloria_warren.png" className={utilStyles.borderCircle} height={44} width={44} marginLeft="34px" alt="Gloria Warren"  /> */}
{/* // remove Avatar to test Image */}
                {/* <Avatar src={Photo} size={3} marginLeft="34px" fullName="Gloria Warren"  /> */}
            {/* </View> */}
            <View>
                <Text>Gloria Warren</Text>
            </View>
            <View>
                <ButtonMinimal round={true} color="#3E4749" icon={IconEllipsis} href="/profile" css={{ borderRadius: "0px", }} />
            </View>
        </View>
    )
}