import React, { useState, useRef } from 'react';
import { View, Button, Text } from '@go1d/go1d';
import "./Accordion.css";
import Chevron from './Chevron';
import LearningCourseCard from './LearningCourseCard';
import { mockAssigned } from './explore_mock';


function Accordion(props) {

    const [setActive, setActiveState ] = useState("");
    const [setHeight, setHeightState ] = useState("0px");
    // const [setRotate, setRotateState ] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : "600px"
        );
        // setRotateState(setActive === "active" ? "accordion__icon" : "accordion__icon rotate");
    };

    return (
        <View className="accordion__section">
            <Button className={ `accordion ${setActive}`} onClick={toggleAccordion} >
                <Text className="accordion__title">{props.title}</Text>
                {/* <Chevron className={ `${setRotate}`} width={10} fill={"#777"} /> */}
            </Button>

            <View 
                ref={content} 
                style={{ maxHeight: `${setHeight}` }} 
                className="accordion__content"
                >
                    <View>
                        <View backgroundColor= "#EBF4F7" >
                            <View flexDirection="row" marginTop={1} >
                                {mockAssigned.map((data, key) => {
                                    return (
                                        <View css={{marginRight: "50px"}}>
                                            <LearningCourseCard data={ data } />
                                        </View>
                                    )}
                                )}
                            </View>
                        </View>
                    </View>
            </View>
        </View>
    )
};

export default Accordion;
