import RestItem, { promotedRestitem } from "../../atoms/RestItem"
import '@testing-library/jest-dom'
import {screen,render} from '@testing-library/react'
import restDataMock from '../mocks/restDataMock.json'

it('should render restaurant card',()=>{
    render(<RestItem restData={restDataMock}/>)

    const name = screen.getByText('Pizza Hut')
    expect(name).toBeInTheDocument()
})

// it("should render card with locality tag",()=>{
//     // const RestItemPromoted = promotedRestitem(<RestItem restData={restDataMock}/>)
//     render(promotedRestitem(<RestItem restData={restDataMock}/>))

//     console.log(promotedRestitem(<RestItem restData={restDataMock}/>))

//     const locality = screen.getByText("Koram angala")

//     expect(locality).toBeInTheDocument()
// })