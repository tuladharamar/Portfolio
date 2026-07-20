
import './App.css'
import ProfileForm from './Components/ProfileForm'
import ProgressCircle from './Components/ProgressCircle'
import TaskList from './Components/TaskList'
// import Tes1 from './Components/Tes1';
// import Tes2 from './Components/Tes2';

function App() {


  return (
    <>
      {/* <Tes1/>
      <Tes2/> */}
      <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-7xl mx-auto border-4 rounded-[40px] p-12 bg-white">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Side */}
          <ProfileForm />

          {/* Right Side */}
          <div className="flex flex-col items-center gap-10">
            <ProgressCircle percentage={65} />
            <TaskList />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
