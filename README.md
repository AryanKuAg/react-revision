ES7 React/Redux/graphQl/ract-native snippets vscode extension download
###################

# default react props

Header.defaultProps = {
title: 'no data received'
}

# same result without props

function Header({ data }) {
return (
<>

<h1>This is just a header file of {data}</h1>
</>
);
}

# can do type check

import propTypes from 'prop-types'

Header.propTypes{
title: propTypes.string.isRequired
}

# add styles with double {{}}

<h1 style={{ color: "#FF2E63" }}>Hello handsome {my_name ?? "yes"}</h1>
