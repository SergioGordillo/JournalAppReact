import React from 'react'
import { Routes, Route } from "react-router-dom";
import { AuthRouter } from './AuthRouter';

import { JournalScreen } from '../components/journal/JournalScreen';


export const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/auth/*" element={<AuthRouter/>}/>
                <Route path="/" element={<JournalScreen />} />
                <Route path="*" element={<AuthRouter/>} />
            </Routes>
        </div>
    )
}
