import {Dispatch} from 'redux'
import {connect} from 'react-redux'

import { Avatar } from "./Avatar";
import { registered } from "../../core/actions";
import  { RootState } from '../../core/reducer'
import {isRegistered} from '../../core/selector'

import { bindActionCreators } from "redux";
const mapStateToProps = (state:RootState) => {
  console.log('1',state)
  return {
    isRegistered:isRegistered(state)
  };
};

const mapDispatchToProps = (dispatch:Dispatch) => {
  return bindActionCreators({ registered: registered }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);
