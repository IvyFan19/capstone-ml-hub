import { Flex, View, useBreakpointValue, Button } from '@aws-amplify/ui-react'
import { 
  MLHeroLayout,
  MLNavbar,
  MLCardOverviewCollection,
} from '../ui-components';


export const Home = () => {
    
    return (
        <div classname="home">
            <MLNavbar  width={'100vw'}/>
            <MLHeroLayout width={'100%'} marginBottom="20px"/>

            <Flex overflow={'auto'}>
                <Flex position={'relative'} overflow={'hidden'} grow={1}>
                <View>
                <Button>Image</Button>
                <Button>Video</Button>
                <Button>Video</Button>
                <Button>Video</Button>
                </View>
                </Flex>

                <Flex position={'relative'} overflow={'hidden'} grow={1}>
                <View>
                    <MLCardOverviewCollection width="100%"/>
                </View>
                </Flex>
            </Flex>
        </div>



    )
}