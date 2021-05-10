import React from 'react';
import { View, Text } from '@go1d/go1d';

function RubricCard() {
    return (
        <View 
        css={{
            padding: "23px",
            marginBottom: "30px", 
            '&:hover, &:focus': {
                boxShadow: "0px 2px 5px 2px #888888",
            },
        }}>
            <Text fontSize={5} fontWeight="bold" >14</Text>
            <Text>Skill rubrics have reached maximum scores</Text>
        </View>
    )
};

export default RubricCard;