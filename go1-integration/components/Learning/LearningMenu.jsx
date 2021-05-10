import React, { useState, useRef} from 'react';
import { View, Button, ButtonMinimal } from '@go1d/go1d';

function LearningMenu () {

    const menuTabs = [ "In Progress", "Assigned", "Scheduled", "Completed", "Saved" ]

    const [setActive, setActiveState ] = useState("");
    const [setUnderline, setUnderlineState ] = useState("0px");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setUnderlineState(setActive === "active" ? "0px" : "2px solid #4AC0DE");
    };

    return (
        <View flexDirection="row" >
            {menuTabs.map((tab) => (
                <View onClick={toggleAccordion}>
                    <ButtonMinimal 
                        css={{
                            '&:hover, &:focus' : {
                                backgroundColor: "#FFFFFF",
                                color: "#4AC0DE",
                                borderRadius: "0",
                                borderBottom: `${setUnderline}`,
                            }
                        }}
                        border= "none"
                        color="#000000"
                        backgroundColor="red"
                        >
                        {tab}
                    </ButtonMinimal>
                </View>
            ))}
        </View>
    )
};

export default LearningMenu;