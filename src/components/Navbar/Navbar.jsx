import colors from '../../colors'
import Flex from '../../ui/Flex'
import Text from '../../ui/Text'
import NavLink from '../../ui/NavLink'

function Navbar() {
    return (
        <Flex
            type="navbar"
            padding='10px'
            width="100%"
            height="50px"
            background={colors.secondary_background}
        >
            <Text type='navbar' color={colors.main_text}>Navbar</Text>
            <NavLink
                type='navbar'
                to={'/'}
                color={colors.main_text}
                hover={colors.hover_background}
            >
                    Чат
            </NavLink>
        </Flex>
    );
}

export default Navbar;
