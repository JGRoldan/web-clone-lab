import { useEffect, useState } from "react"

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const countDownDate = new Date("Nov 15, 2024 00:00:00").getTime()

        const updateCounter = () => {
            const today = new Date().getTime()
            const distance = countDownDate - today

            if (distance <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
                return
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            })
        }

        const interval = setInterval(updateCounter, 1000)
        return () => clearInterval(interval) // Limpiar intervalo al desmontar
    }, [])

    return (
        <div className="mt-10 flex flex-col items-center justify-center text-center text-white">
            <div className="flex items-end justify-center z-10">
                <div className="m-2 sm:m-5">
                    <span className="dias text-white font-bold text-xl sm:text-5xl">{timeLeft.days}</span>
                    <p className="md:text-base text-sm">DIAS</p>
                </div>
                <div className="m-2 sm:m-5">
                    <span className="horas text-white font-bold text-xl sm:text-5xl">{timeLeft.hours}</span>
                    <p className="md:text-base text-sm">HORAS</p>
                </div>
                <div className="m-2 sm:m-5">
                    <span className="minutos text-white font-bold text-xl sm:text-5xl">{timeLeft.minutes}</span>
                    <p className="md:text-base text-sm">MINUTOS</p>
                </div>
                <div className="m-2 sm:m-5">
                    <span className="segundos text-white font-bold text-xl sm:text-5xl">{timeLeft.seconds}</span>
                    <p className="md:text-base text-sm">SEGUNDOS</p>
                </div>
            </div>
        </div>
    )
}

export default Countdown
