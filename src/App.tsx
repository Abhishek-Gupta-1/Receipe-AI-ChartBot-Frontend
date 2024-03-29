import React, { useState } from 'react'
import "./App.css"

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim()) return
    setMessages([...messages, { text: input, isUser: true }])
    setInput('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value.split(' ').slice(0, 25).join(' ') + (e.target.value.split(' ').length > 25 ? '...' : ''))
  }

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //     e.preventDefault()
  //     handleSubmit(e)
  //   }
  // }

  return (
    <div className="homeback">

      {/* ----------textbox--------------------- */}
      <div className='absolute inset-x-0 bottom-0'>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center px-3 py-2  bg-gray-50 dark:bg-gray-700">
            <input
              type='text'
              id="chat"
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="write Food Name for recipe or the ingredients you have to get the recipe......"
              value={input}
              onChange={handleChange}

              maxLength={120}
            />
            <button
              type="submit"
              className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
            >
              <svg
                className="w-5 h-5 rotate-90 rtl:-rotate-90"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
              </svg>
              <span className="sr-only">Send </span>
            </button>
          </div>
        </form>
      </div>
      {/* ----------messages--------------------- */}
      <div className="absolute inset-x-0 top-16 flex flex-col">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`px-3 py-2 mb-2 rounded-lg ${message.isUser ? 'bg-blue-100' : 'bg-gray-100'} ${message.isUser ? 'ml-auto' : 'mr-auto'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
    </div>

  )
}

export default App