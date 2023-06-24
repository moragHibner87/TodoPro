function PostItem({title, body}){
    return(
        <div className="post-item border border-gray-300 rounded-md transition-all hover:shadow-lg p-4 px-5">
            <h3 className="text-lg font-semibold capitalize mb-3">{title}</h3>
            <p className="text-sm">{body}</p>
        </div>
    )
}

export default PostItem;