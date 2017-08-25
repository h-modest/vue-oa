import Login from '@/components/account/Login'
import Index from '@/components/account/Account'

const Account = {
  path: '/account',
  component: Index,
  children: [
    {
      path: 'login',
      component: Login
    }
  ]
}

export default Account
