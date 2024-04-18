
import React from 'react'
import ChangePasswordForm from './change-password-form'
import { getProfile } from '../profile/actions';

export default async function ChangePassword() {
   
  const userProfile = await getProfile();
  return <ChangePasswordForm  profile={userProfile}/>
}
