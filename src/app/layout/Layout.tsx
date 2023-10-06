import { Outlet, useNavigate } from "react-router-dom";
import { Menu, MenuItemProps } from "semantic-ui-react";

const Layout = () => {
    let navigate = useNavigate(); 
    const routeChange = (e: any, data: MenuItemProps) =>{ 
        navigate(data.to);
    }
  return (
    <>
      <Menu>
        <Menu.Item header>Eventos</Menu.Item>
        <Menu.Item
          name='eventos'
          to="/eventos"
          onClick={routeChange}
        >
            Cadastro de Eventos
        </Menu.Item>
        <Menu.Item
          name='participantes'
          to="/participantes"
          onClick={routeChange}
        >
            Cadastro de Participantes
        </Menu.Item>
      </Menu>

      <Outlet />
    </>
  )
};

export default Layout;