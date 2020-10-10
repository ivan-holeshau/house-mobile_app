import React  from 'react'
import Grid from '@material-ui/core/Grid';
import Avatar from '../avatar/index'

export function Header(){
return (
    <Grid container justify='space-between' >
        <Grid item xs='3'>you name</Grid>
        <Grid item xs= '3'><Avatar alt="" src="https://static-s.aa-cdn.net/img/ios/846073598/46f520ebc3d526b7b251d87af200ca03?v=1"/></Grid>
    </Grid>
)
}

