import React from 'react';
import { CourseCard, Text } from '@go1d/go1d';
// import IconCourse from "@go1d/go1d/build/components/Icons/Course";

function LearningCourseCard (props) {
    const { data } = props;

    const type =
            <Text
            fontSize={1}
            css={{textTransform: "capitalize"}}>
                {data.lo.type}
                </Text>
        ;

    return (           
        <CourseCard
        typeIcon="Course"
        type={type}
        duration={data.duration}
        title={data.lo.title}
        author={data.lo.portal_name}
        courseImage="https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg"
        itemList={[
            {
                title: "Test"
            }
        ]}
        status={
            {
                // inProgress, completed, enrolled, 
                type: "data.status",
                text: "5 months ago",
            }
        }
        passive={false}
        />
    )
};

export default LearningCourseCard;
