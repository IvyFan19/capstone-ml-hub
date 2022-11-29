import { Flex, View, useBreakpointValue, Button } from '@aws-amplify/ui-react'
import { 
MLModelsCreateForm
} from '../ui-components';


export const UploadForm = () => {
    return (
        <div className='uploadform'>
            <Flex justifyContent="center">
                <MLModelsCreateForm width="40%" />
            </Flex>
            
        </div>
    )
}