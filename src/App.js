import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
//导入抽屉里面的数据,抽屉名为folderList
import { folderList } from './MyList';
//抽屉宽度200px
const drawerWidth = 200;
//管理样式
const styles = theme => ({
  //控制appBar的移动
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`
  },
//抽屉开关离边缘距离
  menuButton: { 
    marginLeft: 12,
    marginRight: 20
  },
  //打开抽屉后,按钮消失
  hide: {
    display: 'none',
  },
  //抽屉顶端按钮样式
  drawerHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 8px',
    //保持和toolBar最小值一样
    ...theme.mixins.toolbar,
  }
});
//抽屉组件
class MyDrawer extends React.Component { 
  //抽屉默认是关闭的
  state = {
    open: false, 
  };
  //控制抽屉打开函数
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  //控制抽屉关闭函数
  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    const drawer = (
      //抽屉状态为打开的时候的样子,并导入folderList里面的东西
      <Drawer open={open}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <List>{folderList}</List>
      </Drawer>
    );

    //判断抽屉是否打开
    var displayFolder = null;
    if (open) {
      displayFolder = drawer;
    }

    return (
        <div>
          <AppBar
            className={classNames(classes.appBar, {
               //将appBar的形态变换打开
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton color="inherit"
                //点击触发打开抽屉的事件
                onClick={this.handleDrawerOpen}
                >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
               My Drawer
              </Typography>
            </Toolbar>
          </AppBar>
          {displayFolder}
        </div>
      
    );
  }
}
MyDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MyDrawer);

