import PostThread from '@/components/forms/PostThread';
import { fetchUser } from '@/lib/actions/user.action';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const Page = async () => {
  const user = await currentUser();
  console.log(user);

  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  console.log();

  if (!userInfo?.onboarded) redirect('/onboarding');

  return (
    <div>
      <h1 className='head-text'>Create Thread</h1>

      <PostThread userId={userInfo._id} />
    </div>
  );
};

export default Page;
