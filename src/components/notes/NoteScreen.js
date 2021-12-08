import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes__content">
                <input type="text"
                       placeholder="Write an awesome title"
                       className="notes__title-input"
                       autoComplete="off"
                />
                <textarea placeholder="Write what you wanna"
                          className="notes__text-area"
                />

                <div className="notes__image">
                    <img src="https://t3.ftcdn.net/jpg/01/81/46/64/360_F_181466476_phkMIbMqrxEonL7JwlwuGmdCgTUFoyWT.jpg"
                    alt="Gifts under the Christmas tree."
                    ></img>
                </div>
            </div>
        </div>
    )
}
