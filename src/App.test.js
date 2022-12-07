import React from "react";
import { render,screen,fireEvent, getByText} from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import App from "./App";
import '@testing-library/jest-dom';

describe("List test",()=>{
    let Emoji,text,input

    beforeEach(()=>{
      render(<App/>)
      text= screen.getByPlaceholderText("Emoji Adı Giriniz")
      Emoji=screen.getAllByTestId("Copy")
      
    })

    test('HeaderEmoji', () => { 
         expect(text).toBeInTheDocument()

     })
     
     test("Emoji", () => { 
         expect(Emoji.length).toEqual(20)
     })

     test("EmojiSearch",()=>{
         const Name="Kissing"
         const EmojiType=screen.getByRole("textbox")
         userEvent.type(EmojiType,Name)
         expect(screen.getByText(Name)).toBeInTheDocument()
         
     })

     test('copy', () => { 
        expect(Emoji[0]).toHaveAttribute("data-clipboard-text");
    });
})