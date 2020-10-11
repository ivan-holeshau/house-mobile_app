import {connect} from 'react-redux'
import {BigNews} from './ViewNews'
import {RootState} from '../../../reducer'
import {bigNews} from '../../../selector'

function mapStateToProps(state:RootState) {
    return {
    bigNews:bigNews(state)}
}

export default connect(mapStateToProps)(BigNews)