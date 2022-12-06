import './App.css'
import useFetchData from './hooks/useFetchData'

const App = () => {
    const users = useFetchData('https://jsonplaceholder.typicode.com/users', (data)=> data.map((item)=> ({id: item.id, name: item.name})))
    const posts = useFetchData('https://jsonplaceholder.typicode.com/posts', (data)=>data.slice(0,10));
    const comments = useFetchData('https://jsonplaceholder.typicode.com/comments',(data)=>data.slice(0,10))

   
    return (
        <div style={{ width: '100%', display: 'flex', gap: '1 rem', justifyContent: 'space-between' }}>
            <div>
                <h1>Users</h1>
                <hr />
                {users.loading && <h3>Loading...</h3>}
                {users.error && <h3>{users.error}</h3>}
                {users.data?.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </div>
            <div>
                <h1>Posts</h1>
                <hr />
                {posts.loading && <h3>Loading...</h3>}
                {posts.error && <h3>{posts.error}</h3>}
                {posts.data?.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </div>
            <div>
                <h1>Comments</h1>
                <hr />
                {comments.loading && <h3>Loading...</h3>}
                {comments.error && <h3>{comments.error}</h3>}
                {comments.data?.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </div>
        </div>
    )

}

export default App;