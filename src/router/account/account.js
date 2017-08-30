import Index from '@/components/account/Account'
import Login from '@/components/account/Login'
import Forget from '@/components/account/Forget'

const Account = {
  path: '/account',
  component: Index,
  children: [
    {
      path: 'login',
      component: Login
    },
    {
      path: 'forget',
      component: Forget
    }
  ]
}

export default Account
