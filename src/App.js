import './App.css';
import { Flex, View, useBreakpointValue,Button } from '@aws-amplify/ui-react'

import { 
  MLCardOverview,
  MLHeroLayout,
  MLNavbar,
  MLCardOverviewCollection,
} from './ui-components';

function App() {
  const variant = useBreakpointValue({
    small: 'small',
    medium: 'default'
  })
   
  return (
    <div className="App">
      <MLNavbar variation={variant} width={'100vw'}/>
      <MLHeroLayout width={'100vw'}/>
      <Button>Upload</Button>

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
            <MLCardOverviewCollection/>
          </View>
        </Flex>
      </Flex>


    </div>
  );
}

export default App;
