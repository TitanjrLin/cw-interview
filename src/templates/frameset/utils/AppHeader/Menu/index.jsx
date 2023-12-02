import React from 'react';
import LongTermCareIcon from '../../../../../components/atoms/LongTermCareIcon';
import IconBurger from '../../../../../assets/images/menu/burger.svg';
import {
  MenuClose, MenuItem, MenuList,
  MenuMain, MenuTrigger, Wrapper,
} from './styled';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  show = () => {
    this.setState({ isOpen: true });
  };

  hide = () => {
    this.setState({ isOpen: false });
  };

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.hide();
  };

  scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      this.hide();
    }
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Wrapper>
        <MenuTrigger
          onClick={this.toggle}
        >
          <img src={IconBurger} />
        </MenuTrigger>
        <MenuMain open={isOpen}>
          <MenuClose
            onClick={this.hide}
          >
            <LongTermCareIcon type="close" />
          </MenuClose>
          <MenuList>
            <MenuItem
              onClick={this.scrollTop.bind(this)}
            >
              <label>首頁</label>
            </MenuItem>
            <MenuItem
              onClick={this.scrollTo.bind(this, 'OnSiteCare')}
            >
              <label>照顧現場</label>
            </MenuItem>
            <MenuItem
              onClick={this.scrollTo.bind(this, 'LongTermCare')}
            >
              <label>一看就懂長照2.0</label>
            </MenuItem>
            <MenuItem
              onClick={this.scrollTo.bind(this, 'LongTermCareMap')}
            >
              <label>長照地圖</label>
            </MenuItem>
          </MenuList>
        </MenuMain>
      </Wrapper>
    );
  }
}

export default Menu;
