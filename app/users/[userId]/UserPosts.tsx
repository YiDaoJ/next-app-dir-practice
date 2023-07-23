type Props = {
  promise: Promise<Post[]>;
};

const UserPosts: FC<Props> = async ({ promise }: Props) => {
  const posts = await promise;

  return (
    <>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </>
  );
};

export default UserPosts;
