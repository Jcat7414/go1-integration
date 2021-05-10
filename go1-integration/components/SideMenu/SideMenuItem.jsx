import React from 'react';
import { useRouter } from 'next/router'
import { View, ButtonMinimal } from '@go1d/go1d';
import IconGo1Logo from '@go1d/go1d/build/components/Icons/Go1Logo';
import IconHome from '@go1d/go1d/build/components/Icons/Home';
import IconDocument from '@go1d/go1d/build/components/Icons/Document';
import IconDatabase from '@go1d/go1d/build/components/Icons/Database';
import IconFlag from '@go1d/go1d/build/components/Icons/Flag';
import IconMultipleUsers from '@go1d/go1d/build/components/Icons/MultipleUsers';
import IconSettings from '@go1d/go1d/build/components/Icons/Settings';
import IconSpeechBubble from '@go1d/go1d/build/components/Icons/SpeechBubble';
import IconHelp from '@go1d/go1d/build/components/Icons/Help';
import IconNotificationBell from '@go1d/go1d/build/components/Icons/NotificationBell';

const tabs = [
    [{ title: "Go1Up", icon: IconGo1Logo, link: "/" }],
    [{ title: "Home", icon: IconHome, link: "/dashboard", }],
    [{ title: "Assessment", icon: IconDocument, link: "/assessment", },
    { title: "Go1 Learning", icon: IconDatabase, link: "/learning", },
    { title: "My Goals", icon: IconFlag, link: "/goals", }],
    [{ title: "Team", icon: IconMultipleUsers, link: "/team", },
    { title: "Settings", icon: IconSettings, link: "/settings", }],
    [{ title: "Feedback", icon: IconSpeechBubble, link: "/feedback", },
    { title: "Support", icon: IconHelp, link: "/support", }, 
    { title: "Notifications", icon: IconNotificationBell, link: "/notifications", }]
];

let top = tabs[0]
let first = tabs[1]
let second = tabs[2]
let third = tabs[3]
let bottom = tabs[4]

// const ActiveLink = window.location.pathname 
// function ActiveLink({ href }) {
//     const router = useRouter()
//     const style = {
//         backgroundColor: router.asPath === href ? "#E2F5F9" : "#F9FAFA, 20%" 
//     }

//     const handleClick = (e) => {
//         e.preventDefault()
//         router.push(href)
//     }

//     return (
//         pathname = href
//     )
//     }

export default function SideMenuItem(props) {
    // console.log(window.location.pathname)
    
    return (
        <View
        css={{ 
            marginLeft: "23px",
            width: "198px",
        }}
        >
            <View>
                {top.map((tab, index) => ( 
                    <ButtonMinimal 
                        key={index}
                        icon={tab.icon} 
                        href={tab.link} 
                        css={{
                            '&:hover, &:focus': {
                                backgroundColor: "#F9FAFA"
                            },
                            backgroundColor: router.asPath === href ? "#E2F5F9" : "#F9FAFA, 20%" ,
                            borderRadius: "0px",
                            textDecoration: "none",
                            justifyContent: "flex-start",                    
                        }}
                        >
                        {tab.title}
                    </ButtonMinimal>
                    ))}
            </View>

            <View
                borderBottom={2}
                css={{
                    borderColor: "#D6DEDE",
                    paddingBottom: "14px",
                }}
                >
                {first.map((tab, index) => ( 
                    <ButtonMinimal 
                        key={index}
                        icon={tab.icon} 
                        href={tab.link} 
                        css={{
                            '&:hover, &:focus': {
                                backgroundColor: "#F9FAFA"
                            },
                            backgroundColor: router.asPath === tab.link ? "#E2F5F9" : "#F9FAFA, 20%",
                            borderRadius: "0px",
                            textDecoration: "none",
                            justifyContent: "flex-start",
                        }}
                        color="#3E4749"
                        >
                        {tab.title}
                    </ButtonMinimal>
                ))}
            </View>

            <View
                borderBottom={2}
                style={{
                    borderColor: "#D6DEDE",
                }}
                >
                {second.map((tab, index) => ( 
                    <ButtonMinimal 
                        key={index}
                        icon={tab.icon} 
                        href={tab.link} 
                        css={{
                            '&:hover, &:focus': {
                                backgroundColor: "#F9FAFA"
                            },
                            backgroundColor: router.asPath === tab.link ? "#E2F5F9" : "#F9FAFA, 20%",
                            borderRadius: "0px",
                            textDecoration: "none",
                            justifyContent: "flex-start",
                        }}
                        color="#3E4749"
                        >
                        {tab.title}
                    </ButtonMinimal>
                ))}
            </View>

            <View
                borderBottom={2}
                style={{
                    borderColor: "#D6DEDE",
                }}
                >
                {third.map((tab, index) => ( 
                    <ButtonMinimal 
                        key={index}
                        icon={tab.icon} 
                        href={tab.link} 
                        css={{
                            '&:hover, &:focus': {
                                backgroundColor: "#F9FAFA"
                            },
                            backgroundColor: router.asPath === tab.link ? "#E2F5F9" : "#F9FAFA, 20%",
                            borderRadius: "0px",
                            textDecoration: "none",
                            justifyContent: "flex-start",
                        }}
                        color="#3E4749"
                        >
                        {tab.title}
                    </ButtonMinimal>
                ))}
            </View>

            <View 
                marginTop={360}
            >
                {bottom.map((tab, index) => ( 
                    <ButtonMinimal
                        key={index}
                        icon={tab.icon} 
                        href={tab.link} 
                        css={{
                            '&:hover, &:focus': {
                                backgroundColor: "#F9FAFA"
                            },
                            backgroundColor: router.asPath === tab.link ? "#E2F5F9" : "#F9FAFA, 20%",
                            borderRadius: "0px",
                            textDecoration: "none",
                            justifyContent: "flex-start",
                        }}
                        color="#3E4749"
                        >
                        {tab.title}
                    </ButtonMinimal>
                ))}
            </View>
        </View>
    )
}