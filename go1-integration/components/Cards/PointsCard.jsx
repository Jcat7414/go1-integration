import { View, Text } from '@go1d/go1d';
import React from 'react';

function PointsCard() {
    return (
        <View 
        css={{
            padding: "23px",
            marginBottom: "30px", 
            '&:hover, &:focus': {
                boxShadow: "0px 2px 5px 2px #888888",
            },
        }}>
            <Text fontSize={5} fontWeight="bold" >9+</Text>
            <Text>Points to reach maximum performance</Text>
        </View>
    )
};

export default PointsCard;