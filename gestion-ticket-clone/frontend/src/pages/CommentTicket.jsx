import { Link } from "react-router-dom"
import { formatDate } from "@/helper/formatDate"
import useCommentTicket from "@/hook/useCommentTicket"

const CommentTicket = () => {
    const { data, onHandlerChange, handleSubmit, comment } = useCommentTicket()

    return (
        <div>
            <Link to={'/tickets-activos'}>
                <span className="text-purple-700 font-semibold hover:underline">Back to Tickets.</span>
            </Link>
            <div className="mt-2"></div>
            <section className="relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full flex-col justify-start items-start lg:gap-14 gap-7 inline-flex">
                        <h2 className="w-full text-gray-900 text-2xl font-bold font-manrope leading-normal">Comments</h2>
                        <div className="w-full max-h-52 overflow-y-scroll flex-col justify-start items-start flex
                            [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
                        >
                            {
                                comment.map(({ body, comment_date, comment_type, user }, index) => {
                                    const createdDate = formatDate(comment_date)
                                    const borderComment = comment_type === 'cierre' ? 'border-b border-purple-300 bg-purple-100' : 'border-b border-gray-300'

                                    return (
                                        <div key={index} className={`${borderComment} pt-4 w-full pb-4 justify-start items-start inline-flex`}>
                                            <img className="w-10 h-10 rounded-full object-cover" src="https://t4.ftcdn.net/jpg/05/10/87/95/360_F_510879590_4rFLdOZeNU3dAY9odAwqnkdQRfYnhuwJ.jpg" alt="Support helpdesk logo" />
                                            <div className="w-full ">
                                                <div className="w-full flex-col flex gap-1">
                                                    <div className="w-full justify-between inline-flex">
                                                        <h5 className="text-gray-900 text-sm font-semibold leading-snug">{user.username}</h5>
                                                        <span className="text-right text-gray-500 text-xs font-normal leading-5">{createdDate}</span>
                                                    </div>
                                                    <h5 className="text-gray-800 text-sm font-normal leading-snug">{body}</h5>
                                                    <span className="text-xs text-gray-400">{comment_type}</span>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                        <form onSubmit={handleSubmit} className="w-full flex-col justify-start items-start gap-5 flex">
                            <div>
                                <label htmlFor="comment_type" className="block mb-2 text-sm font-medium text-gray-900">Choose a cooment type</label>
                                <select onChange={onHandlerChange} id="comment_type" name="comment_type" value={data.comment_type} className="text-gray-900 block rounded-md w-full py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option value="Choose a comment type">Choose a comment type</option>
                                    <option value="progreso">Progreso</option>
                                    <option value="cierre">Cierre</option>
                                </select>
                            </div>
                            <div className="w-full rounded-3xl justify-start items-start gap-3.5 inline-flex">
                                <img className="w-10 h-10 object-cover rounded-full" src="https://t4.ftcdn.net/jpg/05/10/87/95/360_F_510879590_4rFLdOZeNU3dAY9odAwqnkdQRfYnhuwJ.jpg" alt="Support helpdesk logo" />
                                <textarea required onChange={onHandlerChange} value={data.body} name="body" rows="5" className="w-full px-5 py-3 rounded-2xl border border-gray-300 resize-none focus:outline-none placeholder-gray-400 text-gray-900 text-lg font-normal leading-7" placeholder="Write a your thoughts here...."></textarea>
                            </div>
                            <button type="submit" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl justify-center items-center flex">
                                <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">Post your comment</span>
                            </button>
                        </form>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default CommentTicket