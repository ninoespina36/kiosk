import { useEffect, useState } from 'react';
import Time from './components/Time';
import Announcement from './components/Announcement';
import Marquee from './components/Marquee';
import StudentCard from './components/StudentCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  const [ studentShown, setStudentShown ] = useState(false);
  
  useEffect(()=>{

    const clickHander = () =>{
      setStudentShown(!studentShown);
    }

    document.body.addEventListener('click', clickHander);
    return ()=>  document.body.removeEventListener('click', clickHander);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ studentShown ])

  return (
    <div className="mx-auto bg-zinc-800">

      <ToastContainer />

      <div className="grid grid-cols-12">
        <div className="lg:col-span-4 col-span-12 shadow-md">
          <div style={{ height: '90vh' }}>
            <Time date={new Date()} />
            <Announcement />
          </div>
        </div>

        <div className="lg:col-span-8 col-span-12">
          <div className="w-full h-full flex items-center justify-center bg-slate-400">
            {!studentShown ? (
              <img src="https://wallup.net/wp-content/uploads/2017/03/28/443655-photography-nature-landscape-lake-mountains-forest-reflection-calm_waters-snow-clouds-wildflowers-Lake_Louise-Alberta-Canada-748x474.jpg" alt="" className="h-full w-full object-cover object-center"/>
            ) : (
              <div className="p-10">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-12 pb-10">
                    <StudentCard name="John Doe" img="https://t3.ftcdn.net/jpg/01/25/82/12/360_F_125821215_yoIIsTPyiXFdnH9DA2GOeId3fv4b8FNw.jpg"/>
                  </div>
                  <div className="lg:col-span-4 col-span-12 opacity-60">
                    <StudentCard small name="John Super Saiyan Doe" img="https://content.instructables.com/ORIG/FM2/JTUR/J16P2AHN/FM2JTURJ16P2AHN.jpg?auto=webp&fit=bounds&frame=1&height=1024&width=1024auto=webp&frame=1&height=150"/>
                  </div>
                  <div className="lg:col-span-4 col-span-12 opacity-60">
                    <StudentCard small name="Jane Doe" img="https://www.immihelp.com/assets/article-images/child-correct.png"/>
                  </div>
                  <div className="lg:col-span-4 col-span-12 opacity-60">
                    <StudentCard small name="Why Doe" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_s581pv47KtJiRPDWz-bOFLFbXr4-5YHiwcPRtBCUKBzFrSzeS2-sZ11jk-QZi99FJ0&usqp=CAU"/>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="col-span-12">
          <div style={{ height: '10vh' }} className="bg-cyan-500 flex items-center font-medium py-5 overflow-hidden">
            <Marquee />
          </div>
        </div>
      </div>
    </div>
  );
}