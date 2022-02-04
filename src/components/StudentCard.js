import { ClockIcon, LoginIcon, QrcodeIcon } from '@heroicons/react/outline';

export default function StudentCard({ className = null, name, img, small = false }){
    return (
        <div className={`items-center shadow-lg rounded-md h-full mx-auto bg-gray-100 relative transform ${className} ${small ? 'p-5' : 'lg:w-[500px] lg:flex lg:p-10 p-5'}`}>
            <div className="flex-shrink-0">
                <img alt="" className={`${small ? 'w-20 h-20 mb-5 border-4' : 'w-40 h-40 border-8'} object-cover object-center rounded-full border-white`} src={img} />
            </div>
            <div className={small ? '' : 'ml-5'}>
                <QrcodeIcon className={`${small ? 'w-8' : 'w-10'} text-cyan-500 absolute top-5 right-5`}/>
                <h1 className={`${small ? 'text-md' : 'text-2xl'} font-medium mb-2 text-cyan-500`}>{name}</h1>
                <div className={small ? 'text-sm' : ''}>
                    <p className="mb-1 flex gap-2"><LoginIcon className="w-5 text-cyan-500"/><span>Entrance: <span className="font-medium">Gate 1</span></span></p>
                    <p className="mb-1 flex gap-2"><ClockIcon className="w-5 text-cyan-500"/><span>Entry Time: <span className="font-medium">1:00 PM</span></span></p>
                </div>
            </div>
        </div>
    )
}