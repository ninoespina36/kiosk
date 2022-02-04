import moment from "moment"
import AnalogClock from 'analog-clock-react';

export default function Time({ date }){

    const options = {
        width: "120px",
        height: "120px",
        border: true,
        borderColor: "#d4d4d8",
        baseColor: "#27272a",
        centerColor: "#459cff",
        centerBorderColor: "#ffffff",
        handColors: {
          second: "#22d3ee",
          minute: "#ffffff",
          hour: "#ffffff"
        },
        "seconds": moment(date).seconds(),   // set your
        "minutes": moment(date).minutes(),  // own
        "hours": moment(date).hours()
    };

    return (
        <div className="md:h-1/4 flex items-center justify-center 3xl:p-10 p-5 bg-gray-100">
            <div className="md:flex items-center justify-start pl-5 w-full h-full">
                <AnalogClock {...options} />
                <div className="md:ml-5 text-zinc-800 md:mt-0 mt-5">
                    <h1 className="font-medium text-2xl mb-2">{moment(date).format('dddd, MMM DD, YYYY')}</h1>
                    <h1 className="font-bold text-4xl">{moment(date).format('LT')}</h1>
                </div>
            </div>
        </div>
    )
}