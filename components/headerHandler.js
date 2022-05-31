import  {getFocusedRouteNameFromRoute} from '@react-navigation/native'


function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed'
    

    switch(routeName) {
        case 'Home':
            return 'something'
        case 'Plan':
            return 'Plan'
        case 'All Meals':
            return 'All Meals'
    }
}

export default getHeaderTitle