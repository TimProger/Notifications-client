import { NavLink } from 'react-router-dom';
import colors from '../../colors'
import Flex from '../Flex'
import Text from '../Text'

function Navbar() {
    return (
        <Flex
            justify='space-between'
            align='center'
            padding='10px'
            width='100%'
            heigth='50px'
            background={colors.secondary_background}
        >
            <Text type='h1' color={colors.main_text}>Navbar</Text>
            <NavLink to={'/'}>Чат</NavLink>
        </Flex>
    );
}

export default Navbar;
