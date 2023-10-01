import React, { useState } from 'react'

function ProjectSearch({searchText}) {
    const [text, setText] = useState ('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto mt-40">
        <form onSubmit={onSubmit}
        className="w-full max-w-sm">
            <div className="flex items-center bborder-b-2 border-yellow-400 py-2 ">
                <input onChange={ e=>setText(e.target.value) }
                    className="border-b-2 border-yellow-400 py-1 px-2 focus:outline-none"
                    type="text" placeholder="Search" />
                <button 
                className="flex-shrink-0 bg-yellow-400 hover:bg-yellow-500  text-sm text-white py-1 px-2 rounded"
                type="submit">
                Search
                </button>
            </div>
        </form>
    </div>   
  )
  }

  export default ProjectSearch;
