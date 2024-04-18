import { getProfile } from './actions'
import ProfileForm from './profile-form';

export default async function Profile() {

  const userProfile = await getProfile();
  return (
    <ProfileForm profile={userProfile}/>
  )
}
