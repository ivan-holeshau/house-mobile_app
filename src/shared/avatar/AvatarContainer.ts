import {Dispatch} from 'redux'
import {connect} from 'react-redux'

import { Avatar } from "./Avatar";
import { registered as rg} from "../../core/actions";
import  { RootState } from '../../core/reducer'
import {isRegistered} from '../../core/selector'

import { bindActionCreators } from "redux";

const mapStateToProps = (state:RootState) => {
  //console.log('!',state.mainReducer.registered)
  return {
    isRegistered:isRegistered(state)
  };
};

const mapDispatchToProps = (dispatch:Dispatch) => {
  return bindActionCreators({ registered: rg }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);
