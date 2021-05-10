import React, { useState, useEffect } from 'react';
import { Container, View, Text } from '@go1d/go1d';
import { mockAssigned } from '../components/Learning/explore_mock.js';
import LearningMenu from '../components/Learning/LearningMenu';
import LearningCourseCard from '../components/Learning/LearningCourseCard';
import Accordion from '../components/Learning/Accordion';

const tabs = [
    { title: "In Progress", path: "inprogress", dataset: "" },
    { title: "Assigned", path: "assigned", dataset: {mockAssigned} },
    { title: "Schedule", path: "schedule", dataset: "" },
    { title: "Completed", path: "completed", dataset: "" },
    { title: "Saved", path: "saved", dataset: "" },
];

const ActiveTab = window.location.pathname

export default function Go1LearningPage() {
    console.log(window.location.pathname)

    const [setActive, setActiveState] = useState ("");
    const [setDataset, setDatasetState] = useState ({mockAssigned});

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setDatasetState(setActive === "active" ? "inprogress" : `${tabs.dataset}` )
    };

    return (
        <Container
            minWidth={970}
            paddingRight={15}
            paddingLeft={15}
            marginRight="auto"
            marginLeft="auto"
        >
            <View
            borderBottom="2px solid #E6EDF0"
            paddingTop="80px"
            >
                <View alignItems="center" >
                    <Text 
                        fontSize={6} 
                        fontWeight={'semibold'} 
                        css={{
                            marginBottom: "80px",
                        }}
                        >My Learning</Text>
                </View>

                <View alignItems="center">
                    {/* {tabs.map((tab, key) => { */}
                        {/* return ( */}
                            <LearningMenu onClick={toggleAccordion}/>
                            {/* ) */}
                </View>
            </View>

            <View flexDirection="row">
                {tabs.map((tab, key) => {
                    return (
                    <View css={{marginRight: "10px"}}>
                        <Accordion 
                        title={tab.title}
                        content= {`${setDatasetState}`}
                        />
                    </View>
                    )}
                )}
            </View>

            {/* <View>
                <View backgroundColor= "#EBF4F7" >
                    <View flexDirection="row" marginTop={1} >
                        {mockAssigned.map((data, key) => {
                            return (
                                // <View key={key}>{data.id}</View>
                                <View css={{marginRight: "50px"}}>
                                    <LearningCourseCard data={ data } />
                                </View>
                            )}
                        )}
                    </View>
                </View>
            </View> */}
        </Container>   
    )
}