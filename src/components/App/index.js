import React, { useState } from 'react';
import { ThemeProvider } from '../../contexts/ThemeContext';
import Header from '../Header';
import Post from '../Post';
import { Title } from './styles';
const posts = [
    {
        id: Math.random(),
        title: 'Post 1',
        subtitle: 'Subtitle 1',
        likes: 30,
        read: true,
        removed: false,
    },
    {
        id: Math.random(),
        title: 'Post 2',
        subtitle: 'Subtitle 2',
        likes: 40,
        read: false,
        removed: false,
    },
    {
        id: Math.random(),
        title: 'Post 3',
        subtitle: 'Subtitle 33',
        likes: 10,
        read: false,
        removed: false,
    }
]


function App() {

    const [postsArray, setPostsArray] = useState(posts);

    function handleClick() {
        setPostsArray(prevState => [
            ...prevState, {
                id: Math.random(),
                title: `Post ${prevState.length + 1}`,
                subtitle: `Subtitle ${prevState.length + 1}`,
                likes: 10,
            }
        ]);
    }

    function onRemovePost(postId) {

        setPostsArray(prevState => prevState.map(post => post.id === postId
            ? ({ ...post, removed: true })
            : post)
        );

    }

    return (
        <ThemeProvider>
            <Header title="Blog Ferinhas">
                <Title as="h2">
                    Posts da semana
                    <button onClick={handleClick}>Atualizar</button>
                </Title>
            </Header>

            <hr />

            {postsArray.map(post => (
                <Post
                    key={post.id}
                    post={post}
                    onRemove={onRemovePost}
                />
            ))}

        </ThemeProvider>
    )
}

export default App;