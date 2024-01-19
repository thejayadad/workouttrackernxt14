
import React from 'react'
import {getServerSession} from "next-auth";
import { authOptions } from '../api/auth/[...nextauth]/route';
import Link from 'next/link';
import LoginWithGoogle from '@/components/Buttons/LoginWithGoogle';


const LoginPage = async () => {
    const session = await getServerSession(authOptions);

  return (
    <div
    className='flex items-center'
    >
             {!!session && (
            <>
                <Link href={'/dashboard'}>
                    Dashboard
                </Link>
            </>
          )}
          {!session && (
            <>
            <Link href={'/post'}>Post</Link>
            <LoginWithGoogle />
            </>
          )}
    </div>
  )
}

export default LoginPage