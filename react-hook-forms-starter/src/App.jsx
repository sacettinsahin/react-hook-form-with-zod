function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-500">
      <form className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-2xl text-center font-medium">Register Form</h1>
        <hr className="mt-3" />

        {/* Input field start */}

        <div className="mt-5 flex flex-col">
          <label className="text-base">Username</label>
          <input
            className="border w-full text-base px-2 py-1 rounded-md focus:outline-none focus:ring-0 focus:border-indigo-400 focus:border-2"
            type="text"
          />
        </div>

        <div className="mt-3 flex flex-col">
          <label className="text-base">Email</label>
          <input
            className="border w-full text-base px-2 py-1 rounded-md focus:outline-none focus:ring-0 focus:border-indigo-400 focus:border-2"
            type="email"
          />
        </div>

        <div className="mt-3 flex flex-col">
          <label className="text-base">Age</label>
          <input
            className="border w-full text-base px-2 py-1 rounded-md focus:outline-none focus:ring-0 focus:border-indigo-400 focus:border-2"
            type="number"
          />
        </div>

        <div className="mt-3 flex flex-col">
          <label className="text-base">Password</label>
          <input
            className="border w-full text-base px-2 py-1 rounded-md focus:outline-none focus:ring-0 focus:border-indigo-400 focus:border-2"
            type="password"
          />
        </div>

        <div className="mt-3 flex flex-col">
          <label className="text-base">Confirm Password</label>
          <input
            className="border w-full text-base px-2 py-1 rounded-md focus:outline-none focus:ring-0 focus:border-indigo-400 focus:border-2"
            type="password"
          />
        </div>
        {/* Input field end */}

        {/* Button field start */}
        <div className="flex justify-between mt-5">
          <button
            className="bg-white text-indigo-500 px-5 py-1 rounded-md font-semibold"
            type="submit"
          >
            Reset
          </button>
          <button
            className="bg-indigo-500 text-white px-5 py-1 rounded-md hover:bg-indigo-600"
            type="submit"
          >
            Submit
          </button>
        </div>
        {/* Button field end */}
      </form>
    </div>
  );
}

export default App;
