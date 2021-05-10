import { View } from '@go1d/go1d';
import styles from './layout.module.css'
import SideMenu from '../SideMenu/SideMenu';

export const siteTitle = 'Go1 Integration Project'

export default function Layout ({children}) {
    return (
        <Container>
            <View
                flexDirection= "row"
            >
                <SideMenu />
                <View>
                    {children}
                </View>
            </View>
        </Container>
    )
}