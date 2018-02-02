import React from 'react';
import {connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

export const PublicRoute = ({
                                 isAuthenticated,
                                 component : Component,
                                 ...rest
                             }) => (
    <Route {...rest} component={(props) => (
        // meaningful work done here.
        isAuthenticated ? (
            <Redirect to="/dashboard"/>
        ) : (
            <div>
                <Component {...props} />
            </div>
        )
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated : !!state.auth.uid // change to boolean value.
});

export default connect(mapStateToProps)(PublicRoute);