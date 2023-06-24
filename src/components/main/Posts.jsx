import PostItem from "./PostItem";

function Posts({userId, posts, onOpenModal, switchContent}){

    const handleOpenModal = () => {
        onOpenModal()
        switchContent('post')
    }

    const userPosts = posts.filter(post => post.userId === userId);

    return(
        <section className="posts">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-2xl lg:text-3xl !leading-[1.2] font-semibold">Posts: <span>Id {userId}</span></h2>
                <button onClick={handleOpenModal} className="bt-primary">
                    <span className="material-symbols-rounded mr-1">post_add</span>
                    Add New
                </button>
            </div>
            <div className="border-t border-gray-300 grid md:grid-cols-2 xl:grid-cols-3 gap-6 pt-8">
                {userPosts.length > 0 ? (
                    userPosts.map(post => (
                        <PostItem
                            key={post.id}
                            title={post.title}
                            body={post.body}
                        />
                    ))
                ) : (
                    <div className='py-8 text-xl text-gray-500'>
                        <span className="material-symbols-rounded">
                            sentiment_dissatisfied
                        </span>
                        <p>No posts found for this user. Start adding new posts for them!</p>
                    </div>

                )

                }
                
            </div>

        </section>
    )
}

export default Posts;