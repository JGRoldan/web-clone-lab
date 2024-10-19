import { Link } from "react-router-dom"
import useAuthStore from "@/store/useAuthStore"

const CommentTicket = () => {
    const userName = useAuthStore((state) => state.userName)

    return (
        <div>
            <Link to={'/tickets-activos'}>
                <span className="text-purple-700 font-semibold hover:underline">Go to active tickets.</span>
            </Link>
            <div className="mt-2"></div>
            <section className="relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full flex-col justify-start items-start lg:gap-14 gap-7 inline-flex">
                        <h2 className="w-full text-gray-900 text-2xl font-bold font-manrope leading-normal">Comments</h2>
                        <div className="w-full flex-col justify-start items-start gap-8 flex">
                            <div className="w-full pb-6 border-b border-gray-300 justify-start items-start gap-2.5 inline-flex">
                                <img className="w-10 h-10 rounded-full object-cover" src="https://t4.ftcdn.net/jpg/05/10/87/95/360_F_510879590_4rFLdOZeNU3dAY9odAwqnkdQRfYnhuwJ.jpg" alt="Support helpdesk logo" />
                                <div className="w-full flex-col justify-start items-start gap-3.5 inline-flex">
                                    <div className="w-full justify-start items-start flex-col flex gap-1">
                                        <div className="w-full justify-between items-start gap-1 inline-flex">
                                            <h5 className="text-gray-900 text-sm font-semibold leading-snug">{userName}</h5>
                                            <span className="text-right text-gray-500 text-xs font-normal leading-5">12 hour ago</span>
                                        </div>
                                        <h5 className="text-gray-800 text-sm font-normal leading-snug">In vestibulum sed aliquet id turpis. Sagittis sed sed adipiscing velit habitant quam. Neque feugiat consectetur consectetur turpis.</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex-col justify-start items-start gap-5 flex">
                            <div className="w-full rounded-3xl justify-start items-start gap-3.5 inline-flex">
                                <img className="w-10 h-10 object-cover rounded-full" src="https://t4.ftcdn.net/jpg/05/10/87/95/360_F_510879590_4rFLdOZeNU3dAY9odAwqnkdQRfYnhuwJ.jpg" alt="Support helpdesk logo" />
                                <textarea name="comment" rows="5" className="w-full px-5 py-3 rounded-2xl border border-gray-300 resize-none focus:outline-none placeholder-gray-400 text-gray-900 text-lg font-normal leading-7" placeholder="Write a your thoughts here...."></textarea>
                            </div>
                            <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl justify-center items-center flex">
                                <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">Post your comment</span>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default CommentTicket