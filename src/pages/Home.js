import { Flex, View, useBreakpointValue, Button } from '@aws-amplify/ui-react'
import { useState } from 'react';
import { 
  MLHeroLayout,
//   MLNavbar,
  MLCardOverviewCollection,
  MLNavBarwithUpload,
  MLSearchLayout,
} from '../ui-components';


export const Home = () => {
    const [selection, setSelection] = useState()
    console.log(selection)
    
    
    
    
    
    
    return (
        <div classname="home">
            <MLNavBarwithUpload  width={'100vw'}/>
            <MLHeroLayout width={'100%'} marginBottom="20px"/>
            <MLSearchLayout/>
            <MLCardOverviewCollection overfow={'auto'} overrideItems={({item}) => ({
                        onClick: () => setSelection(item)
                    })}/>

            {/* <Flex overflow={'auto'}>
                <Flex direction="row">
                    <View>
                    <Button>Image</Button>
                    <Button>Video</Button>
                    <Button>Video</Button>
                    <Button>Video</Button>
                    </View>
                    <MLCardOverviewCollection overfow={'auto'} overrideItems={({item}) => ({
                        onClick: () => setSelection(item)
                    })}/>

                </Flex>
            </Flex> */}
        </div>

    )
}