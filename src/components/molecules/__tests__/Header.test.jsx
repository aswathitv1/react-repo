import {render,screen,fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import Header from '../Header'
import appStore from '../../../utils/appStore'
import { BrowserRouter } from 'react-router-dom'

it('should render header login button',()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter> 
    )

    const login = screen.getByRole("button",{name:"Login"})

    fireEvent.click(login)

    const logout = screen.getByRole("button",{name:"LogOut"})

    expect(logout).toBeInTheDocument()
})