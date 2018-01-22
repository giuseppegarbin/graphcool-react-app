import { graphql } from 'react-apollo';

function Posts({ data: { posts } }) {
    return (
      <ul>
        {posts.map(({ id, text }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    );
  }
  
  export default graphql(gql`
    query {
      allPost {
        id
        text
      }
    }
  `)(Posts);