import React, {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {useDispatch,useSelector} from "react-redux";
import { employee_action } from '../store/main';
import {Box,Drawer,CssBaseline,Divider,IconButton,Autocomplete,TextField,Chip} from '@mui/material';

import {Menu,ChevronLeft,ChevronRight } from '@mui/icons-material';
import {FilterAltOutlined} from '@mui/icons-material';
import classes from "./filter.module.css";
import JobTable from './jobTable';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [filterApplied,setFilterApplied]=useState(false);
  const [filterInput,setFilterInput]=useState({
    firstName:"",
    lastName:"",
    address:"",
    designation:null,
  });
  const dispatch=useDispatch();
  // const filterOpen=useSelector(state=>state.emp_list.filterApplied);
  const initialList=useSelector(state=>state.emp_list.data);
  const filterList=useSelector(state=>state.emp_list.filteredData);
  console.log(initialList);
  const jobs=[
    {title:"SVP, Sales"},
    {title:"VP, Academics"},
    {title:"Director, Engineering"},
    {title:"Senior Manager"},
    {title:"Software Dev Manager"},
    {title:"SDE, Retail"}]


  function filterHandler(event){
    event.preventDefault();
    console.log(filterInput);
    setFilterApplied(true);
    dispatch(employee_action.filterData(filterInput))
;

  }
  function clearHandler(event){
    event.preventDefault();
    setFilterInput({
      firstName:"",
      lastName:"",
      address: "",
      designation:null,
    })
    setFilterApplied(false);
    dispatch(employee_action.removeFilter());
    setOpen(false);
  }


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <FilterAltOutlined
            // color="inherit"
            className={classes.filterButton}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ width:"40px",height:"40px",...(open && { display: 'none' }) }}
          >
            <Menu />
      </FilterAltOutlined>


      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          FILTERS
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <TextField
        id="outlined-name"
        label="First Name"
        value={filterInput.firstName}
        onChange={(e) => {
          setFilterInput({...filterInput,firstName:e.target.value});
        }}
      />
          <TextField
        id="outlined-name"
        label="Last Name"
        value={filterInput.lastName}
        onChange={(e) => {
          setFilterInput({...filterInput,lastName:e.target.value});
        }}
      />
          <TextField
        id="outlined-name"
        label="Address"
        value={filterInput.address}
        onChange={(event) => {
          setFilterInput({...filterInput,address:event.target.value});
        }}
      />

        <Autocomplete
              value={filterInput.designation}
              onChange={(event, newValue) => {
                setFilterInput({...filterInput, designation:newValue});
              }}
              id="tags-filled"
              options={jobs.map((option) => option.title)}
              renderTags={(value, getTagProps) =>
                value.map((option,index) => (
                  <Chip
                    variant="filled"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  // variant="filled"
                  placeholder="Designation"
                />
              )}
            />
        <Divider />
    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Basic example"
        value={filterInput.joinDate}
        onChange={(newValue) => {
          setFilterInput({...filterInput,joinDate:newValue.d});
        }}
        renderInput={(params) => <TextField {...params} />}
        // inputFormat="DD/MM/YYYY"

      />
    </LocalizationProvider> */}
    <section className={classes.lthree}> 
        <button onClick={filterHandler}>Apply Filters</button>
        <button onClick={clearHandler}>Clear All</button>
      </section>

      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {filterApplied ?
          <JobTable data={filterList}/> 
        :<JobTable data={initialList}/>
        }
        
      </Main>
    </Box>
  );
}

