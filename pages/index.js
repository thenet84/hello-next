import Link  from 'next/link';

import Layout from '../components/Layout';

const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

const Blog = () => (
    <div>
        <Layout> 
            <h1>My Blog</h1>
            <ul>
                <PostLink title="Hello Next.js" />
                <PostLink title="Learn Next.js" />
                <PostLink title="Deploy Next.js" />
            </ul>
        </Layout>
    </div>
);

export default Blog;