import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Contact from '../Contact'

test("contact loading",()=>{
    render(<Contact/>) 

    const heading = screen.getByRole("heading")
    
    expect(heading).toBeInTheDocument();
});

test("button present in page",()=>{
    render(<Contact/>)

    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument();
})