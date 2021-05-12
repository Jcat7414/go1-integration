// import React from 'react';
import { Container, Text, View } from '@go1d/go1d';

import AssessReviewTable from '../components/Cards/AssessReviewTable';
import PerformanceScoreCard from '../components/Cards/PerformanceScoreCard';
import PointsCard from '../components/Cards/PointsCard';
import RubricCard from '../components/Cards/RubricCard';

export default function HomePage() {
    return (
        <Container>
                <View>
                    <Text fontSize={4} fontWeight="bold" marginBottom="10px">Good morning, Gloria</Text>
                    <Text fontSize={3} fontWeight="semibold" marginBottom="19px">Junior Developer</Text>
                    <Text fontSize={1} marginBottom={5} fontWeight="semibold">My goals</Text>
                    <Text fontSize={1} marginBottom="23px">
                        Amet minim mollit non deseruntullamco est sit aliqua color do amet sint. 
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sun nostrud amet.
                    </Text>
                </View>
                <View flexDirection="row">
                    <View>
                        <Text fontSize={2.5} fontWeight="semibold" lineHeight="paragraph" marginBottom="19px">Latest Assessment review</Text>
                        < AssessReviewTable />
                    </View> 
                    <View css={{ marginLeft: "88px", width: "241px", }} >
                        < PerformanceScoreCard />
                        < PointsCard />
                        < RubricCard />
                    </View>
                </View>
        </Container>
    )
}