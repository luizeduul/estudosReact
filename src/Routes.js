import React, { } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import { useTransition, animated } from 'react-spring';
import Post from './components/Post';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Posts from './pages/Posts';

const Routes = () => {

    const location = useLocation();

    const transistions = useTransition(location, {
        from: { opacity: 0, transform: 'translateY(50px)', position: 'absolute' },
        enter: { opacity: 1, transform: 'translateY(0)', position: 'absolute' },
        leave: { opacity: 0, transform: 'translateY(50px)', position: 'absolute' }
    })

    return transistions((props, item) => (
        <animated.div style={props}>
            <Switch location={item}>
                <Route path="/" component={Home} exact />
                <Route path="/posts" component={Posts} exact />
                <Route path="/post/:id" component={Post} exact />
                <Route component={NotFound} />
            </Switch>
        </animated.div>

    ))
}


export default Routes;