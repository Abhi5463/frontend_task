import React, { useState, useEffect } from 'react';
import TopButtons from './TopButtons';
import Dropdown from './Dropdown';
import EmailList from './EmailList';
import { setEmails } from "../redux/UserSlice";
import { useDispatch } from 'react-redux';

const RightTable = () => {
  const dispatch = useDispatch();
  const emails = [
    {
      name: 'John Doe',
      count: 5,
      snippet:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac orci at odio condimentum pellentesque sit amet non justo. Fusce nec malesuada justo. Donec euismod urna nec dolor vestibulum, eu laoreet ipsum auctor. Vivamus nec interdum velit. Nam a facilisis urna. Curabitur vitae ex eu ipsum condimentum auctor. Nunc non nunc nec risus finibus vehicula ut ac odio. Integer eu nulla eget odio auctor fringilla ac nec justo. In suscipit tincidunt nisl, id lacinia orci blandit ut. Nullam ut mi et dolor tempus bibendum.',
      date: 'Mar 6',
      labels: ['support'],
    },
    {
      name: 'Alice Smith',
      count: 3,
      snippet:
        'Consectetur adipiscing elit. Fusce eu felis varius, semper enim a, vehicula purus. Etiam ac nulla eget neque venenatis vulputate eu eu mauris. Ut luctus, dui sit amet laoreet malesuada, ante urna tincidunt felis, at malesuada orci elit eget turpis. Suspendisse potenti. Nullam lobortis malesuada arcu a tristique. Fusce sit amet orci congue, lacinia nulla vitae, eleifend turpis.',
      date: 'Mar 5',
      labels: ['family'],
    },
    {
      name: 'Bob Johnson',
      count: 7,
      snippet:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: 'Mar 4',
      labels: ['social'],
    },
    {
      name: 'Emma Wilson',
      count: 2,
      snippet:
        'Ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      date: 'Mar 3',
      labels: [],
    },
    {
      name: 'Sophia Davis',
      count: 4,
      snippet:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: 'Mar 2',
      labels: ['support'],
    },
    {
      name: 'Michael Lee',
      count: 1,
      snippet:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: 'Mar 1',
      labels: ['family'],
    },
    {
      name: 'Olivia Wilson',
      count: 6,
      snippet:
        'Culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: 'Feb 28',
      labels: ['social'],
    },
    {
      name: 'William Anderson',
      count: 0,
      snippet:
        'Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: 'Feb 27',
      labels: [],
    },
    {
      name: 'Ava Martinez',
      count: 3,
      snippet:
        'Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: 'Feb 26',
      labels: ['family'],
    },
    {
      name: 'James Brown',
      count: 8,
      snippet:
        'Deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      date: 'Feb 25',
      labels: ['support'],
    },
    {
      name: 'Mia Johnson',
      count: 5,
      snippet:
        'Amet consectetur adipiscing elit pellentesque. Mauris a diam maecenas sed. Urna nec tincidunt praesent semper feugiat nibh. Sit amet volutpat consequat mauris nunc congue nisi. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Egestas integer eget aliquet nibh praesent. Eu nisl nunc mi ipsum faucibus vitae. A cras semper auctor neque vitae tempus quam pellentesque nec. Sed adipiscing diam donec adipiscing tristique risus. Porttitor rhoncus dolor purus non enim praesent. Egestas erat imperdiet sed euismod nisi porta lorem. Adipiscing at in tellus integer feugiat scelerisque varius. Vitae proin sagittis nisl rhoncus mattis rhoncus. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Viverra justo nec ultrices dui sapien eget mi proin.',
      date: 'Feb 24',
      labels: ['support'],
    },
    {
      name: 'Ella Harris',
      count: 3,
      snippet:
        'Porttitor eget dolor morbi non arcu risus quis varius quam. Volutpat ac tincidunt vitae semper quis lectus. Urna cursus eget nunc scelerisque viverra mauris. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Vitae et leo duis ut diam quam nulla porttitor massa. Scelerisque purus semper eget duis at tellus at urna condimentum. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Varius vel pharetra vel turpis nunc eget lorem dolor. Sed tempus urna et pharetra pharetra. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Integer vitae justo eget magna fermentum iaculis. Quam pellentesque nec nam aliquam sem et tortor consequat. A erat nam at lectus urna. Elit at imperdiet dui accumsan sit amet. Eget gravida cum sociis natoque penatibus. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Amet cursus sit amet dictum sit amet justo donec enim. Neque convallis a cras semper auctor. Et malesuada fames ac turpis egestas integer eget.',
      date: 'Feb 23',
      labels: ['family'],
    },
    {
      name: 'Liam Brown',
      count: 2,
      snippet:
        'In ante metus dictum at tempor. At risus viverra adipiscing at in tellus integer feugiat. Amet consectetur adipiscing elit pellentesque. Quis hendrerit dolor magna eget est lorem ipsum. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Mi bibendum neque egestas congue quisque. Ac tortor dignissim convallis aenean et tortor at. Cursus vitae congue mauris rhoncus. Eget mi proin sed libero enim. Et malesuada fames ac turpis egestas sed tempus urna. Consequat semper viverra nam libero. Ullamcorper eget nulla facilisi etiam. Amet justo donec enim diam vulputate ut. Dictum varius duis at consectetur lorem donec massa sapien. Sit amet luctus venenatis lectus magna. Urna nec tincidunt praesent semper feugiat nibh. Venenatis cras sed felis eget velit aliquet sagittis id. Aliquet enim tortor at auctor urna. Aenean et tortor at risus viverra. Sed adipiscing diam donec adipiscing tristique risus nec. Eget nunc lobortis mattis aliquam faucibus purus. Nec tincidunt praesent semper feugiat nibh.',
      date: 'Feb 22',
      labels: ['support'],
    },
    {
      name: 'Olivia Wilson',
      count: 6,
      snippet:
        'Culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: 'Feb 21',
      labels: ['social'],
    },
    {
      name: 'William Anderson',
      count: 0,
      snippet:
        'Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: 'Feb 20',
      labels: [],
    },
    {
      name: 'Ava Martinez',
      count: 3,
      snippet:
        'Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: 'Feb 19',
      labels: ['family'],
    },
    {
      name: 'James Brown',
      count: 8,
      snippet:
        'Deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      date: 'Feb 18',
      labels: ['support'],
    },
  ];
  
      
      useEffect(() => {
        const fetchData = async () => {
          try {
            // // Simulate fetching email data
            // const response = await fetch('/api/emails'); 
            // const data = await response.json();
            dispatch(setEmails(emails)); 
          } catch (error) {
            console.error('Error fetching email data:', error);
          }
        };
    
        fetchData();
      }, [dispatch]);
  
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  
  // Handle dropdown visibility toggles
  const toggleDropdown1 = () => setShowDropdown1(!showDropdown1);
  const toggleDropdown2 = () => setShowDropdown2(!showDropdown2);
  const toggleDropdown3 = () => setShowDropdown3(!showDropdown3);

  return (
    <div className="lg:w-5/6 mt-4px ml-2 border-2 border-gray-100 p-3">

      {/* Top Buttons Section */}
      <TopButtons
        toggleDropdown1={toggleDropdown1}
        toggleDropdown2={toggleDropdown2}
        toggleDropdown3={toggleDropdown3}
      />
      
      {/* Dropdown Menus */}
      {showDropdown1 && <Dropdown options={['Updates', 'Social', 'Team Message']}  position={{ top: 80, left: 300 }} />}
      {showDropdown2 && <Dropdown options={['Updates', 'Social', 'Team Message']}  position={{ top: 80, left: 400 }} />}
      {showDropdown3 && <Dropdown options={['Updates', 'Social', 'Team Message']}  position={{ top: 80, left: 500 }} />}
      
      {/* Email List Section */}
      <EmailList/>
    </div>
  );
};

export default RightTable;
