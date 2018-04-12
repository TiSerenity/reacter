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
//引入flexbox
//import Flexbox from 'flexbox-react';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';
import green from 'material-ui/colors/green';
//import blue from 'material-ui/colors/blue';
import { FormControlLabel } from 'material-ui/Form';
import CheckBoxOutlineBlankIcon from 'material-ui-icons/CheckBoxOutlineBlank';
import CheckBoxIcon from 'material-ui-icons/CheckBox';
import Avatar from 'material-ui/Avatar';
import AddIcon from 'material-ui-icons/Add';
import Icon from 'material-ui/Icon';




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
  root:{
    
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    width: '100%',

  },
  //抽屉顶端按钮样式
  drawerHeader: {
    boradColor:'blue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    },

    content1: {
    backgroundColor: 'blue',
    textAlign:'center',
    // transition: theme.transitions.create('margin', {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
    fontSize:'70px',
      width: '475px',
      height: '230px',
      flexDirection:'column',
      display:'flex',
      
      alignItems:'center',
      justifyContent:'center',
  },
  content2: {
    backgroundColor: theme.palette.background.default,
    textAlign:'center',
      width: '225px',
      height: '230px',
       fontSize:'10px',
       paddingTop:'15px',
  
  },
  button: {
    //margin: theme.spacing.unit,
    width:'210px',
    height:'5px',
    marginTop:'20px',
  },
  input: {
    width:'200px',
    height:'23px',
  },
  checked: {
    color: green[500],
  },
  size: {
    width: '15px',
    height: '15px',
    fontSize:'10px',
    marginTop:'0px',
  },
  sizeIcon: {
    fontSize: '17px',
  },
  nounderline:{
    textDecoration:'none',
    fontSize:15,
    marginTop:'10px',
    
  },
  tim:{
    color:'white'
  },
  down:{
    backgroundColor: theme.palette.background.default,
    
      width: '475px',
      height: '185px',
      flexDirection:'row',
      display:'flex',
      border:'1px solid',
      justifyContent:'center',
      
  },
  left1:{
    width: '50px',
    height: '230px',
     fontSize:'10px',
  },
  left2:{
    display: 'flex',
    justifyContent: 'center',
    width: '75px',
    height: '230px',
     fontSize:'10px',
     paddingTop:'20px',

  },
  right1:{
    width: '75px',
    height: '230px',
     fontSize:'10px',
     paddingTop:'17px',
 
  },
  right2:{
    width: '50px',
    height: '230px',
     fontSize:'10px',
  },
  ztsize:{
    fontSize:'5px',
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  button2:{
    marginLeft: '5px',
    width: '35px',
    height: '20px',
    marginTop:'120px',
  },



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
  handleChangeCheckBox = name => event => {
    this.setState({ [name]: event.target.checked });
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
        <div className={classes.root}>
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
          <div className={classes.drawerHeader}/>
          
          <div className={classes.content1}>
             <div className={classes.tim}>TIM</div>
          </div>
     <div className={classes.down}>
     <div className={classes.left1}>
     <Button variant="fab" color="primary" aria-label="add" className={classes.button2}>
        <AddIcon />
      </Button>
     </div>
     <div className={classes.left2}>
      <Avatar
        alt="xingjimao"
        src="D:\learn\src\TIM20180412214829.png"
        className={classNames(classes.bigAvatar)}
      />

     </div>
     <div className={classes.content2}>
          <input className={classes.input}/>
          {/* <a href='' className={classes.nounderline}>注册帐号</a> */}
          <input className={classes.input}/>
          {/* <a href='' className={classes.nounderline}>找回密码</a> */}
          <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FormControlLabel className={classes.ztsize}
          control={
            <Checkbox
             className={classes.size}
             icon={<CheckBoxOutlineBlankIcon className={classes.sizeIcon} />}
              checkedIcon={<CheckBoxIcon className={classes.sizeIcon} />}
              checked={this.state.checked}
              onChange={this.handleChangeCheckBox('checked')}
              value="checked"
              color="primary"
            />
          }
          label="记住密码" 
        />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FormControlLabel
          control={
            <Checkbox
              className={classes.size}
              icon={<CheckBoxOutlineBlankIcon className={classes.sizeIcon} />}
              checkedIcon={<CheckBoxIcon className={classes.sizeIcon} />}
              checked={this.state.checked}
              onChange={this.handleChangeCheckBox('checked')}
              value="checked"
              color="primary"
            />
          }
          label="自动登录"
        />
          </div>
          <div>
            <Button variant="raised" color="primary" className={classes.button} size='small'>
              登录
            </Button>
         </div>
          </div>
          <div className={classes.right1}>
          <a href='' className={classes.nounderline}>注册帐号</a>
          <br/><br/>
          <a href='' className={classes.nounderline}>找回密码</a>
          </div>
          <div className={classes.right2}>
          <Button variant="fab" color="secondary" aria-label="edit" className={classes.button2}>
             <Icon>edit_icon</Icon>
          </Button>

          </div>

          
          </div>
          
         
         
         
          {/* <Flexbox flexDirection="column" >
  <Flexbox element="header" height="60px">
    Header
  </Flexbox>
 
  <Flexbox>
  <form>
    <labei>
 帐号<input height='30px'/> <a href=''>注册</a>
    </labei>
  </form>
  </Flexbox>
  <Flexbox height="60px">
  <form>
    <label>
    密码<input/> <a href=''>找回</a>
    </label>
  </form>
  </Flexbox>
  <Flexbox height="60px">
  <form>
    <label fontStyle='italic' fontSize='3px'>
    <input type='checkbox'/>记住密码
    <input type='checkbox'/>自动登录
    </label>
  </form>
  </Flexbox>
  <Flexbox height="60px">
  <form>
    <label>
    <input type='button' value='登录'/>
    </label>
  </form>
  </Flexbox>
</Flexbox> */}
        </div>
    );
  }
}
MyDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MyDrawer);

