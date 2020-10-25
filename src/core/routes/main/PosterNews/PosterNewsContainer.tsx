import {Dispatch} from 'redux'
import {connect} from 'react-redux'
import { bindActionCreators } from "redux";
import {PosterNews} from './PosterNews'

function mapStateToProps(){
    return{

    }
}

function mapDispatchToProps(dispatch:Dispatch){
    return bindActionCreators({ }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(PosterNews)