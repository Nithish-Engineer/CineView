import React, { ReactNode, Children} from 'react'

import { Main } from '../Styles';
import Sidebar from '../components/sidebar';

function Layout({children}: {children: ReactNode }) {
  return (
    <Main>
        <Sidebar />
         {children}
    </Main>
  )
};

export default Layout