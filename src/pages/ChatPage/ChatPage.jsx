import Form from '../../components/Form/FormContainer.jsx'
import colors from '../../colors'
import Flex from '../../ui/Flex'
import Text from '../../ui/Text'

function Chat() {
    return (
        <Flex
            type='chat'
            radius='5px'
            padding='10px'
            background={colors.secondary_background}
            style={{ transform: 'scale(1.4)' }}
        >
            <Text
                type="h1"
                color={colors.main_text}
            >
                    Chat Page
            </Text>
            <Form />
        </Flex>
    );
}

export default Chat;
