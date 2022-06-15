import Form from '../../components/Form/Form.jsx'
import Text from '../../components/Text'
import colors from '../../colors'
import Flex from '../../components/Flex'

function Chat() {
    return (
        <Flex
            direction='column'
            justify='space-between'
            align='center'
            padding='10px'
            heigth='50px'
            background={colors.secondary_background}
        >
            <Text color={colors.main_text}>Chat Page</Text>
            <Form />
        </Flex>
    );
}

export default Chat;
