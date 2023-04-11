import { Button, Label, TextInput } from 'flowbite-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { UserData } from './login'

const Register = (): JSX.Element => {
  const router = useRouter()
  const [data, setData] = useState<UserData>({
    email: '',
    password: '',
  })

  const updateData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    })
  }

  const onSubmit = (e: React.FormEvent) => {
    console.log(data)
    if (data.email === 'test@gatech.edu' && data.password === 'testpassword') {
      router.push('/patients')
    }
    e.preventDefault()
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          EKG Pro
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
              <div>
                <Label
                  id="email-label"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </Label>
                <TextInput
                  id="email"
                  type="email"
                  placeholder="name@gatech.edu"
                  onChange={updateData}
                  required={true}
                  shadow={true}
                />
              </div>
              <div>
                <Label
                  id="password-label"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </Label>
                <TextInput
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  onChange={updateData}
                  required={true}
                  shadow={true}
                />
              </div>

              <Button
                type="submit"
                className="w-full text-white bg-primary-600 "
              >
                Sign Up
              </Button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Have an account?{' '}
                <Link
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
