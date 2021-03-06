import { PropTypes } from 'react';
import { gql, graphql } from 'react-apollo';
import PostUpvoter from './PostUpvoter';

const POSTS_PER_PAGE = 10;

const PostList = ({ data: { allPosts, loading, _allPostsMeta }, loadMorePosts }) => {
  if (allPosts && allPosts.length) {
    const areMorePosts = allPosts.length < _allPostsMeta.count;
    return (
      <section>
        <ul>
          {allPosts.map((post, index) => (
            <li key={post.id}>
              <div>
                <span>{index + 1}. </span>
                <a href={post.url}>{post.title}</a>
                <PostUpvoter id={post.id} votes={post.votes} />
              </div>
            </li>
           ))}
        </ul>
        {areMorePosts ? <button onClick={() => loadMorePosts()}> {loading ? 'Loading...' : 'Show More'} </button> : ''}

      </section>
    );
  }
  return <div>Loading</div>;
};

PostList.propTypes = {
  data: PropTypes.object.isRequired,
  loadMorePosts: PropTypes.func.isRequired,
};

const allPosts = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      votes
      url
      createdAt
    },
    _allPostsMeta {
      count
    }
  }
`;

export default graphql(allPosts, {
  options: {
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE,
    },
  },
  props: ({ data }) => ({
    data,
    loadMorePosts: () =>
      data.fetchMore({
        variables: {
          skip: data.allPosts.length,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult;
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts],
          });
        },
      }),
  }),
})(PostList);
