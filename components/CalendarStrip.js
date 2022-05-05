import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment'
import { GlobalStyles } from '../constants/style'

function CalendatSnippet() {
    return(
        <CalendarStrip
            selectedDate={moment()}
            scrollable={true}
            daySelectionAnimation={{
                type: 'border',
                borderHighlightColor: GlobalStyles.colors.secondaryColor,
                borderWidth: 2    
            }}
            style={{
                height:90, 
                paddingTop: 10, 
                paddingBottom: 10,
                backgroundColor: GlobalStyles.colors.primaryColor
            }} 
        />
    )
    
}

export default CalendatSnippet