import Link  from 'next/link';

import Layout from '../components/Layout';

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

const Blog = () => (
    <div>
        <Layout> 
            <h1>My Blog</h1>
            <ul>
                <PostLink id="hello-next" />
                <PostLink id="learn-next" />
                <PostLink id="deploy-next" />
            </ul>
        </Layout>
    </div>
);

export default Blog;