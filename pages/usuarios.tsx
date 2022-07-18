import Head from "next/head";
import { type } from "os";
import Layout from "../components/Layout";
import api from "../libs/api";
import { User } from "../types/User";


type Props = {
  users: User[];
}

const Usuarios = ({users}: Props) => {
  return (
    <Layout >
      <div>
        <Head>
          <title>Usuários</title>
        </Head>
        <h1>Página Usuários</h1>

        { users.map((it, index) => (
          <li>{it.name} - {it.email} - {it.id}</li>
        ) ) }
      </div>
    </Layout>
  )  
}

export const getServerSideProps = async () => {


  const users = await api.getAllUsers(0);

  return {
    props: {
      users
    }
  }
}

export default Usuarios;