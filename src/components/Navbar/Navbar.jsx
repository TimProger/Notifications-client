import { NavLink } from 'react-router-dom';
import colors from '../../colors'
import Flex from '../../ui/Flex'
import Text from '../../ui/Text'

function Navbar() {
    return (
        <Flex
            type="navbar"
            padding='10px'
            width="100%"
            height="50px"
            background={colors.secondary_background}
        >
            <Text type='h1' color={colors.main_text}>Navbar</Text>
            <NavLink to={'/'}>Чат</NavLink>
        </Flex>
    );
}

export default Navbar;
