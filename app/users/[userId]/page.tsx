import getUserById from '@/utils/getUserById';
import getUserPosts from '@/utils/getUserPosts';
import { Metadata } from 'next';
import { Suspense } from 'react';
import UserPosts from './UserPosts';

type Params = {
  params: {
    userId: string;
  };
};

/**
 * Type of the parameter of component with dynamic routes
 * type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
 */

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUserById(userId);
  const user = await userData;

  return {
    title: `${user.name} - Posts`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUserById(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  // const [user, userPosts] = await Promise.all([userData, userPostsData]);
  const user = await userData;

  return (
    <>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <br />
      <Suspense fallback={<p>Loading posts...</p>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}
