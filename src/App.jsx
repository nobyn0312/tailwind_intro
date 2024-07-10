import './App.css'

function App() {

  return (
    <>
    <div className="wrapper px-8 bg-gray-100 ">
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">Hello, Tailwind CSS!</h1>
        <p className="mt-4 text-gray-600">これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。</p>
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Click Me
        </button>
        <br/>
        <button className="mt-6 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600">
          Click Me
        </button>
        <br/>
        <button className="mt-6 bg-blue-300 text-white px-4 py-2 rounded hover:bg-blue-600">
          Click Me
        </button>
        <br/>

        <p className='pt-10 mb-2'>transition</p>
        <button className="bg-slate-500 px-4 text-white py-2 rounded hover:bg-slate-300 transition duration-300">
        Click Me
        </button>
      </div>
    </div>

    </div>

  );

    </>
  )
}

export default App
