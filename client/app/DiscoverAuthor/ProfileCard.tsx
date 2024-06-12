import { Paper, Typography, Avatar } from '@mui/material'
import styles from '@/styles/ProfilePage/AuthorProfilePage/profilecard.module.css';
import React, { useEffect , useState, useRef} from 'react'
import BookIcon from '@mui/icons-material/Book';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

interface Author{
    image: string;
    first_name: string;
    last_name: string;
    bio: string;
    followers: string
}


function ProfileCard(props : Author) {

  const MAX_WORDS = 20; // Maximum number of words allowed in the bio field
  // State to manage the current profile picture
  const [profilePicture, setProfilePicture] = useState<string>(props.image);
  // State to manage the open/close state of the dialog
  const [open, setOpen] = useState<boolean>(false);

  const [openProfileSection, setOpenProfileSection] = useState<boolean>(false);

   // Ref to access file input
   const fileInputRef = useRef<HTMLInputElement>(null);

   // State to manage the open/close state of the edit profile dialog
  const [openEditProfileDialog, setOpenEditProfileDialog] = useState<boolean>(false);

  // State to manage the user's first name, last name and bio for editing
  const [editedFirstName, setEditedFirstName] = useState<string>('');
  const [editedLastName, setEditedLastName] = useState<string>('');
  const [editedBio, setEditedBio] = useState<string>('');

   // State to manage the user's name and bio
  const [firstName, setFirstName] = useState<string>(props.first_name);
  const [lastName, setLastName] = useState<string>(props.last_name);
  const [bio, setBio] = useState<string>(props.bio);

  // Function to open the dialog
  const handleOpenDialog = () => {
    setOpen(true);
  };

  // Function to close the dialog
  const handleCloseDialog = () => {
    setOpen(false);
  };

   // Function to handle changing the profile picture
   const handleChangeProfilePicture = () => {
    if (fileInputRef.current?.files && fileInputRef.current.files[0]) {
      const file = fileInputRef.current.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result as string);
        handleCloseDialog();
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle deleting the profile picture
  const handleDeleteProfilePicture = () => {
    setProfilePicture('/defaultimage.jpg'); // Set profile picture to default image
    handleCloseDialog();
  };


  const handleCloseProfileSection = () => {
    setOpenProfileSection(false);
  };

  const handleOpenProfileSection = () => {
    setOpenProfileSection(true);
  };

  // Function to open the edit profile dialog
  const handleOpenEditProfileDialog = () => {
    setOpenEditProfileDialog(true);
    // Set the edited first name and last name to the current first name and last name
    setEditedFirstName(firstName);
    setEditedLastName(lastName);
    setEditedBio(bio);

  };

  // Function to close the edit profile dialog
  const handleCloseEditProfileDialog = () => {
    setOpenEditProfileDialog(false);
  };

  // Function to handle changes to the user's first name
  const handleEditedFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedFirstName(event.target.value);
  };

  // Function to handle changes to the user's last name
  const handleEditedLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedLastName(event.target.value);
  };

  // Function to handle changes to the user's bio
  const handleEditedBioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const bioText = event.target.value;
    const words = bioText.trim().split(/\s+/); // Split the text into words
    if (words.length <= MAX_WORDS) {
    setEditedBio(bioText);
    }
  };

  // Function to save changes made to the profile
  const handleSaveChanges = () => {
    // Update the permanent first name and last name states
    setFirstName(editedFirstName);
    setLastName(editedLastName);
    setBio(editedBio);
    handleCloseEditProfileDialog();
  };


 
  


  
  return (
        <Paper className={styles.paper} dir="rtl">
        <div className={styles.icons} dir="ltr">
        <a href='/components/ProfilePage/author-profile' className={styles.books}><LibraryBooksIcon/>
        </a>
        <a href='/components/Privacy/PrivacySettings'><SettingsIcon className={styles.settings}/></a>
        </div>
        {

        }
        <Avatar
        className={styles.avatar}
        sx={{ width: 140, height: 140 }}
        src={profilePicture}
        onClick={handleOpenDialog}
          />
          <Dialog
          open={open}
          onClose={handleCloseDialog}
          sx={{
            '& .MuiDialog-paper': { overflow: 'visible' },
            direction: 'rtl' // Adding RTL direction
          }}
        >
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: "bold", color: "black" }} >
            صورة الملف الشخصي
            <Button sx={{ marginRight: "200px", fontWeight: "lighter", color: "gray" }} onClick={handleCloseDialog} color="primary">
              <CloseIcon />
            </Button>
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ fontWeight: "bold", color: "black" }}>
              اختر الإجراء الذي ترغب في تنفيذه على صورة الملف الشخصي
            </DialogContentText>
            <DialogActions>
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="file-upload" /* Added id attribute */
                ref={fileInputRef}
                onChange={handleChangeProfilePicture}
              />
              <label htmlFor="file-upload"> {/* Matched htmlFor with id */}
              <Button
            variant="outlined"
            component="span"
            endIcon={<EditIcon />}
            onClick={handleOpenProfileSection}
            sx={{
              textTransform: 'none',
              marginLeft: "120px",
              color: '#C28E0A',
              borderColor: '#C28E0A' // Set borderColor to the same color value as color
            }}
            >
            إضافة صورة
          </Button>

              </label>
              <Button
                variant="outlined"
                endIcon={<DeleteIcon />}
                onClick={handleDeleteProfilePicture}
                sx={{ textTransform: 'none', color: '#C28E0A', borderColor: '#C28E0A' }} // Set borderColor to the same color value as color
              >
                حذف
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>


        <div className={styles.intro}>
        <h1 className={styles.name}>{firstName} {lastName} </h1>
        <p className={styles.bio} style={{ maxHeight: '200px', overflowY: 'auto' }}>{bio}</p>
        <h5 className={styles.followers}>  المتابعون {props.followers}</h5>
        <Dialog open={openEditProfileDialog} onClose={handleCloseEditProfileDialog} sx={{ direction: 'rtl' }}>
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: "bold", color: "black" }} >
            تعديل المقدمة
            <Button sx={{ marginRight: "200px", fontWeight: "lighter", color: "gray" }} onClick={handleCloseEditProfileDialog} color="primary">
              <CloseIcon />
            </Button>
          </DialogTitle>
          <DialogContent>
          <TextField
  autoFocus
  margin="dense"
  label="الاسم"
  type="text"
  fullWidth
  value={editedFirstName}
  onChange={handleEditedFirstNameChange}
  InputLabelProps={{
    style: { fontWeight: '900', color: 'black' }
  }}
        />
        <TextField
          margin="dense"
          label="اللقب"
          type="text"
          fullWidth
          value={editedLastName}
          onChange={handleEditedLastNameChange}
          InputLabelProps={{
            style: { fontWeight: '900', color: 'black' }
          }}
        />
        <TextField
          margin="dense"
          label="السيرة الذاتية (20 كلمة كحد أقصى)"
          type="text"
          fullWidth
          value={editedBio}
          onChange={handleEditedBioChange}
          InputLabelProps={{
            style: { fontWeight: '900', color: 'black' }
          }}
        />

          </DialogContent>
          <DialogActions>
          <Button
          size="medium"
          variant="contained"
          onClick={handleSaveChanges}
          sx={{ 
            textTransform: 'none',
            color: '#FFFFFF', // Set text color
            backgroundColor: '#C26D0A', // Set background color
            borderColor: '#C26D0A', // Set border color
            borderRadius: "40px",
            fontWeight: "600",
            '&:hover': {
              backgroundColor: '#C26D0A', // Maintain the same background color on hover
            }
          }}
        >
          حفظ
        </Button>

          </DialogActions>
        </Dialog>


        <Dialog
        open={openProfileSection}
        onClose={handleCloseProfileSection}
        sx={{
          '& .MuiDialog-paper': { overflow: 'visible' },
          direction: 'rtl' // Adding RTL direction
        }}
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: "bold", color: "black" }} >
          إضافة إلى الملف الشخصي
          <Button sx={{ marginRight: "200px", fontWeight: "lighter", color: "gray" }} onClick={handleCloseProfileSection} color="primary">
            <CloseIcon />
          </Button>
        </DialogTitle>
        <DialogContent>
          <Button style={{ textTransform: 'none', fontWeight: "900", color: "black" }} fullWidth variant="text" className={styles.anchorButton}> إضافة حول</Button>
          <Button style={{ textTransform: 'none', fontWeight: "900", color: "black" }} fullWidth variant="text" className={styles.anchorButton}>إضافة الأعمال السابقة</Button>
          <Button style={{ textTransform: 'none', fontWeight: "900", color: "black" }} fullWidth variant="text" className={styles.anchorButton}> إضافة الأعمال المستقبلية</Button>
        </DialogContent>
      </Dialog>
      

      <Button
  id="open-button"
  size="small"
  variant="outlined"
  onClick={handleOpenProfileSection}
  sx={{
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    color: '#C28E0A',
    borderColor: '#C28E0A',
    textTransform: 'capitalize',
    fontWeight: 900,
    marginRight: '5px',
    fontSize: 'medium',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      borderColor: '#C28E0A'
    }
  }}
>
  إضافة قسم الملف الشخصي
</Button>
<Button
  size="small"
  variant="outlined"
  onClick={handleOpenEditProfileDialog}
  sx={{
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    color: '#C28E0A',
    borderColor: '#C28E0A',
    textTransform: 'capitalize',
    fontWeight: 900,
    marginRight: '5px',
    fontSize: 'medium',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      borderColor: '#C28E0A'
    }
  }}
  endIcon={<EditIcon />}
>
  تعديل الملف الشخصي
</Button>
       
       
        </div>
        </Paper>
  )
}


export default ProfileCard