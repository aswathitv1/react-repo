import Body from "../Body"
import { render, screen, fireEvent } from '@testing-library/react'
import {act} from 'react-dom/test-utils'
import mockRestListData from '../mocks/mockRestListData.json'
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(mockRestListData)
        }
    })
})

it('should search rest list page',async()=>{
    await act(()=>{
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>    
        )
    })

    const searchbtn = screen.getByRole('button',{name:"Search"})
    expect(searchbtn).toBeInTheDocument()

    // expect

    const searchBox = screen.getByTestId('search')
    fireEvent.change(searchBox,{target:{value:"pizza"}})

    fireEvent.click(searchbtn)

    const numCards = screen.getAllByTestId('resCard')
    
    expect(numCards.length).toBe(1)
})