import React, { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import ('./pages/dashboard'));
const Login = lazy(() => import ('./pages/login.js'));
const SignUp = lazy(() => import ('./pages/signup'));
const Profile = lazy(() => import ('./pages/profile'));
const NotFound = lazy(() => import ('./pages/not-found'));

export default function App() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <p>This is where our content will be</p>
        </Suspense>
    );
}