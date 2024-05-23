import {
    Route, createBrowserRouter, createRoutesFromElements, RouterProvider
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import SetupPage from './pages/SetupPage';
import GamePage from './pages/GamePage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path='setup' element={<SetupPage />} />
            <Route path='game' element={<GamePage />} />
        </Route>

    )
);

function App() {
    return <RouterProvider router={router} />
}

export default App
